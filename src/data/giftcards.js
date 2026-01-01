// eGift Card data with Square pricing
export const giftCards = [
    {
        id: 'egift-95',
        amount: '$95',
        title: '1-Hour Massage',
        description: 'Valid for any 60-minute massage service — Combination, Relaxation, or Thai Massage',
        popular: false,
    },
    {
        id: 'egift-180',
        amount: '$180',
        title: 'Flexible Session',
        description: 'Use as two separate 1-hour sessions or enjoy a continuous 2-hour treatment',
        popular: false,
    },
    {
        id: 'egift-285',
        amount: '$285',
        title: 'Premium Package',
        description: 'Three 1-hour massage sessions with complimentary Hot Stone Therapy & Herbal Compress',
        popular: false,
    },
    {
        id: 'egift-380',
        amount: '$380',
        title: 'Ultimate Gift',
        description: 'Four 1-hour massage sessions with complimentary Hot Stone Therapy & Herbal Compress',
        popular: false,
    },
];

// Single purchase link for all eGift Cards (Square)
export const giftCardPurchaseUrl = 'https://app.squareup.com/gift/ML146H5G9WPE3/order';

// Balance check URL
export const giftCardBalanceUrl = 'https://app.squareup.com/gift/ML146H5G9WPE3/check-balance';
