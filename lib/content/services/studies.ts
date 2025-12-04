// Studies Service Content

export const studiesContent = {
  hero: {
    title: 'Studies',
    subtitle: 'Keep your mind on classes - we manage immigration',
    description: 'We help international students apply to Polish universities, secure visas and settle in with all required documentation handled for you.',
    ctaButton: 'Our Services',
    formTitle: 'Studies Consultation',
    formSource: 'studies-service',
  },
  trust: {
    heading: 'Your plans are unique? Tell us.',
    subheading: 'We\'ll tailor the process for you.',
    description: "Every university and visa case is different - and that's only the beginning. Your chosen program, application deadlines, visa type, and the country you're coming from all affect the steps you need to take. Whether it's securing admission, gathering documents, or applying for your student visa, we don't offer one-size-fits-all advice. We take the time to understand your full situation and guide you through the right process - clearly, personally, and with zero guesswork.",
    stats: {
      period: '6 months',
      count: '500+',
      text: 'foreigners trusted us by reaching out with their immigration needs',
    },
  },
  qa: {
    title: 'Studies Services',
    searchPlaceholder: 'Looking for something?',
    items: [
      {
        question: 'How do we assist students that want to study in Poland?',
        answer: 'We take you from idea to arrival in three simple steps.\n\nFirst is university admission: we help you pick the right programs, explain requirements and deadlines, collect your documents, prepare and submit applications, and stay in touch with the university until a decision is issued. If your diploma needs official recognition (NAVA/nostrification), we prepare that filing and track it for you.\n\nSecond is visa and entry: if a visa is required, we choose the correct type, complete the forms, book your consulate visit, get you ready for the interview, and provide the proofs you\'ll need (like accommodation and insurance). If you can enter without a visa, we prepare the documents you\'ll need for legal stay.\n\nThird is settling in Poland: after you land, we handle your PESEL application and file your Temporary Residence Card (TRC) on a student basis, guiding you through any follow-ups until it\'s done. All along the way you get clear instructions, document checklists, and status updates, so you can stay focused on studying while we handle the formalities.',
      },
      {
        question: 'Stage 1 - University Admission',
        answer: 'While you are still abroad, we handle two main areas: University Application and Nava (Nostrification) if needed.\n\nFor University Application, we research suitable universities and programs that fit your background and goals, explain entrance requirements and deadlines for each program, help collect and organize all required documents (diplomas, transcripts, references, etc.), prepare and polish your application package including forms and any required statements, submit applications on your behalf and monitor progress, and facilitate communication with the university until you receive an admission decision.\n\nFor Nava – Nostrification (optional), we validate foreign diplomas or certificates so they are officially recognized in Poland, handle the paperwork and submission to the appropriate Polish authority, and follow up on the process until completion, which can take up to 60 days.',
      },
      {
        question: 'Stage 2 - Visa & Entry',
        answer: 'This stage only required if you don\'t already have a green passport or other legal means to enter and stay in Poland.\n\nFor Visa Arrangement, we identify the correct visa type for your situation and chosen university, provide a checklist of documents (acceptance letter, financial proof, health insurance, etc.), assist in filling out the visa application and booking your consular appointment, and support you with interview preparation and tracking the application status.\n\nFor Proof of Accommodation, we prepare and supply the official accommodation documents demanded by the Polish authorities.',
      },
      {
        question: 'Stage 3 - Settling in Poland',
        answer: 'Once you have arrived, we handle two key processes: PESEL and TRC (Temporary Residence Card).\n\nFor PESEL, we prepare the application for your national identification number and submit the request at the local municipal office and guide you through any follow-up.\n\nFor TRC – Temporary Residence Card, we explain all requirements for the student residence permit, collect and prepare supporting documents (university certificate, financial means, etc.), and file the application and assist you through the process until the card is issued.',
      },
    ],
  },
  otherServices: {
    heading: 'Need help with any of these services?',
    ctaButton: 'Get Started',
    alternativeText: "Didn't find what you need? Check out our other services!",
    categories: ['Immigration', 'Business', 'Language', 'Driving'],
  },
} as const;
