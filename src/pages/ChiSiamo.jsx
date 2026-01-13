import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import cestiRegaloImg from '../assets/foto/foto-11.webp'
import salumiNataleImg from '../assets/foto/foto-1.webp'
import cestoCompletoImg from '../assets/foto/foto-9.webp'
import spiediImg from '../assets/foto/foto-4.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero timeline reveal
      const tl = gsap.timeline()

      tl.fromTo('.hero-year',
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo('.hero-title-word',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo('.hero-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power2.inOut' },
        '-=0.4'
      )
      .fromTo('.hero-desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )

      // Parallax year
      gsap.to('.hero-year', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* HERO - Full screen con anno gigante centrato */}
      <section ref={heroRef} className="relative min-h-screen bg-[#f9f5f0] overflow-hidden">
        {/* Central year - massive */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="hero-year font-serif text-[40vw] md:text-[35vw] font-bold text-[#7f1d1d]/[0.08] leading-none">
            1989
          </span>
        </div>

        {/* Content overlay */}
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-[var(--space-md)] py-32">
          {/* Small label */}
          <div className="hero-desc mb-6">
            <span className="inline-flex items-center gap-3 text-[#7f1d1d]">
              <span className="w-8 h-[1px] bg-[#7f1d1d]"></span>
              <span className="text-xs tracking-[0.3em] uppercase">La Nostra Storia</span>
              <span className="w-8 h-[1px] bg-[#7f1d1d]"></span>
            </span>
          </div>

          {/* Main title */}
          <h1 className="font-serif text-[#2e2e2e] mb-8 overflow-hidden">
            <span className="hero-title-word inline-block text-[clamp(3rem,10vw,7rem)] leading-[1]">
              Una Famiglia,
            </span>
            <br />
            <span className="hero-title-word inline-block text-[clamp(3.5rem,12vw,9rem)] leading-[1] text-[#7f1d1d]">
              Una Passione
            </span>
          </h1>

          {/* Decorative line */}
          <div className="hero-line w-24 h-[2px] bg-[#7f1d1d] mb-8 origin-left"></div>

          {/* Description */}
          <p className="hero-desc text-[#2e2e2e]/60 text-lg md:text-xl max-w-lg leading-relaxed">
            Dal 1989 a Gratacasolo, Pisogne. Tre generazioni di esperienza
            al servizio della qualità e della tradizione.
          </p>

          {/* Scroll hint */}
          <div className="hero-desc absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[#2e2e2e]/30 text-xs tracking-widest uppercase">Scopri di più</span>
            <svg className="w-5 h-5 text-[#2e2e2e]/30 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Corner images */}
        <div className="absolute bottom-0 left-0 w-1/3 max-w-xs hidden lg:block" data-animate="image">
          <img src={salumiNataleImg} alt="" className="w-full aspect-[3/4] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f9f5f0] to-transparent"></div>
        </div>
        <div className="absolute top-20 right-0 w-1/4 max-w-[200px] hidden lg:block" data-animate="image">
          <img src={cestiRegaloImg} alt="" className="w-full aspect-square object-cover" />
        </div>
      </section>

      {/* STORIA - ASIMMETRICO */}
      <section className="py-[var(--space-xl)] bg-[#2e2e2e] text-[#f9f5f0] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <span className="font-serif text-[20vw] font-bold text-[#f9f5f0]/[0.02] leading-none block translate-x-1/4 translate-y-1/4">
            Storia
          </span>
        </div>

        <div className="container-fluid relative">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Image - Left, large */}
            <div className="col-span-12 lg:col-span-6 relative">
              <div className="overflow-hidden">
                <img
                  src={salumiNataleImg}
                  alt="I nostri salumi artigianali"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-[#7f1d1d] p-6 hidden md:block">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <span className="block font-serif text-4xl text-[#f9f5f0]">35+</span>
                    <span className="text-[#f9f5f0]/50 text-xs uppercase tracking-wider">Anni</span>
                  </div>
                  <div className="w-[1px] h-12 bg-[#f9f5f0]/20"></div>
                  <div className="text-center">
                    <span className="block font-serif text-4xl text-[#f9f5f0]">3</span>
                    <span className="text-[#f9f5f0]/50 text-xs uppercase tracking-wider">Generazioni</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Right, offset */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:mt-24">
              {/* Label */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-3 text-[#e8d9c5]">
                  <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                  <span className="text-xs tracking-[0.25em] uppercase font-medium">La Nostra Storia</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f9f5f0] leading-[1.1] mb-6">
                Dal 1989 a
                <span className="block text-[#e8d9c5]">Gratacasolo</span>
              </h2>

              {/* Description */}
              <p className="text-[#f9f5f0]/60 text-lg leading-relaxed mb-8">
                Quella che è iniziata come una piccola bottega di quartiere si è trasformata
                in un punto di riferimento per le famiglie di tutto il comprensorio del Lago d'Iseo.
              </p>

              <p className="text-[#f9f5f0]/60 leading-relaxed">
                <span className="text-[#e8d9c5] font-medium">Tre generazioni</span> hanno contribuito
                a costruire la reputazione di qualità e fiducia che oggi ci contraddistingue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERIA - ASIMMETRICA Staggered */}
      <section className="py-[var(--space-xl)] bg-[#f9f5f0] relative overflow-hidden">
        <div className="container-fluid">
          {/* Header - left aligned */}
          <div className="max-w-xl mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#7f1d1d]">
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Galleria</span>
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1]">
              I Nostri
              <span className="block text-[#7f1d1d]">Momenti</span>
            </h2>
          </div>

          {/* Grid staggered */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large */}
            <div className="col-span-6 md:col-span-5 overflow-hidden">
              <img
                src={cestoCompletoImg}
                alt="Cesto regalo con prodotti tipici"
                className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Offset up */}
            <div className="col-span-6 md:col-span-4 md:mt-32 overflow-hidden">
              <img
                src={spiediImg}
                alt="Arrosti allo spiedo"
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Small, offset down */}
            <div className="col-span-6 md:col-span-3 md:-mt-16 overflow-hidden">
              <img
                src={cestiRegaloImg}
                alt="Selezione di cesti regalo"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Extra large spanning */}
            <div className="col-span-6 md:col-span-6 md:col-start-2 md:-mt-24 overflow-hidden relative">
              <img
                src={salumiNataleImg}
                alt="I nostri prodotti natalizi"
                className="w-full aspect-[16/9] object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Floating text */}
              <div className="absolute bottom-6 left-6 bg-[#f9f5f0] p-4 hidden md:block">
                <span className="text-[#7f1d1d] text-xs uppercase tracking-wider font-medium">Tradizione dal 1989</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALORI - ASIMMETRICO Staggered */}
      <section className="py-[var(--space-xl)] bg-[#f9f5f0] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none">
          <span className="font-serif text-[25vw] font-bold text-[#2e2e2e]/[0.02] leading-none block translate-x-1/3">
            Valori
          </span>
        </div>

        <div className="container-fluid relative">
          {/* Header - right aligned */}
          <div className="max-w-xl ml-auto text-right mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#7f1d1d] justify-end">
                <span className="text-xs tracking-[0.25em] uppercase font-medium">I Nostri Principi</span>
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1]">
              Cosa Ci
              <span className="block text-[#7f1d1d]">Guida</span>
            </h2>
          </div>

          {/* Values - staggered positions */}
          <div className="grid grid-cols-12 gap-y-8 md:gap-y-0 md:gap-x-8">
            {/* Qualità */}
            <div className="col-span-12 md:col-span-5 md:col-start-1">
              <div className="bg-white p-8 relative">
                <span className="font-serif text-7xl text-[#7f1d1d]/10 absolute top-4 right-4">01</span>
                <div className="w-14 h-14 bg-[#7f1d1d] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#f9f5f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#2e2e2e] mb-2 relative">Qualità</h3>
                <p className="text-[#2e2e2e]/60 relative">Solo le migliori carni selezionate con cura</p>
              </div>
            </div>

            {/* Tradizione - offset */}
            <div className="col-span-12 md:col-span-5 md:col-start-7 md:mt-24">
              <div className="bg-white p-8 relative">
                <span className="font-serif text-7xl text-[#7f1d1d]/10 absolute top-4 right-4">02</span>
                <div className="w-14 h-14 bg-[#7f1d1d] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#f9f5f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#2e2e2e] mb-2 relative">Tradizione</h3>
                <p className="text-[#2e2e2e]/60 relative">Tecniche artigianali tramandate da generazioni</p>
              </div>
            </div>

            {/* Rapporto - negative offset */}
            <div className="col-span-12 md:col-span-5 md:col-start-2 md:-mt-8">
              <div className="bg-white p-8 relative">
                <span className="font-serif text-7xl text-[#7f1d1d]/10 absolute top-4 right-4">03</span>
                <div className="w-14 h-14 bg-[#7f1d1d] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#f9f5f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#2e2e2e] mb-2 relative">Rapporto</h3>
                <p className="text-[#2e2e2e]/60 relative">Ascoltiamo ogni cliente con attenzione</p>
              </div>
            </div>

            {/* Territorio - accent color */}
            <div className="col-span-12 md:col-span-5 md:col-start-6 md:mt-16">
              <div className="bg-[#7f1d1d] text-[#f9f5f0] p-8 relative">
                <span className="font-serif text-7xl text-[#f9f5f0]/10 absolute top-4 right-4">04</span>
                <div className="w-14 h-14 bg-[#f9f5f0] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#7f1d1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2 relative">Territorio</h3>
                <p className="text-[#f9f5f0]/70 relative">Profondamente legati al Lago d'Iseo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIGIANATO - Split Layout ASIMMETRICO */}
      <section className="relative">
        {/* Left - Image */}
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-[45%]">
          <img
            src={spiediImg}
            alt="Lavorazione artigianale"
            className="w-full h-64 lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#7f1d1d]/10"></div>
        </div>

        {/* Right - Content */}
        <div className="relative bg-[#7f1d1d] text-[#f9f5f0] lg:ml-[45%]">
          <div className="py-[var(--space-xl)] px-[var(--space-md)] lg:px-[var(--space-lg)]">
            {/* Label */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#f9f5f0]/60">
                <span className="w-8 h-[2px] bg-[#e8d9c5]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Il Nostro Metodo</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-6">
              Artigianato
              <span className="block text-[#e8d9c5]">e Passione</span>
            </h2>

            {/* Description */}
            <p className="text-[#f9f5f0]/70 text-lg leading-relaxed mb-10 max-w-lg">
              Essere artigiani significa conoscere ogni taglio, sapere come valorizzarlo
              e consigliare il cliente sulla preparazione ideale.
            </p>

            {/* Checklist - staggered */}
            <div className="space-y-3 mb-10">
              {[
                'Selezione carni premium',
                'Lavorazione artigianale quotidiana',
                'Tagli personalizzati su richiesta',
                'Consulenza esperta sempre',
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 ${i % 2 === 1 ? 'ml-8' : ''}`}>
                  <div className="w-8 h-8 bg-[#f9f5f0]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#e8d9c5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#f9f5f0]/80">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats inline */}
            <div className="flex items-center gap-8 pt-6 border-t border-[#f9f5f0]/10">
              <div>
                <span className="block font-serif text-4xl text-[#e8d9c5]">100%</span>
                <span className="text-[#f9f5f0]/40 text-xs uppercase tracking-wider">Artigianale</span>
              </div>
              <div className="w-[1px] h-12 bg-[#f9f5f0]/10"></div>
              <div>
                <span className="block font-serif text-4xl text-[#e8d9c5]">Ogni</span>
                <span className="text-[#f9f5f0]/40 text-xs uppercase tracking-wider">Giorno</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE - ASIMMETRICO */}
      <section className="py-[var(--space-xl)] bg-[#e8d9c5] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-0 pointer-events-none">
          <span className="font-serif text-[20vw] font-bold text-[#2e2e2e]/[0.03] leading-none block -translate-x-1/4 -translate-y-1/4">
            Vieni
          </span>
        </div>

        <div className="container-fluid relative">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Content - Left, offset */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-2">
              {/* Label */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-3 text-[#7f1d1d]">
                  <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                  <span className="text-xs tracking-[0.25em] uppercase font-medium">Ti Aspettiamo</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1] mb-6">
                Vieni a
                <span className="block text-[#7f1d1d]">Conoscerci</span>
              </h2>

              {/* Description */}
              <p className="text-[#2e2e2e]/70 text-lg leading-relaxed mb-10 max-w-lg">
                Siamo sempre felici di accogliere nuovi clienti. Passa a trovarci e scopri
                la differenza che fa una <span className="text-[#7f1d1d] font-medium">macelleria artigianale</span>.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contatti"
                  className="group inline-flex items-center gap-3 bg-[#7f1d1d] text-[#f9f5f0] px-8 py-4"
                >
                  <span className="text-sm uppercase tracking-wider">Dove Trovarci</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:036489008"
                  className="group inline-flex items-center gap-2 text-[#7f1d1d] hover:text-[#991b1b] transition-colors"
                >
                  <span className="text-sm uppercase tracking-wider">Chiamaci</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Info card - Right, floating */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="bg-[#2e2e2e] text-[#f9f5f0] p-8">
                <h3 className="font-serif text-2xl mb-6">Informazioni</h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[#f9f5f0]/40 text-xs uppercase tracking-wider mb-1">Indirizzo</span>
                    <span className="text-[#f9f5f0]">Via Provinciale, 27<br />Gratacasolo, Pisogne</span>
                  </div>
                  <div>
                    <span className="block text-[#f9f5f0]/40 text-xs uppercase tracking-wider mb-1">Telefono</span>
                    <span className="font-serif text-xl text-[#e8d9c5]">0364 89008</span>
                  </div>
                  <div>
                    <span className="block text-[#f9f5f0]/40 text-xs uppercase tracking-wider mb-1">Orari</span>
                    <span className="text-[#f9f5f0]/70">Lun-Sab: 8:00 - 12:30, 15:30 - 19:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
