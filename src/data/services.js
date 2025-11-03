// บริการหลักและราคาตามภาพเมนูที่ให้มา
export const services = [
  {
    id: 'relaxing',
    title: 'Relaxing Massage',
    photo: 'aroma',
    items: [
      { duration: '30 Minutes', price: '$60' },
      { duration: '45 Minutes', price: '$80' },
      { duration: '60 Minutes', price: '$95' },
      { duration: '90 Minutes', price: '$140' },
      { duration: '120 Minutes', price: '$180' },
    ],
  },
  {
    id: 'combination',
    title: 'Combination Massage',
    photo: 'foot',
    items: [
      { duration: '30 Minutes', price: '$60' },
      { duration: '45 Minutes', price: '$80' },
      { duration: '60 Minutes', price: '$95' },
      { duration: '90 Minutes', price: '$140' },
      { duration: '120 Minutes', price: '$180' },
    ],
  },
  {
    id: 'thai',
    title: 'Thai Traditional Massage',
    photo: 'thai',
    items: [
      { duration: '30 Minutes', price: '$60' },
      { duration: '45 Minutes', price: '$80' },
      { duration: '60 Minutes', price: '$95' },
      { duration: '90 Minutes', price: '$140' },
      { duration: '120 Minutes', price: '$180' },
    ],
  },
];

// บริการเสริม (Add-ons)
export const addons = [
  { title: 'Aromatherapy', price: '$10' },
  { title: 'Hot Stone', price: '$10' },
  { title: 'Herbal Compress', price: '$10' },
];