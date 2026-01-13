import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import cestiRegaloImg from '../assets/foto/foto-11.webp'
import spiediImg from '../assets/foto/foto-4.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Map card reveal
      gsap.fromTo('.hero-map-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.5,
        }
      )

      // Info items stagger
      gsap.fromTo('.hero-info-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.8,
        }
      )

      // Title words
      gsap.fromTo('.hero-title-word',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.3,
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* HERO - Centered design with map background */}
      <section ref={heroRef} className="relative min-h-screen bg-[#2e2e2e] overflow-hidden">
        {/* Map as background */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.8!2d10.1078!3d45.8078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ4JzI4LjEiTiAxMMKwMDYnMjguMSJF!5e0!3m2!1sit!2sit!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Macelleria Clerici"
            className="grayscale contrast-125 opacity-30"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e2e2e] via-[#2e2e2e]/80 to-[#2e2e2e]"></div>
        </div>

        {/* Center content */}
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32">
          {/* Label */}
          <div className="hero-info-item mb-6">
            <span className="inline-flex items-center gap-3 text-[#e8d9c5]">
              <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
              <span className="text-xs tracking-[0.25em] uppercase font-medium">Vieni a Trovarci</span>
              <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-[#f9f5f0] mb-6">
            <span className="hero-title-word block text-[clamp(2.5rem,10vw,7rem)] leading-[0.9]">
              Dove
            </span>
            <span className="hero-title-word block text-[clamp(3rem,12vw,9rem)] leading-[0.9] text-[#7f1d1d]" style={{ textShadow: '2px 2px 0 rgba(249,245,240,0.1)' }}>
              Siamo
            </span>
          </h1>

          {/* Address + Phone inline */}
          <p className="hero-info-item text-[#f9f5f0]/70 text-base md:text-lg max-w-md leading-relaxed mb-8">
            Via Provinciale, 27 - Gratacasolo, Pisogne (BS)<br />
            <span className="text-[#e8d9c5] font-medium">Lago d'Iseo • Dal 1989</span>
          </p>

          {/* CTA buttons */}
          <div className="hero-info-item flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="tel:036489008"
              className="group relative inline-flex items-center gap-3 bg-[#7f1d1d] text-[#f9f5f0] px-6 py-3.5 overflow-hidden"
            >
              <span className="relative z-10 text-sm uppercase tracking-wider font-medium">Chiamaci Ora</span>
              <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-[#991b1b] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Provinciale+27+Gratacasolo+Pisogne+BS"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#f9f5f0]/80 hover:text-[#f9f5f0] transition-colors"
            >
              <span className="text-sm uppercase tracking-wider">Apri Maps</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Bottom info - attached to main block */}
          <div className="hero-info-item flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-6 border-t border-[#f9f5f0]/10">
            <div className="text-center">
              <span className="block text-[#f9f5f0]/40 text-xs uppercase tracking-wider mb-1">Telefono</span>
              <span className="text-[#f9f5f0] font-serif text-base md:text-lg">0364 89008</span>
            </div>
            <div className="w-[1px] h-10 bg-[#f9f5f0]/10 hidden sm:block"></div>
            <div className="text-center">
              <span className="block text-[#f9f5f0]/40 text-xs uppercase tracking-wider mb-1">Orari</span>
              <span className="text-[#f9f5f0] font-serif text-base md:text-lg">Lun-Ven 8-19</span>
            </div>
            <div className="w-[1px] h-10 bg-[#f9f5f0]/10 hidden sm:block"></div>
            <div className="text-center">
              <span className="block text-[#f9f5f0]/40 text-xs uppercase tracking-wider mb-1">Sabato</span>
              <span className="text-[#f9f5f0] font-serif text-base md:text-lg">8-12:30</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f9f5f0]/30">
          <span className="text-xs tracking-widest uppercase">Scopri di più</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#f9f5f0]/30 to-transparent"></div>
        </div>
      </section>

      {/* INFORMAZIONI DI CONTATTO - ASIMMETRICO */}
      <section className="py-[var(--space-xl)] bg-[#f9f5f0] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 pointer-events-none">
          <span className="font-serif text-[20vw] font-bold text-[#7f1d1d]/[0.03] leading-none block translate-x-1/4 -translate-y-1/4">
            Info
          </span>
        </div>

        <div className="container-fluid relative">
          <div className="grid grid-cols-12 gap-8">
            {/* Header - Left */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-1">
              {/* Label */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-3 text-[#7f1d1d]">
                  <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                  <span className="text-xs tracking-[0.25em] uppercase font-medium">I Nostri Recapiti</span>
                </span>
              </div>

              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1] mb-6">
                Informazioni
                <span className="block text-[#7f1d1d]">di Contatto</span>
              </h2>

              <p className="text-[#2e2e2e]/60 text-lg leading-relaxed">
                Siamo sempre a disposizione per rispondere alle tue domande e aiutarti a scegliere
                <span className="text-[#7f1d1d] font-medium"> i migliori tagli</span>.
              </p>
            </div>

            {/* Cards - Right, staggered */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-6">
              {/* Indirizzo */}
              <div className="bg-white p-8 flex gap-6">
                <div className="w-14 h-14 flex-shrink-0 bg-[#7f1d1d] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#f9f5f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#2e2e2e] mb-2">Indirizzo</h3>
                  <address className="not-italic text-[#2e2e2e]/60 leading-relaxed mb-3">
                    Via Provinciale, 27<br />
                    25055 Gratacasolo, Pisogne (BS)
                  </address>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Via+Provinciale+27+Gratacasolo+Pisogne+BS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#7f1d1d] text-sm uppercase tracking-wider hover:text-[#991b1b]"
                  >
                    Apri Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Telefono - accent */}
              <div className="bg-[#7f1d1d] text-[#f9f5f0] p-8 flex gap-6 lg:ml-12">
                <div className="w-14 h-14 flex-shrink-0 border border-[#f9f5f0]/30 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Telefono</h3>
                  <a
                    href="tel:036489008"
                    className="font-serif text-3xl hover:text-[#e8d9c5] transition-colors"
                  >
                    0364 89008
                  </a>
                  <p className="text-[#f9f5f0]/50 text-sm mt-2">Clicca per chiamare</p>
                </div>
              </div>

              {/* PEC */}
              <div className="bg-white p-8 flex gap-6">
                <div className="w-14 h-14 flex-shrink-0 bg-[#7f1d1d] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#f9f5f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#2e2e2e] mb-2">PEC</h3>
                  <a
                    href="mailto:clericiattiliosnc@legalmail.it"
                    className="text-[#7f1d1d] hover:text-[#991b1b] break-all"
                  >
                    clericiattiliosnc@legalmail.it
                  </a>
                  <p className="text-[#2e2e2e]/50 text-sm mt-2">Per comunicazioni ufficiali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORARI - Split ASIMMETRICO */}
      <section className="relative">
        {/* Left - Image */}
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-[40%]">
          <img
            src={cestiRegaloImg}
            alt="I nostri prodotti"
            className="w-full h-64 lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2e2e2e]/30"></div>
        </div>

        {/* Right - Content */}
        <div className="relative bg-[#2e2e2e] text-[#f9f5f0] lg:ml-[40%]">
          <div className="py-[var(--space-xl)] px-[var(--space-md)] lg:px-[var(--space-lg)]">
            {/* Label */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#e8d9c5]">
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Quando Trovarci</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f9f5f0] leading-[1.1] mb-10">
              Orari di
              <span className="block text-[#e8d9c5]">Apertura</span>
            </h2>

            {/* Orari */}
            <div className="space-y-4 max-w-md">
              <div className="flex justify-between items-center border-b border-[#f9f5f0]/10 pb-4">
                <span className="text-[#f9f5f0]/60">Lunedì - Venerdì</span>
                <span className="font-medium">8:00 - 12:30 / 15:30 - 19:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#f9f5f0]/10 pb-4">
                <span className="text-[#f9f5f0]/60">Sabato</span>
                <span className="font-medium">8:00 - 12:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#f9f5f0]/60">Domenica</span>
                <span className="text-[#7f1d1d]">Chiuso</span>
              </div>
            </div>

            <p className="mt-8 text-[#f9f5f0]/40 text-sm">
              Gli orari possono subire variazioni. Ti consigliamo di verificare telefonicamente.
            </p>

            {/* Quick call */}
            <div className="mt-10 pt-8 border-t border-[#f9f5f0]/10">
              <a
                href="tel:036489008"
                className="group inline-flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-[#7f1d1d] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#f9f5f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[#f9f5f0]/50 text-xs uppercase tracking-wider">Chiamaci</span>
                  <span className="font-serif text-xl group-hover:text-[#e8d9c5] transition-colors">0364 89008</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAPPA - ASIMMETRICA */}
      <section className="py-[var(--space-xl)] bg-[#f9f5f0] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <span className="font-serif text-[20vw] font-bold text-[#2e2e2e]/[0.02] leading-none block -translate-x-1/4 translate-y-1/4">
            Maps
          </span>
        </div>

        <div className="container-fluid relative">
          <div className="grid grid-cols-12 gap-8">
            {/* Header - Right */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:order-2">
              {/* Label */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-3 text-[#7f1d1d] lg:justify-end">
                  <span className="text-xs tracking-[0.25em] uppercase font-medium">Posizione</span>
                  <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                </span>
              </div>

              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1] mb-6 lg:text-right">
                Come
                <span className="block text-[#7f1d1d]">Arrivare</span>
              </h2>

              {/* Indicazioni */}
              <div className="space-y-4 lg:text-right">
                <div>
                  <strong className="text-[#2e2e2e] block mb-1">Da Brescia</strong>
                  <span className="text-[#2e2e2e]/60 text-sm">SS510 direzione Lago d'Iseo</span>
                </div>
                <div>
                  <strong className="text-[#2e2e2e] block mb-1">Da Bergamo</strong>
                  <span className="text-[#2e2e2e]/60 text-sm">SS42 lungo il Lago d'Iseo</span>
                </div>
                <div>
                  <strong className="text-[#2e2e2e] block mb-1">Parcheggio</strong>
                  <span className="text-[#2e2e2e]/60 text-sm">Disponibile nelle vicinanze</span>
                </div>
              </div>
            </div>

            {/* Map - Left, large */}
            <div className="col-span-12 lg:col-span-8 lg:order-1 relative">
              <div className="aspect-[4/3] lg:aspect-[16/10] bg-[#2e2e2e] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.8!2d10.1078!3d45.8078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQ4JzI4LjEiTiAxMMKwMDYnMjguMSJF!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Macelleria Clerici"
                  className="grayscale contrast-125 opacity-80"
                ></iframe>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#7f1d1d] text-[#f9f5f0] p-6 hidden md:block">
                <span className="block font-serif text-3xl font-bold">📍</span>
                <span className="text-[#f9f5f0]/60 text-xs uppercase tracking-wider">Pisogne</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMMAGINE + INFO - ASIMMETRICO */}
      <section className="relative">
        {/* Right - Image */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[55%]">
          <img
            src={spiediImg}
            alt="I nostri arrosti allo spiedo"
            className="w-full h-64 lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#7f1d1d]/10"></div>
        </div>

        {/* Left - Content */}
        <div className="relative bg-[#7f1d1d] text-[#f9f5f0] lg:mr-[55%]">
          <div className="py-[var(--space-xl)] px-[var(--space-md)] lg:px-[var(--space-lg)]">
            {/* Label */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#f9f5f0]/60">
                <span className="w-8 h-[2px] bg-[#e8d9c5]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Siamo Qui Per Te</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f9f5f0] leading-[1.1] mb-6">
              Ti
              <span className="block text-[#e8d9c5]">Aspettiamo!</span>
            </h2>

            {/* Description */}
            <p className="text-[#f9f5f0]/70 text-lg leading-relaxed mb-10 max-w-md">
              Hai domande o vuoi prenotare un taglio particolare?
              <span className="text-[#e8d9c5] font-medium"> Chiamaci</span> o passa direttamente in negozio.
            </p>

            {/* Big phone button */}
            <a
              href="tel:036489008"
              className="group inline-flex items-center gap-4 bg-[#f9f5f0] text-[#7f1d1d] px-8 py-5 hover:bg-[#e8d9c5] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-serif text-2xl">0364 89008</span>
            </a>
          </div>
        </div>
      </section>

      {/* DATI AZIENDALI */}
      <section className="py-8 bg-[#2e2e2e]">
        <div className="container-fluid">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center text-[#f9f5f0]/40 text-sm">
              <p className="text-[#f9f5f0]/60 mb-2">Clerici Attilio & C. S.N.C.</p>
              <p>Via Provinciale, 27 - 25055 Gratacasolo, Pisogne (BS)</p>
              <p>Tel: 0364 89008 | PEC: clericiattiliosnc@legalmail.it</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
