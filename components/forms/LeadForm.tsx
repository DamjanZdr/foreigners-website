'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/cards';
import { Input, Select, Checkbox } from '@/components/ui/inputs';
import { Button } from '@/components/ui/buttons';
import { theme } from '@/lib/theme';
import { collectTrackingData } from '@/lib/utils/tracking';

interface LeadFormProps {
  title?: string;
  source?: string;
}

export default function LeadForm({ 
  title = 'Start now, pay in installments',
  source = 'unknown'
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    contactMethod: '',
    acceptedTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Collect tracking data
      const trackingData = collectTrackingData();
      console.log('[Form] Collected tracking data:', trackingData);

      // Prepare submission data
      const submissionData = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.contactNumber,
        contact_method: formData.contactMethod,
        source: source,
        privacy_accepted: formData.acceptedTerms,
        tracking: trackingData,
      };
      console.log('[Form] Submitting data:', submissionData);

      // Submit to API
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      console.log('[Form] API response status:', response.status);

      const data = await response.json();
      console.log('[Form] API response data:', data);

      if (!response.ok) {
        console.error('[Form] Submission failed:', data);
        throw new Error(data.error || 'Failed to submit form');
      }

      // Success
      console.log('[Form] ✅ Submission successful!');
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        contactNumber: '',
        email: '',
        contactMethod: '',
        acceptedTerms: false,
      });

    } catch (error) {
      console.error('[Form] ❌ Submission error:', error);
      console.error('[Form] Error details:', error instanceof Error ? error.message : 'Unknown error');
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { value: 'call', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'email', label: 'Email' },
  ];

  return (
    <div className="relative max-w-md mx-auto">
      <Card padding="md" glass={false} className="bg-white/95 backdrop-blur-sm">
        {title && (
          <div className="mb-4">
            <h3 className={`${theme.fontSize.lg} ${theme.fontWeight.bold} text-gray-900`}>
              {title}
            </h3>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="fullName"
            label="Full Name"
            required
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />

          <div>
            <label htmlFor="contactNumber" className={`block ${theme.fontSize.sm} ${theme.fontWeight.semibold} text-gray-700 mb-2`}>
              Contact Number*
            </label>
            <div className="flex gap-2">
              <div className={`w-16 px-2 py-2 ${theme.radius.md} border border-gray-100/50 bg-white/95 backdrop-blur-sm flex items-center justify-center`}>
                <span className={`${theme.fontSize.xs} ${theme.fontWeight.medium}`}> +48</span>
              </div>
              <input
                type="tel"
                id="contactNumber"
                required
                className={`flex-1 px-3 py-2 ${theme.radius.md} border border-gray-100/50 bg-white/95 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary-light outline-none ${theme.transition.default}`}
                placeholder="123 456 789"
                value={formData.contactNumber}
                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              />
            </div>
            <p className={`mt-1 ${theme.fontSize.xs} text-primary`}>
              This number has to be available on WhatsApp
            </p>
          </div>

          <Input
            id="email"
            label="Email"
            type="email"
            required
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Select
            id="contactMethod"
            label="Contact Method"
            required
            placeholder="Select a method"
            value={formData.contactMethod}
            onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
            options={contactMethods}
          />

          <Checkbox
            id="terms"
            required
            checked={formData.acceptedTerms}
            onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
            label={
              <>
                I have read and accepted the{' '}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a href="/terms" className="text-primary hover:underline">
                  Terms and Conditions of Service
                </a>
              </>
            }
          />

          {submitStatus === 'success' && (
            <div className={`p-3 ${theme.radius.md} bg-green-50 border border-green-200`}>
              <p className={`${theme.fontSize.sm} text-green-800 ${theme.fontWeight.semibold}`}>
                ✓ Thank you! We'll contact you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className={`p-3 ${theme.radius.md} bg-red-50 border border-red-200`}>
              <p className={`${theme.fontSize.sm} text-red-800 ${theme.fontWeight.semibold}`}>
                ✗ {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            </div>
          )}

          <Button 
            type="submit" 
            variant="primary" 
            size="md" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          
          <p className={`text-center ${theme.fontSize.xs} text-gray-600`}>
            for a Free Consultation
          </p>
        </form>
      </Card>
    </div>
  );
}
