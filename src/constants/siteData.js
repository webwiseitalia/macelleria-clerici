// Dati centralizzati del sito Macelleria Clerici

export const SITE_DATA = {
  // Informazioni aziendali
  name: 'Macelleria Clerici',
  legalName: 'Clerici Attilio & C. S.N.C.',
  description: 'Macelleria artigianale a Pisogne dal 1989. Carni fresche selezionate, salumi artigianali e arrosti allo spiedo.',
  foundingYear: 1989,

  // Contatti
  phone: '0364 89008',
  phoneLink: 'tel:036489008',
  email: 'clericiattiliosnc@legalmail.it',
  emailType: 'PEC',

  // Indirizzo
  address: {
    street: 'Via Provinciale, 27',
    locality: 'Gratacasolo',
    city: 'Pisogne',
    province: 'BS',
    postalCode: '25055',
    country: 'IT',
    full: 'Via Provinciale, 27 - 25055 Gratacasolo, Pisogne (BS)',
    region: 'Lombardia',
  },

  // Coordinate geografiche
  geo: {
    latitude: 45.8078,
    longitude: 10.1078,
  },

  // Orari di apertura
  openingHours: {
    weekdays: '8:00 - 12:30 / 15:30 - 19:00',
    saturday: '8:00 - 12:30',
    sunday: 'Chiuso',
    // Formato Schema.org
    schemaOrg: [
      'Mo-Fr 08:00-12:30',
      'Mo-Fr 15:30-19:00',
      'Sa 08:00-12:30',
    ],
  },

  // URL del sito
  url: 'https://macelleria-clerici.it',

  // Social e link esterni
  social: {
    googleMaps: 'https://www.google.com/maps/search/?api=1&query=Via+Provinciale+27+Gratacasolo+Pisogne+BS',
  },

  // Cookie
  cookieConsentKey: 'macelleria-clerici-cookie-consent',

  // SEO
  seo: {
    title: 'Macelleria Clerici | Carni Fresche di Qualità a Pisogne dal 1989',
    description: 'Macelleria Clerici a Pisogne - Dal 1989 carni fresche selezionate, salumi artigianali e arrosti. Vieni a trovarci!',
    keywords: 'macelleria Pisogne, macelleria Gratacasolo, macelleria Lago d\'Iseo, carni fresche Brescia, macelleria artigianale, Clerici',
    ogImage: '/og-image.jpg',
  },
}

// Helper per ottenere l'indirizzo formattato
export const getFullAddress = () => {
  const { street, postalCode, locality, city, province } = SITE_DATA.address
  return `${street}, ${postalCode} ${locality}, ${city} (${province})`
}

// Helper per link Google Maps
export const getGoogleMapsLink = () => SITE_DATA.social.googleMaps

export default SITE_DATA
