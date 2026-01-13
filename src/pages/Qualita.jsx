import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import bisteccaImg from '../assets/foto/foto-3.webp'
import salumiImg from '../assets/foto/foto-2.webp'
import spiediImg from '../assets/foto/foto-4.webp'
import cestiRegaloImg from '../assets/foto/foto-11.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Qualita() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated numbers count up
      gsap.fromTo('.hero-number',
        { textContent: 0 },
        {
          textContent: 6,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          delay: 0.5,
        }
      )

      // Value cards stagger
      gsap.fromTo('.hero-value',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.8,
        }
      )

      // Title reveal
      gsap.fromTo('.hero-title-reveal',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power3.inOut',
          delay: 0.3,
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="overflow-hidden">
      {/* HERO - Centered design with 6 pillars */}
      <section ref={heroRef} className="relative min-h-screen bg-[#7f1d1d] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #f9f5f0 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Large background number */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <span className="font-serif text-[60vw] font-bold text-[#f9f5f0]/[0.03] leading-none">
            <span className="hero-number">6</span>
          </span>
        </div>

        <div className="relative min-h-screen flex flex-col">
          {/* Center content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32">
            {/* Label */}
            <div className="hero-value mb-6">
              <span className="inline-flex items-center gap-3 text-[#f9f5f0]/60">
                <span className="w-8 h-[2px] bg-[#e8d9c5]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Il Nostro Impegno</span>
                <span className="w-8 h-[2px] bg-[#e8d9c5]"></span>
              </span>
            </div>

            {/* Title */}
            <div className="hero-title-reveal overflow-hidden mb-6">
              <h1 className="font-serif text-[#f9f5f0]">
                <span className="block text-[clamp(2.5rem,10vw,7rem)] leading-[0.9]">
                  Qualità
                </span>
                <span className="block text-[clamp(3rem,12vw,9rem)] leading-[0.9] text-[#e8d9c5]" style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.1)' }}>
                  Senza Compromessi
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="hero-value text-[#f9f5f0]/70 text-base md:text-lg max-w-md leading-relaxed mb-8">
              Da oltre 35 anni costruiamo la nostra reputazione su <strong className="text-[#f9f5f0]">6 pilastri fondamentali</strong>.<br />
              <span className="text-[#e8d9c5] font-medium">Valori che guidano ogni nostra scelta.</span>
            </p>
          </div>

          {/* Bottom section - 6 values grid */}
          <div className="bg-[#1a1a1a]/30 backdrop-blur-sm">
            <div className="container-fluid py-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { num: '01', title: 'Selezione', desc: 'Scegliamo ogni taglio' },
                  { num: '02', title: 'Freschezza', desc: 'Mai prodotti congelati' },
                  { num: '03', title: 'Artigianalità', desc: 'Lavorazione a mano' },
                  { num: '04', title: 'Esperienza', desc: '35+ anni di mestiere' },
                  { num: '05', title: 'Consulenza', desc: 'Consigli su misura' },
                  { num: '06', title: 'Territorio', desc: 'Prodotti locali' },
                ].map((item, i) => (
                  <div key={i} className="hero-value text-[#f9f5f0] text-center">
                    <span className="block font-serif text-4xl text-[#e8d9c5] mb-2">{item.num}</span>
                    <span className="block font-serif text-lg mb-1">{item.title}</span>
                    <span className="block text-[#f9f5f0]/50 text-xs">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f9f5f0]/30">
          <span className="text-xs tracking-widest uppercase">Approfondisci</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* INTRO - ASIMMETRICO */}
      <section className="py-[var(--space-xl)] bg-[#f9f5f0] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 pointer-events-none">
          <span className="font-serif text-[25vw] font-bold text-[#7f1d1d]/[0.03] leading-none block translate-x-1/4 -translate-y-1/4">
            1989
          </span>
        </div>

        <div className="container-fluid relative">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Content - Left */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-2">
              {/* Label */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-3 text-[#7f1d1d]">
                  <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                  <span className="text-xs tracking-[0.25em] uppercase font-medium">Dal 1989</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1] mb-6">
                La Qualità
                <span className="block text-[#7f1d1d]">Non È Mai Un Caso</span>
              </h2>

              {/* Description */}
              <p className="text-[#2e2e2e]/70 text-lg leading-relaxed mb-8">
                Per noi, qualità significa scegliere con cura ogni giorno, lavorare con passione
                e rispettare il cliente. Ogni taglio porta con sé la
                <span className="text-[#7f1d1d] font-medium"> tradizione di una famiglia</span>.
              </p>

              {/* Stats inline */}
              <div className="flex items-center gap-8 pt-6 border-t border-[#2e2e2e]/10">
                <div>
                  <span className="block font-serif text-4xl text-[#7f1d1d]">35+</span>
                  <span className="text-[#2e2e2e]/50 text-xs uppercase tracking-wider">Anni</span>
                </div>
                <div className="w-[1px] h-10 bg-[#2e2e2e]/10"></div>
                <div>
                  <span className="block font-serif text-4xl text-[#7f1d1d]">6</span>
                  <span className="text-[#2e2e2e]/50 text-xs uppercase tracking-wider">Pilastri</span>
                </div>
                <div className="w-[1px] h-10 bg-[#2e2e2e]/10"></div>
                <div>
                  <span className="block font-serif text-4xl text-[#7f1d1d]">100%</span>
                  <span className="text-[#2e2e2e]/50 text-xs uppercase tracking-wider">Fresco</span>
                </div>
              </div>
            </div>

            {/* Image - Right */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 relative">
              <div className="overflow-hidden">
                <img
                  src={bisteccaImg}
                  alt="Bistecca di qualità selezionata"
                  title="Bistecca di qualità - Macelleria Clerici"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#7f1d1d] text-[#f9f5f0] p-6 hidden md:block">
                <span className="block font-serif text-4xl font-bold">100%</span>
                <span className="text-[#f9f5f0]/60 text-xs uppercase tracking-wider">Qualità</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUNTI DI FORZA - ASIMMETRICO Staggered */}
      <section className="py-[var(--space-xl)] bg-[#2e2e2e] text-[#f9f5f0] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <span className="font-serif text-[20vw] font-bold text-[#f9f5f0]/[0.02] leading-none block -translate-x-1/4 translate-y-1/4">
            Forza
          </span>
        </div>

        <div className="container-fluid relative">
          {/* Header - left aligned */}
          <div className="max-w-xl mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#e8d9c5]">
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Cosa Ci Distingue</span>
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f9f5f0] leading-[1.1]">
              I Nostri Punti
              <span className="block text-[#e8d9c5]">di Forza</span>
            </h2>
          </div>

          {/* Grid staggered - 6 items */}
          <div className="grid grid-cols-12 gap-y-8 md:gap-y-0 md:gap-x-6">
            {/* Row 1 */}
            <div className="col-span-12 md:col-span-4 md:col-start-1">
              <div className="bg-[#f9f5f0]/5 p-8 relative">
                <span className="font-serif text-6xl text-[#7f1d1d]/20 absolute top-4 right-4">01</span>
                <h3 className="font-serif text-2xl text-[#f9f5f0] mb-2 relative">Selezione</h3>
                <p className="text-[#f9f5f0]/60 relative">Scegliamo personalmente ogni capo con fornitori di fiducia</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-6 md:mt-16">
              <div className="bg-[#f9f5f0]/5 p-8 relative">
                <span className="font-serif text-6xl text-[#7f1d1d]/20 absolute top-4 right-4">02</span>
                <h3 className="font-serif text-2xl text-[#f9f5f0] mb-2 relative">Lavorazione</h3>
                <p className="text-[#f9f5f0]/60 relative">Ogni taglio è lavorato a mano con tecniche tradizionali</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-9 md:-mt-8">
              <div className="bg-[#f9f5f0]/5 p-8 relative">
                <span className="font-serif text-6xl text-[#7f1d1d]/20 absolute top-4 right-4">03</span>
                <h3 className="font-serif text-2xl text-[#f9f5f0] mb-2 relative">Consulenza</h3>
                <p className="text-[#f9f5f0]/60 relative">Ti aiutiamo a scegliere il taglio giusto per ogni piatto</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="col-span-12 md:col-span-4 md:col-start-2 md:mt-8">
              <div className="bg-[#f9f5f0]/5 p-8 relative">
                <span className="font-serif text-6xl text-[#7f1d1d]/20 absolute top-4 right-4">04</span>
                <h3 className="font-serif text-2xl text-[#f9f5f0] mb-2 relative">Dettaglio</h3>
                <p className="text-[#f9f5f0]/60 relative">Dalla pulizia alla presentazione, ogni dettaglio conta</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-5 md:mt-24">
              <div className="bg-[#7f1d1d] p-8 relative">
                <span className="font-serif text-6xl text-[#f9f5f0]/10 absolute top-4 right-4">05</span>
                <h3 className="font-serif text-2xl text-[#f9f5f0] mb-2 relative">Esperienza</h3>
                <p className="text-[#f9f5f0]/70 relative">Dal 1989 serviamo le famiglie del Lago d'Iseo</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-8 md:mt-12">
              <div className="bg-[#f9f5f0]/5 p-8 relative">
                <span className="font-serif text-6xl text-[#7f1d1d]/20 absolute top-4 right-4">06</span>
                <h3 className="font-serif text-2xl text-[#f9f5f0] mb-2 relative">Freschezza</h3>
                <p className="text-[#f9f5f0]/60 relative">Carni sempre fresche, mai congelate, lavorate ogni giorno</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERIA - ASIMMETRICA Staggered */}
      <section className="py-[var(--space-xl)] bg-[#e8d9c5] relative overflow-hidden">
        <div className="container-fluid">
          {/* Header - right aligned */}
          <div className="max-w-xl ml-auto text-right mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#7f1d1d] justify-end">
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Galleria</span>
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1]">
              La Nostra
              <span className="block text-[#7f1d1d]">Qualità</span>
            </h2>
          </div>

          {/* Grid staggered */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large */}
            <div className="col-span-6 md:col-span-5 overflow-hidden">
              <img
                src={salumiImg}
                alt="Salumi stagionati"
                title="Salumi artigianali stagionati - Macelleria Clerici"
                loading="lazy"
                width={600}
                height={800}
                className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Offset up */}
            <div className="col-span-6 md:col-span-4 md:mt-24 overflow-hidden">
              <img
                src={spiediImg}
                alt="Arrosti allo spiedo"
                title="Arrosti allo spiedo - Macelleria Clerici"
                loading="lazy"
                width={600}
                height={600}
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Small, offset down */}
            <div className="col-span-6 md:col-span-3 md:-mt-12 overflow-hidden relative">
              <img
                src={cestiRegaloImg}
                alt="Cesti regalo"
                title="Cesti regalo - Macelleria Clerici"
                loading="lazy"
                width={400}
                height={500}
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Floating text */}
              <div className="absolute bottom-4 left-4 bg-[#f9f5f0] p-3 hidden md:block">
                <span className="text-[#7f1d1d] text-xs uppercase tracking-wider font-medium">Qualità</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA - Split ASIMMETRICO */}
      <section className="relative">
        {/* Left - Image */}
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-[40%]">
          <img
            src={bisteccaImg}
            alt="La nostra filosofia"
            title="Filosofia di qualità - Macelleria Clerici"
            loading="lazy"
            width={800}
            height={1000}
            className="w-full h-64 lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#7f1d1d]/20"></div>
        </div>

        {/* Right - Content */}
        <div className="relative bg-[#f9f5f0] lg:ml-[40%]">
          <div className="py-[var(--space-xl)] px-[var(--space-md)] lg:px-[var(--space-lg)]">
            {/* Label */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#7f1d1d]">
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">La Nostra Filosofia</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1] mb-6">
              Tradizione che
              <span className="block text-[#7f1d1d]">Si Rinnova</span>
            </h2>

            {/* Description */}
            <p className="text-[#2e2e2e]/70 text-lg leading-relaxed mb-10 max-w-lg">
              Il mestiere del macellaio è antico quanto l'uomo. Noi lo portiamo avanti
              con rispetto per le tecniche tradizionali, ma anche con l'attenzione alle esigenze moderne.
            </p>

            {/* Quote */}
            <div className="bg-[#7f1d1d] text-[#f9f5f0] p-8 max-w-lg">
              <blockquote className="font-serif text-2xl italic leading-snug mb-4">
                "La qualità si riconosce dal primo morso. E si ricorda per sempre."
              </blockquote>
              <p className="text-[#f9f5f0]/50 text-sm uppercase tracking-wider">
                La nostra filosofia dal 1989
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPEGNO QUOTIDIANO - ASIMMETRICO */}
      <section className="py-[var(--space-xl)] bg-[#2e2e2e] text-[#f9f5f0] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 pointer-events-none">
          <span className="font-serif text-[18vw] font-bold text-[#f9f5f0]/[0.02] leading-none block translate-x-1/4 -translate-y-1/4">
            Ogni
          </span>
        </div>

        <div className="container-fluid relative">
          <div className="grid grid-cols-12 gap-8">
            {/* Header - Left */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-1">
              <div className="lg:sticky lg:top-32">
                {/* Label */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-3 text-[#e8d9c5]">
                    <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                    <span className="text-xs tracking-[0.25em] uppercase font-medium">Ogni Giorno</span>
                  </span>
                </div>

                <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f9f5f0] leading-[1.1] mb-6">
                  Il Nostro Impegno
                  <span className="block text-[#e8d9c5]">Quotidiano</span>
                </h2>

                <p className="text-[#f9f5f0]/60 text-lg leading-relaxed">
                  Ogni giornata inizia con lo stesso impegno:
                  <span className="text-[#e8d9c5] font-medium"> portare il meglio sulla tua tavola</span>.
                </p>
              </div>
            </div>

            {/* Steps - Right, staggered */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-6">
              {[
                { num: '1', title: 'Selezione Mattutina', desc: 'Ogni mattina selezioniamo le carni migliori, verificando qualità e freschezza' },
                { num: '2', title: 'Lavorazione Accurata', desc: 'Ogni taglio viene preparato rispettando le caratteristiche della carne' },
                { num: '3', title: 'Ascolto del Cliente', desc: 'Dedichiamo tempo ad ogni cliente, consigliando il taglio ideale' },
                { num: '4', title: 'Miglioramento Continuo', desc: 'Anche dopo 35 anni continuiamo a imparare e fare sempre meglio' },
              ].map((item, i) => (
                <div key={i} className={`flex gap-6 ${i % 2 === 1 ? 'lg:ml-12' : ''}`}>
                  <div className="w-16 h-16 flex-shrink-0 bg-[#7f1d1d] flex items-center justify-center">
                    <span className="font-serif text-2xl text-[#f9f5f0]">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#f9f5f0] mb-2">{item.title}</h3>
                    <p className="text-[#f9f5f0]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE - ASIMMETRICO */}
      <section className="py-[var(--space-xl)] bg-[#7f1d1d] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <span className="font-serif text-[25vw] font-bold text-[#f9f5f0]/[0.03] leading-none block -translate-x-1/4 translate-y-1/4">
            Prova
          </span>
        </div>

        <div className="container-fluid relative">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Content - Left */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-2">
              {/* Label */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-3 text-[#f9f5f0]/60">
                  <span className="w-8 h-[2px] bg-[#e8d9c5]"></span>
                  <span className="text-xs tracking-[0.25em] uppercase font-medium">Scoprilo di Persona</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f9f5f0] leading-[1.1] mb-6">
                Prova la
                <span className="block text-[#e8d9c5]">Differenza</span>
              </h2>

              {/* Description */}
              <p className="text-[#f9f5f0]/70 text-lg leading-relaxed mb-10 max-w-lg">
                Vieni a scoprire cosa significa davvero qualità artigianale.
                Ti aspettiamo nella nostra <span className="text-[#e8d9c5] font-medium">macelleria a Pisogne</span>.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/prodotti"
                  className="group inline-flex items-center gap-3 bg-[#f9f5f0] text-[#7f1d1d] px-8 py-4"
                >
                  <span className="text-sm uppercase tracking-wider font-medium">I Nostri Prodotti</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contatti"
                  className="group inline-flex items-center gap-2 text-[#f9f5f0]/80 hover:text-[#f9f5f0] transition-colors"
                >
                  <span className="text-sm uppercase tracking-wider">Dove Trovarci</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Info card - Right */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="bg-[#991b1b] p-8">
                <div className="space-y-6">
                  <div>
                    <span className="block font-serif text-5xl text-[#f9f5f0]">6</span>
                    <span className="text-[#f9f5f0]/50 text-xs uppercase tracking-wider">Pilastri di Qualità</span>
                  </div>
                  <div className="w-full h-[1px] bg-[#f9f5f0]/10"></div>
                  <p className="text-[#f9f5f0]/60 text-sm">
                    Selezione, Freschezza, Artigianalità, Esperienza, Consulenza, Territorio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
