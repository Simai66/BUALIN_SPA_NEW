// บริการหลักและราคาตามภาพเมนูล่าสุดที่ให้มา
export const services = [
  {
    id: 'relaxing',
    title: 'Relaxation Massage',
    photo: 'photo2',
    bookingUrl: 'https://book.squareup.com/appointments/5btap1cnsywghf/location/L78WC3SYY14NQ/services/ZWBRMP2ZD6TWLMEWO7AROBGY',
    description:
      "Experience a shooting soft to medium pressure massage designed to melt away tention and restore ballance. it's come with warm aromatic essential oils to enhance relaxation, ease muscle stiffness, and clam the mind .",
    items: [
      { duration: '60 Minutes', price: '$95' },
      { duration: '90 Minutes', price: '$135' },
      { duration: '120 Minutes', price: '$180' },
    ],
  },
  {
    id: 'combination',
    title: 'Combination Massage',
    photo: 'photo4',
    bookingUrl: 'https://book.squareup.com/appointments/5btap1cnsywghf/location/L78WC3SYY14NQ/services/UB7RBSE4EQDDL7ZLUWYUAY5P',
    description:
      'This specialized treatment is a Thai Combination Massage that expertly fuses traditional Thai therapeutic techniques with the soothing, deep relaxation of an oil massage, all while utilizing warm coconut oil. This blend is specifically designed to provide intense stress relief and combat deep tiredness.',
    items: [
      { duration: '60 Minutes', price: '$95' },
      { duration: '90 Minutes', price: '$135' },
      { duration: '120 Minutes', price: '$180' },
    ],
  },
  {
    id: 'thai',
    title: 'Traditional Thai Massage',
    photo: 'photo_1',
    bookingUrl: 'https://book.squareup.com/appointments/5btap1cnsywghf/location/L78WC3SYY14NQ/services/6R3K376KL7PJXKBFNSQJQIKK',
    description:
      'Traditional Thai Massage (Nuad Thai) is a powerful healing art that blends deep compression with assisted yoga stretching. The therapist uses their body to apply targeted pressure to energy channels, effectively relieving chronic pain, restoring flexibility, and boosting your natural energy.',
    items: [
      { duration: '60 Minutes', price: '$95' },
      { duration: '90 Minutes', price: '$135' },
      { duration: '120 Minutes', price: '$180' },
    ],
  },
];

// บริการเสริม (Add-ons)
export const addons = [
  { title: 'Hot stone', price: '$15' },
  { title: 'Herbal compress', price: '$15' },
];