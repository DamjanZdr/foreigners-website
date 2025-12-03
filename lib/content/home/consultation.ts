// Consultation Section Content

export const consultationContent = {
  heading: 'Ready to Start Your Immigration Journey?',
  description: 'Book a free consultation with our expert team. We respond within 24 hours and provide personalized guidance for your specific situation. Let us help you navigate Polish immigration law with confidence.',
  form: {
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'Enter your full name',
    contactNumberLabel: 'Contact Number',
    countryCode: '� +48',
    contactNumberPlaceholder: '123 456 789',
    emailLabel: 'Email',
    emailPlaceholder: 'your.email@example.com',
    serviceLabel: 'Service Interested In',
    servicePlaceholder: 'Select a service',
    consultationTypeLabel: 'Preferred Consultation Type',
    consultationTypePlaceholder: 'Select type',
    messageLabel: 'Message (Optional)',
    messagePlaceholder: 'Tell us about your situation...',
    submitButton: 'Send Inquiry',
    privacyText: 'By submitting this form, you agree to our privacy policy and terms of service.',
  },
  formOptions: {
    services: [
      { value: 'immigration', label: 'Immigration' },
      { value: 'driving', label: 'Driving License' },
      { value: 'language', label: 'Language Courses' },
      { value: 'business', label: 'Business Services' },
      { value: 'studies', label: 'Studies' },
      { value: 'other', label: 'Other' },
    ],
    consultationTypes: [
      { value: 'office', label: 'Office Visit' },
      { value: 'phone', label: 'Phone Call' },
      { value: 'video', label: 'Video Call' },
    ],
  },
} as const;
