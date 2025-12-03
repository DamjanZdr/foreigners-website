'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/cards';
import { Input, Select, Checkbox } from '@/components/ui/inputs';
import { Button } from '@/components/ui/buttons';
import { theme } from '@/lib/theme';

interface LeadFormProps {
  title?: string;
}

export default function LeadForm({ title = 'Start now, pay in installments' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    contactMethod: '',
    acceptedTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'email', label: 'Email' },
    { value: 'video', label: 'Video Call' },
  ];

  return (
    <div className="relative">
      <Card padding="lg">
        {title && (
          <div className="mb-6">
            <h3 className={`${theme.fontSize.xl} ${theme.fontWeight.bold} text-gray-900 mb-2`}>
              {title}
            </h3>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className={`w-20 px-3 py-3 ${theme.radius.md} border border-gray-300 bg-gray-50 flex items-center justify-center`}>
                <span className={`${theme.fontSize.sm} ${theme.fontWeight.medium}`}> +48</span>
              </div>
              <input
                type="tel"
                id="contactNumber"
                required
                className={`flex-1 px-4 py-3 ${theme.radius.md} border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none ${theme.transition.default}`}
                placeholder="123 456 789"
                value={formData.contactNumber}
                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              />
            </div>
            <p className={`mt-2 ${theme.fontSize.xs} text-primary`}>
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

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Submit
          </Button>
          
          <p className={`text-center ${theme.fontSize.sm} text-gray-900`}>
            for a Free Consultation
          </p>
        </form>
      </Card>
    </div>
  );
}
