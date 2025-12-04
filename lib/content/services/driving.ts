// Driving Service Content

export const drivingContent = {
  hero: {
    title: 'Driving',
    subtitle: 'Get behind the wheel - we handle the rest',
    description: 'Need help with car registration, driving licenses, or parking permits? Fill out the form and our specialists will be in touch with you as soon as possible.',
    ctaButton: 'Our Services',
    formTitle: 'Driving Consultation',
    formSource: 'driving-service',
  },
  trust: {
    heading: 'Your case is unique? Let us know.',
    subheading: 'We will tailor the service for you.',
    description: "Driving regulations vary greatly depending on your country of origin - and that's just the start. Your current license type, how soon it expires, the basis of your stay in Poland, and how long you've been here all affect what steps you need to take. Whether it's registration, a new license, or conversion, we don't just give one-size-fits-all answers. We take the time to understand your full situation and guide you through the right process - clearly, personally, and with zero guesswork.",
    stats: {
      period: '6 months',
      count: '300+',
      text: 'foreigners trusted us with their driving license needs',
    },
  },
  qa: {
    title: 'Driving Services',
    searchPlaceholder: 'Looking for something?',
    items: [
      {
        question: 'What do our driving services include?',
        answer: 'The only thing we don\'t assist with is learning to drive. Everything else - from paperwork to office visits - we\'ve got covered. This includes, but is not limited to: Car Registration, New Driving License, Driving License Conversion, and Parking Permit.',
      },
      {
        question: 'New Driving License',
        answer: 'If you\'ve never held a driving license before and want to get one in Poland, you\'ll need to go through the official process - medical checks, driving school, exams, and then applying for the license. The system has specific rules for foreigners depending on your residence type, country of origin, and how long you\'ve stayed in Poland.\n\nWe can support you through the entire process. From booking a medical exam to finding an English-speaking driving school and explaining every step along the way, we\'re here to make sure you don\'t waste time or money. We\'ll also help you apply for the license once you pass your exams, so everything is submitted correctly with no delays.',
      },
      {
        question: 'Driving License Conversion',
        answer: 'Converting your foreign license to a Polish one isn\'t as straightforward as it seems. The rules vary based on which country issued your license, when it was issued, its current status (valid, expired, temporary), and how long you\'ve lived in Poland. Some licenses can be exchanged directly, while others may require additional tests or paperwork.\n\nWe analyze your specific case and guide you through the correct procedure. Whether your license is from the EU, a recognized treaty country, or a non-recognized one, we\'ll tell you what\'s possible, what\'s needed, and how long it will take. We prepare and submit the application for you, deal with the translation and paperwork, and follow up with the office if needed.',
      },
      {
        question: 'Parking Permit',
        answer: 'Parking permits in Poland are issued based on your place of residence and can apply to specific city zones or national disability programs. Having a registered address and proof of car ownership may be required - and the process changes slightly between cities.\n\nWe help you check if you\'re eligible, gather the needed documents, and apply for the right type of permit. Whether it\'s a local resident pass or something more specialized, we handle the application and communication with the city office, so you don\'t need to worry about missing steps or language barriers.',
      },
      {
        question: 'Car Registration',
        answer: 'Registering a car in Poland means officially linking the vehicle to your name and legal stay. It\'s required whether you\'ve bought a car in Poland or brought one from abroad. The process can involve multiple steps - from technical inspections and emissions stickers to insurance and tax payments. Requirements can differ based on where the car is from, your residence status, and whether the car is new or used.\n\nWe handle the full registration process for you. Whether you\'ve already purchased a vehicle or are just planning to, we help gather the right documents, prepare the necessary forms, and take care of visits to the proper offices. You won\'t need to worry about language barriers or missing anything - we guide you from start to finish until your car is legally registered and road-ready.',
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
