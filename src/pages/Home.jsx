import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import bisteccaImg from '../assets/foto/foto-3.webp'
import salumiImg from '../assets/foto/foto-2.webp'
import spiediImg from '../assets/foto/foto-4.webp'
import cestoImg from '../assets/foto/foto-6.webp'
import cestiRegaloImg from '../assets/foto/foto-11.webp'
import salseImg from '../assets/foto/foto-7.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero image reveal
      gsap.fromTo(
        '.hero-img-wrapper',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.4,
          ease: 'power4.inOut',
          delay: 0.3,
        }
      )

      // Hero text animations
      gsap.fromTo(
        '.hero-title-line',
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power4.out',
          delay: 0.8,
        }
      )

      gsap.fromTo(
        '.hero-subtitle',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 1.3,
        }
      )

      gsap.fromTo(
        '.hero-cta',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 1.5,
        }
      )

      // Parallax on scroll
      gsap.to('.hero-img-inner', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Side text parallax
      gsap.to('.hero-side-text', {
        yPercent: -50,
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
      {/* HERO - Split screen con immagine grande e tipografia bold */}
      <section ref={heroRef} className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
        {/* Grid background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#f9f5f0 1px, transparent 1px), linear-gradient(90deg, #f9f5f0 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Layout split */}
        <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-16 py-32 lg:py-0">
            {/* Top tag */}
            <div className="hero-subtitle mb-6">
              <span className="inline-flex items-center gap-3 text-[#e8d9c5]">
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Dal 1989 • Pisogne</span>
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
              </span>
            </div>

            {/* Main title - oversized */}
            <h1 className="font-serif text-[#f9f5f0] mb-6">
              <span className="hero-title-line block text-[clamp(2.5rem,10vw,7rem)] leading-[0.9] tracking-tight">
                Macelleria
              </span>
              <span className="hero-title-line block text-[clamp(3rem,12vw,9rem)] leading-[0.9] tracking-tight text-[#7f1d1d]" style={{ textShadow: '2px 2px 0 rgba(249,245,240,0.1)' }}>
                Clerici
              </span>
            </h1>

            {/* Tagline */}
            <p className="hero-subtitle text-[#f9f5f0]/70 text-base md:text-lg max-w-sm leading-relaxed mb-8">
              Carni fresche selezionate con cura.<br />
              <span className="text-[#e8d9c5] font-medium">Tradizione artigianale</span> da tre generazioni.
            </p>

            {/* CTA */}
            <div className="hero-cta flex flex-wrap items-center justify-center gap-4 mb-10">
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
              <Link
                to="/prodotti"
                className="group inline-flex items-center gap-2 text-[#f9f5f0]/80 hover:text-[#f9f5f0] transition-colors"
              >
                <span className="text-sm uppercase tracking-wider">Scopri i Prodotti</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Bottom info - attached to main block */}
            <div className="hero-cta flex items-center justify-center gap-8 md:gap-12 pt-6 border-t border-[#f9f5f0]/10">
              <div>
                <span className="block text-[#f9f5f0]/40 text-xs uppercase tracking-wider mb-1">Telefono</span>
                <span className="text-[#f9f5f0] font-serif text-base md:text-lg">0364 89008</span>
              </div>
              <div className="w-[1px] h-10 bg-[#f9f5f0]/10"></div>
              <div>
                <span className="block text-[#f9f5f0]/40 text-xs uppercase tracking-wider mb-1">Indirizzo</span>
                <span className="text-[#f9f5f0] font-serif text-base md:text-lg">Gratacasolo, Pisogne</span>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full">
            <div className="hero-img-wrapper h-[50vh] lg:h-full overflow-hidden">
              <div className="hero-img-inner h-[120%] -mt-[10%]">
                <img
                  src={bisteccaImg}
                  alt="Carni fresche di qualità - Macelleria Clerici"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent lg:opacity-100 opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent lg:hidden"></div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 bg-[#f9f5f0] p-6 hidden md:block" data-animate="scale">
              <span className="block font-serif text-5xl text-[#7f1d1d] font-bold">35+</span>
              <span className="text-[#2e2e2e]/60 text-xs uppercase tracking-wider">Anni di Esperienza</span>
            </div>
          </div>

          {/* Side text - vertical */}
          <div className="hero-side-text absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 hidden lg:block z-20">
            <span className="text-[#f9f5f0]/10 text-xs tracking-[0.5em] uppercase" style={{ writingMode: 'vertical-rl' }}>
              Macelleria Artigianale dal 1989
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f9f5f0]/30">
          <span className="text-xs tracking-widest uppercase">Scorri</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#f9f5f0]/30 to-transparent"></div>
        </div>
      </section>

      {/* Chi Siamo - ASIMMETRICO con stile hero */}
      <section className="py-[var(--space-xl)] bg-[#f9f5f0] relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 pointer-events-none">
          <span className="font-serif text-[25vw] font-bold text-[#2e2e2e]/[0.02] leading-none block translate-x-1/4">
            1989
          </span>
        </div>

        <div className="container-fluid relative">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Content - Left */}
            <div className="col-span-12 lg:col-span-5 lg:col-start-2">
              {/* Label with lines */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-3 text-[#7f1d1d]">
                  <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                  <span className="text-xs tracking-[0.25em] uppercase font-medium">Chi Siamo</span>
                </span>
              </div>

              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1] mb-8">
                Una Tradizione
                <span className="block text-[#7f1d1d]">di Famiglia</span>
              </h2>

              <p className="text-[#2e2e2e]/70 text-lg leading-relaxed mb-8">
                La <strong className="text-[#2e2e2e]">Macelleria Clerici</strong> è un punto di riferimento
                per le famiglie di Pisogne dal 1989. Portiamo avanti con orgoglio la
                <span className="text-[#7f1d1d] font-medium"> tradizione artigianale</span>.
              </p>

              {/* Stats inline */}
              <div className="flex items-center gap-8 pt-6 border-t border-[#2e2e2e]/10 mb-8">
                <div>
                  <span className="block font-serif text-4xl text-[#7f1d1d]">35+</span>
                  <span className="text-[#2e2e2e]/50 text-xs uppercase tracking-wider">Anni</span>
                </div>
                <div className="w-[1px] h-10 bg-[#2e2e2e]/10"></div>
                <div>
                  <span className="block font-serif text-4xl text-[#7f1d1d]">3</span>
                  <span className="text-[#2e2e2e]/50 text-xs uppercase tracking-wider">Generazioni</span>
                </div>
              </div>

              <Link
                to="/chi-siamo"
                className="group inline-flex items-center gap-2 text-[#7f1d1d] text-sm uppercase tracking-wider"
              >
                <span>Scopri la nostra storia</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Image - Right, offset */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 relative">
              <div className="overflow-hidden">
                <img
                  src={salumiImg}
                  alt="I nostri salumi artigianali"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#7f1d1d] text-[#f9f5f0] p-6 hidden md:block">
                <span className="block font-serif text-4xl font-bold">1989</span>
                <span className="text-[#f9f5f0]/60 text-xs uppercase tracking-wider">Dal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prodotti - ASIMMETRICO con stile hero */}
      <section className="py-[var(--space-xl)] bg-[#2e2e2e] text-[#f9f5f0] relative overflow-hidden">
        <div className="container-fluid">
          {/* Header - left aligned */}
          <div className="max-w-xl mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#e8d9c5]">
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">I Nostri Prodotti</span>
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-6">
              Cosa Trovi
              <span className="block text-[#7f1d1d]">da Noi</span>
            </h2>

            <p className="text-[#f9f5f0]/70 text-lg leading-relaxed">
              Carni fresche, salumi artigianali, arrosti allo spiedo e molto altro.
              <span className="text-[#e8d9c5] font-medium"> Tutto lavorato ogni giorno con cura.</span>
            </p>
          </div>

          {/* Products Grid - ASIMMETRICO con overlay */}
          <div className="relative min-h-[600px] md:min-h-[700px]">

            {/* Carni Bovine - Grande, base a sinistra */}
            <div className="absolute top-0 left-0 w-[55%] md:w-[45%] h-[60%] group overflow-hidden z-10">
              <img src={bisteccaImg} alt="Carni Bovine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <h3 className="font-serif text-xl md:text-3xl mb-1">Carni Bovine</h3>
                <p className="text-[#f9f5f0]/50 text-sm hidden md:block">Tagli pregiati selezionati</p>
              </div>
            </div>

            {/* Salumi - Sovrapposta in alto a destra */}
            <div className="absolute top-[5%] right-0 w-[50%] md:w-[40%] h-[45%] group overflow-hidden z-20">
              <img src={salumiImg} alt="Salumi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <h3 className="font-serif text-lg md:text-xl">Salumi Artigianali</h3>
              </div>
            </div>

            {/* Arrosti - Sovrapposta al centro */}
            <div className="absolute top-[35%] left-[30%] w-[45%] md:w-[35%] h-[40%] group overflow-hidden z-30 shadow-2xl">
              <img src={spiediImg} alt="Arrosti" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-lg md:text-xl">Arrosti Spiedo</h3>
              </div>
            </div>

            {/* Cesti - In basso a destra, sovrapposta */}
            <div className="absolute bottom-0 right-[5%] w-[55%] md:w-[45%] h-[45%] group overflow-hidden z-20">
              <img src={cestoImg} alt="Cesti Regalo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="font-serif text-xl md:text-2xl mb-1">Cesti Regalo</h3>
                <p className="text-[#f9f5f0]/50 text-sm hidden md:block">Per ogni occasione</p>
              </div>
            </div>

          </div>

          {/* CTA - right aligned */}
          <div className="mt-12 text-right">
            <Link
              to="/prodotti"
              className="group inline-flex items-center gap-3 bg-[#7f1d1d] text-[#f9f5f0] px-8 py-4"
            >
              <span className="text-sm uppercase tracking-wider">Tutti i Prodotti</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Valori - ASIMMETRICO staggered */}
      <section className="py-[var(--space-xl)] bg-[#e8d9c5] relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none">
          <span className="font-serif text-[30vw] font-bold text-[#7f1d1d]/[0.04] leading-none block -translate-x-1/3">
            Valori
          </span>
        </div>

        {/* Decorative stripe */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d4c4b0] hidden lg:block"></div>

        <div className="container-fluid relative">
          {/* Header - right aligned */}
          <div className="max-w-xl ml-auto text-right mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#7f1d1d] justify-end">
                <span className="text-xs tracking-[0.25em] uppercase font-medium">I Nostri Valori</span>
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1]">
              Perché Scegliere
              <span className="block text-[#7f1d1d]">Macelleria Clerici</span>
            </h2>
          </div>

          {/* Values - staggered grid */}
          <div className="grid grid-cols-12 gap-y-8 md:gap-y-0 md:gap-x-8">
            <div className="col-span-12 md:col-span-5 md:col-start-1">
              <div className="bg-[#f9f5f0] p-8 relative border-l-4 border-[#7f1d1d]">
                <span className="font-serif text-7xl text-[#7f1d1d]/10 absolute top-4 right-4">01</span>
                <h3 className="font-serif text-2xl text-[#2e2e2e] mb-2 relative">Tradizione</h3>
                <p className="text-[#2e2e2e]/60 relative">Dal 1989 portiamo avanti l'arte del macellaio con passione.</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-7 md:mt-24">
              <div className="bg-[#2e2e2e] text-[#f9f5f0] p-8 relative">
                <span className="font-serif text-7xl text-[#f9f5f0]/10 absolute top-4 right-4">02</span>
                <h3 className="font-serif text-2xl mb-2 relative">Selezione</h3>
                <p className="text-[#f9f5f0]/70 relative">Scegliamo personalmente ogni capo con i migliori fornitori.</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-2 md:-mt-8">
              <div className="bg-[#f9f5f0] p-8 relative border-l-4 border-[#7f1d1d]">
                <span className="font-serif text-7xl text-[#7f1d1d]/10 absolute top-4 right-4">03</span>
                <h3 className="font-serif text-2xl text-[#2e2e2e] mb-2 relative">Su Misura</h3>
                <p className="text-[#2e2e2e]/60 relative">Tagli personalizzati secondo le tue esigenze specifiche.</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-6 md:mt-16">
              <div className="bg-[#7f1d1d] text-[#f9f5f0] p-8 relative">
                <span className="font-serif text-7xl text-[#f9f5f0]/10 absolute top-4 right-4">04</span>
                <h3 className="font-serif text-2xl mb-2 relative">Famiglia</h3>
                <p className="text-[#f9f5f0]/70 relative">Cura e attenzione come se fossimo parte della tua famiglia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Finale - Split layout */}
      <section className="relative">
        {/* Left - Image */}
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            src={cestiRegaloImg}
            alt="I nostri prodotti"
            className="w-full h-64 lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#7f1d1d]/20"></div>
        </div>

        {/* Right - Content */}
        <div className="relative bg-[#7f1d1d] text-[#f9f5f0] lg:ml-[50%]">
          <div className="py-[var(--space-xl)] px-[var(--space-md)] lg:px-[var(--space-lg)]">
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#f9f5f0]/60">
                <span className="w-8 h-[2px] bg-[#e8d9c5]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Ti Aspettiamo</span>
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8">
              Vieni a
              <span className="block text-[#e8d9c5]">Trovarci</span>
            </h2>

            <p className="text-[#f9f5f0]/70 text-lg leading-relaxed mb-8 max-w-md">
              Via Provinciale, 27 - Gratacasolo (Pisogne)
              <span className="text-[#e8d9c5] font-medium block mt-2">Ti aspettiamo per consigliarti i migliori tagli!</span>
            </p>

            {/* Info */}
            <div className="flex items-center gap-8 pt-6 border-t border-[#f9f5f0]/10 mb-10">
              <div>
                <span className="block text-[#f9f5f0]/40 text-xs uppercase tracking-wider mb-1">Telefono</span>
                <span className="font-serif text-xl">0364 89008</span>
              </div>
              <div className="w-[1px] h-10 bg-[#f9f5f0]/10"></div>
              <div>
                <span className="block text-[#f9f5f0]/40 text-xs uppercase tracking-wider mb-1">Orari</span>
                <span className="font-serif text-xl">Lun-Sab</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:036489008"
                className="group inline-flex items-center gap-3 bg-[#f9f5f0] text-[#7f1d1d] px-8 py-4"
              >
                <span className="text-sm uppercase tracking-wider font-medium">Chiamaci Ora</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                to="/contatti"
                className="group inline-flex items-center gap-2 text-[#f9f5f0]/80 hover:text-[#f9f5f0] transition-colors"
              >
                <span className="text-sm uppercase tracking-wider">Orari e Indicazioni</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
