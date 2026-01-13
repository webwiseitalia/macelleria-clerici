import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import bisteccaImg from '../assets/foto/foto-3.webp'
import salumiImg from '../assets/foto/foto-2.webp'
import spiediImg from '../assets/foto/foto-4.webp'
import cestoImg from '../assets/foto/foto-6.webp'
import salumiNataleImg from '../assets/foto/foto-1.webp'
import salseImg from '../assets/foto/foto-7.webp'
import chutneyImg from '../assets/foto/foto-8.webp'
import cestoCompletoImg from '../assets/foto/foto-9.webp'
import cestoGrandeImg from '../assets/foto/foto-10.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Prodotti() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero images stagger reveal
      gsap.fromTo('.hero-grid-img',
        { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.inOut',
          delay: 0.3,
        }
      )

      // Hero content
      gsap.fromTo('.hero-content-item',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.8,
        }
      )

      // Counter animation
      gsap.fromTo('.hero-counter',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          delay: 1.2,
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const categories = [
    {
      title: 'Carni Bovine',
      description: 'Selezioniamo i migliori tagli di manzo e vitello per garantire tenerezza, sapore e qualità superiore.',
      image: bisteccaImg,
      items: ['Bistecca', 'Filetto', 'Costata', 'Roast beef', 'Brasato', 'Spezzatino', 'Macinato', 'Ossobuco'],
    },
    {
      title: 'Salumi Artigianali',
      description: 'I nostri salumi sono preparati seguendo le ricette della tradizione, stagionati con cura.',
      image: salumiImg,
      items: ['Salame nostrano', 'Salamelle', 'Cotechino', 'Pancetta', 'Guanciale', 'Lardo', 'Coppa', 'Bresaola'],
    },
    {
      title: 'Arrosti e Spiedi',
      description: 'Porchette e arrosti allo spiedo cotti lentamente per una croccantezza perfetta.',
      image: spiediImg,
      items: ['Porchetta', 'Arrosto di maiale', 'Pollo allo spiedo', 'Stinco', 'Galletto', 'Costine'],
    },
    {
      title: 'Cesti Regalo',
      description: 'Composizioni curate con i migliori prodotti del territorio, perfetti per ogni occasione.',
      image: cestoImg,
      items: ['Cesti natalizi', 'Cesti pasquali', 'Box degustazione', 'Cesti personalizzati'],
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* HERO - Centered design with product images */}
      <section ref={heroRef} className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#f9f5f0 1px, transparent 1px), linear-gradient(90deg, #f9f5f0 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>

        {/* Product images in background - corners */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="hero-grid-img absolute top-0 left-0 w-1/4 h-1/2 overflow-hidden">
            <img src={bisteccaImg} alt="Carni bovine" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]"></div>
          </div>
          <div className="hero-grid-img absolute top-0 right-0 w-1/4 h-1/2 overflow-hidden">
            <img src={salumiImg} alt="Salumi artigianali" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a1a1a]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]"></div>
          </div>
          <div className="hero-grid-img absolute bottom-0 left-0 w-1/4 h-1/2 overflow-hidden">
            <img src={spiediImg} alt="Arrosti e spiedi" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#1a1a1a]"></div>
          </div>
          <div className="hero-grid-img absolute bottom-0 right-0 w-1/4 h-1/2 overflow-hidden">
            <img src={cestoImg} alt="Cesti regalo" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a1a1a]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#1a1a1a]"></div>
          </div>
        </div>

        {/* Center content */}
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32">
          {/* Label */}
          <div className="hero-content-item mb-6">
            <span className="inline-flex items-center gap-3 text-[#e8d9c5]">
              <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
              <span className="text-xs tracking-[0.25em] uppercase font-medium">La Nostra Selezione</span>
              <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-content-item font-serif text-[#f9f5f0] mb-6">
            <span className="block text-[clamp(2.5rem,10vw,7rem)] leading-[0.9]">
              I Nostri
            </span>
            <span className="block text-[clamp(3rem,12vw,9rem)] leading-[0.9] text-[#7f1d1d]" style={{ textShadow: '2px 2px 0 rgba(249,245,240,0.1)' }}>
              Prodotti
            </span>
          </h1>

          {/* Description */}
          <p className="hero-content-item text-[#f9f5f0]/70 text-base md:text-lg max-w-md leading-relaxed mb-8">
            Carni fresche selezionate con cura, salumi artigianali, arrosti allo spiedo<br />
            e molto altro. <span className="text-[#e8d9c5] font-medium">Tutto lavorato ogni giorno.</span>
          </p>

          {/* Counter stats - centered */}
          <div className="hero-counter flex items-center justify-center gap-8 md:gap-12 pt-6 border-t border-[#f9f5f0]/10">
            <div className="text-center">
              <span className="block font-serif text-4xl md:text-5xl text-[#7f1d1d]">4</span>
              <span className="text-[#f9f5f0]/40 text-xs uppercase tracking-wider">Categorie</span>
            </div>
            <div className="w-[1px] h-10 bg-[#f9f5f0]/10"></div>
            <div className="text-center">
              <span className="block font-serif text-4xl md:text-5xl text-[#7f1d1d]">30+</span>
              <span className="text-[#f9f5f0]/40 text-xs uppercase tracking-wider">Prodotti</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f9f5f0]/30 z-20">
          <span className="text-xs tracking-widest uppercase">Esplora</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#f9f5f0]/30 to-transparent"></div>
        </div>
      </section>

      {/* INTRO NOTICE - ASIMMETRICO */}
      <section className="py-16 bg-[#f9f5f0] relative overflow-hidden">
        <div className="container-fluid">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <div className="bg-white border border-[#7f1d1d]/20 p-8 relative">
                {/* Floating icon */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#7f1d1d] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#f9f5f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <h2 className="font-serif text-xl text-[#2e2e2e] mb-2">Freschezza Quotidiana</h2>
                  <p className="text-[#2e2e2e]/60 leading-relaxed">
                    La disponibilità varia giornalmente. <strong className="text-[#7f1d1d]">Contattaci</strong> per verificare o prenotare tagli specifici.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIE - ASIMMETRICHE ALTERNATE */}
      {categories.map((category, index) => (
        <section
          key={category.title}
          className={`py-[var(--space-xl)] ${index % 2 === 0 ? 'bg-[#f9f5f0]' : 'bg-[#2e2e2e] text-[#f9f5f0]'} relative overflow-hidden`}
        >
          {/* Decorative number */}
          <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} pointer-events-none`}>
            <span className={`font-serif text-[30vw] font-bold leading-none block ${index % 2 === 0 ? 'translate-x-1/4 -translate-y-1/4 text-[#7f1d1d]/[0.03]' : '-translate-x-1/4 -translate-y-1/4 text-[#f9f5f0]/[0.02]'}`}>
              0{index + 1}
            </span>
          </div>

          <div className="container-fluid relative">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Content - alternates left/right */}
              <div className={`col-span-12 lg:col-span-5 ${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-7 lg:order-2'}`}>
                {/* Label */}
                <div className="mb-6">
                  <span className={`inline-flex items-center gap-3 ${index % 2 === 0 ? 'text-[#7f1d1d]' : 'text-[#e8d9c5]'}`}>
                    <span className={`w-8 h-[2px] ${index % 2 === 0 ? 'bg-[#7f1d1d]' : 'bg-[#7f1d1d]'}`}></span>
                    <span className="text-xs tracking-[0.25em] uppercase font-medium">Categoria 0{index + 1}</span>
                  </span>
                </div>

                {/* Title */}
                <h2 className={`font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-6 ${index % 2 === 0 ? 'text-[#2e2e2e]' : 'text-[#f9f5f0]'}`}>
                  {category.title.split(' ')[0]}
                  <span className={`block ${index % 2 === 0 ? 'text-[#7f1d1d]' : 'text-[#e8d9c5]'}`}>
                    {category.title.split(' ').slice(1).join(' ') || category.title}
                  </span>
                </h2>

                {/* Description */}
                <p className={`text-lg leading-relaxed mb-8 ${index % 2 === 0 ? 'text-[#2e2e2e]/70' : 'text-[#f9f5f0]/70'}`}>
                  {category.description}
                </p>

                {/* Tags - staggered */}
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className={`inline-block mr-2 px-4 py-2 text-sm ${i % 2 === 1 ? 'ml-4' : ''} ${index % 2 === 0 ? 'bg-[#2e2e2e]/5 text-[#2e2e2e]/70' : 'bg-[#f9f5f0]/10 text-[#f9f5f0]/70'}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image - alternates right/left */}
              <div className={`col-span-12 lg:col-span-6 ${index % 2 === 0 ? 'lg:col-start-7' : 'lg:col-start-1 lg:order-1'} relative`}>
                <div className={`overflow-hidden ${index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'}`}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating badge */}
                <div className={`absolute ${index % 2 === 0 ? '-bottom-6 -left-6' : '-bottom-6 -right-6'} bg-[#7f1d1d] text-[#f9f5f0] p-4 hidden md:block`}>
                  <span className="block font-serif text-3xl font-bold">0{index + 1}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PRODOTTI DEL TERRITORIO - ASIMMETRICO */}
      <section className="py-[var(--space-xl)] bg-[#2e2e2e] text-[#f9f5f0] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <span className="font-serif text-[20vw] font-bold text-[#f9f5f0]/[0.02] leading-none block -translate-x-1/4 translate-y-1/4">
            Extra
          </span>
        </div>

        <div className="container-fluid relative">
          {/* Header - left aligned */}
          <div className="max-w-xl mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#e8d9c5]">
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Non Solo Carne</span>
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f9f5f0] leading-[1.1]">
              Prodotti del
              <span className="block text-[#e8d9c5]">Territorio</span>
            </h2>
          </div>

          {/* Grid staggered */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large */}
            <div className="col-span-6 md:col-span-5 group overflow-hidden relative">
              <img
                src={salseImg}
                alt="Salse e sughi"
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl mb-1">Salse e Sughi</h3>
                <p className="text-[#f9f5f0]/50 text-sm">Pesto e salse artigianali</p>
              </div>
            </div>

            {/* Offset */}
            <div className="col-span-6 md:col-span-4 md:mt-24 group overflow-hidden relative">
              <img
                src={chutneyImg}
                alt="Confetture e chutney"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-xl">Confetture</h3>
                <p className="text-[#f9f5f0]/50 text-sm">Per formaggi e carni</p>
              </div>
            </div>

            {/* Small, offset down */}
            <div className="col-span-6 md:col-span-3 md:-mt-12 group overflow-hidden relative">
              <img
                src={cestoCompletoImg}
                alt="Prodotti tipici"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-xl">Tipici</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAGLI SU MISURA - Split ASIMMETRICO */}
      <section className="relative">
        {/* Right - Image */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[45%]">
          <img
            src={bisteccaImg}
            alt="Tagli personalizzati"
            className="w-full h-64 lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#7f1d1d]/10"></div>
        </div>

        {/* Left - Content */}
        <div className="relative bg-[#f9f5f0] lg:mr-[45%]">
          <div className="py-[var(--space-xl)] px-[var(--space-md)] lg:px-[var(--space-lg)]">
            {/* Label */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#7f1d1d]">
                <span className="w-8 h-[2px] bg-[#7f1d1d]"></span>
                <span className="text-xs tracking-[0.25em] uppercase font-medium">Servizio Personalizzato</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2e2e2e] leading-[1.1] mb-6">
              Tagli
              <span className="block text-[#7f1d1d]">su Misura</span>
            </h2>

            {/* Description */}
            <p className="text-[#2e2e2e]/70 text-lg leading-relaxed mb-10 max-w-lg">
              Hai bisogno di un taglio particolare? Siamo a tua disposizione per preparare
              tagli personalizzati secondo le tue esigenze.
            </p>

            {/* Services - staggered */}
            <div className="space-y-3 mb-10">
              {[
                'Tagli su richiesta',
                'Disossatura professionale',
                'Pronto da cuocere',
                'Macinature fresche',
                'Consigli cottura',
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 ${i % 2 === 1 ? 'ml-6' : ''}`}>
                  <div className="w-8 h-8 bg-[#7f1d1d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#7f1d1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#2e2e2e]/80">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:036489008"
                className="group inline-flex items-center gap-2 bg-[#7f1d1d] text-[#f9f5f0] px-6 py-3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm uppercase tracking-wider">Chiamaci</span>
              </a>
              <Link
                to="/contatti"
                className="group inline-flex items-center gap-2 text-[#7f1d1d] hover:text-[#991b1b] transition-colors"
              >
                <span className="text-sm uppercase tracking-wider">Vieni in Negozio</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE - ASIMMETRICO */}
      <section className="py-[var(--space-xl)] bg-[#7f1d1d] relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 pointer-events-none">
          <span className="font-serif text-[25vw] font-bold text-[#f9f5f0]/[0.03] leading-none block translate-x-1/4 -translate-y-1/4">
            Vieni
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
                  <span className="text-xs tracking-[0.25em] uppercase font-medium">Ti Aspettiamo</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f9f5f0] leading-[1.1] mb-6">
                Scopri la
                <span className="block text-[#e8d9c5]">Qualità</span>
              </h2>

              {/* Description */}
              <p className="text-[#f9f5f0]/70 text-lg leading-relaxed mb-10 max-w-lg">
                Vieni a trovarci in negozio. Ti aspettiamo in
                <span className="text-[#e8d9c5] font-medium"> Via Provinciale, 27</span> a Gratacasolo.
              </p>

              {/* Button */}
              <Link
                to="/contatti"
                className="group inline-flex items-center gap-3 bg-[#f9f5f0] text-[#7f1d1d] px-8 py-4"
              >
                <span className="text-sm uppercase tracking-wider font-medium">Come Raggiungerci</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Info - Right */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="bg-[#991b1b] p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div>
                    <span className="block font-serif text-4xl text-[#f9f5f0]">30+</span>
                    <span className="text-[#f9f5f0]/50 text-xs uppercase tracking-wider">Prodotti</span>
                  </div>
                  <div className="w-[1px] h-12 bg-[#f9f5f0]/20"></div>
                  <div>
                    <span className="block font-serif text-4xl text-[#f9f5f0]">35+</span>
                    <span className="text-[#f9f5f0]/50 text-xs uppercase tracking-wider">Anni</span>
                  </div>
                </div>
                <p className="text-[#f9f5f0]/60 text-sm">
                  La stessa passione di sempre, per portarti solo il meglio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
