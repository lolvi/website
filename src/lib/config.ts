// Configuration constants for the application

export const APP_CONFIG = {
  name: 'Lo Olvide Pagar',
  company: 'Lo Olvide Pagar SAS',
  url: 'https://lolvi.co',
  supportEmail: 'support@lolvi.co',
  phone: '+57 300 123 4567',
} as const;

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/lolvi.co/',
  facebook: 'https://www.facebook.com/lolvicol',
} as const;

export const ROUTES = {
  home: '/',
  terms: '/terminosycondiciones',
  privacy: '/privacidad',
} as const;

export const PLANS = [
  {
    id: 'basic',
    name: 'Plan Básico',
    price: 9900,
    maxBills: 5,
    features: [
      'Hasta 5 facturas',
      'Recordatorios automáticos',
      'Soporte por email',
    ],
  },
  {
    id: 'premium',
    name: 'Plan Premium',
    price: 19900,
    maxBills: 15,
    features: [
      'Hasta 15 facturas',
      'Recordatorios automáticos',
      'Pagos automáticos',
      'Soporte prioritario',
    ],
  },
] as const;