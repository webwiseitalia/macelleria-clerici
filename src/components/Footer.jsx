import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)
  const marqueeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        x: '-50%',
        duration: 20,
        ease: 'none',
        repeat: -1,
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-[#2e2e2e] text-[#f9f5f0] relative overflow-hidden">
      {/* Marquee */}
      <div className="border-y border-[#f9f5f0]/10 py-6 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap" style={{ width: 'fit-content' }}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-serif text-6xl md:text-8xl opacity-10 mx-8">
              Macelleria Clerici • Dal 1989 • Pisogne • Qualità Artigianale •
            </span>
          ))}
        </div>
      </div>

      <div className="container-fluid py-16 md:py-24">
        <div className="grid grid-cols-12 gap-y-12 md:gap-8">
          {/* Brand - Offset left */}
          <div className="col-span-12 md:col-span-5 md:col-start-1">
            <Link to="/" className="inline-block mb-8">
              <span className="font-serif text-4xl md:text-5xl font-bold block" style={{ transform: 'rotate(-2deg)' }}>
                Macelleria
              </span>
              <span className="text-sm tracking-[0.3em] uppercase mt-2 block opacity-60">
                Clerici
              </span>
            </Link>
            <p className="text-[#f9f5f0]/50 max-w-sm text-lg leading-relaxed" style={{ transform: 'rotate(0.5deg)' }}>
              Dal 1989 selezioniamo con cura le migliori carni. Tradizione, qualità e passione nel cuore di Pisogne.
            </p>
          </div>

          {/* Navigation - Center with offset */}
          <div className="col-span-6 md:col-span-3 md:col-start-7 md:mt-12">
            <h3 className="text-xs uppercase tracking-[0.2em] mb-6 opacity-40">Menu</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-lg hover:text-[#e8d9c5] transition-colors link-underline inline-block w-fit">Home</Link>
              <Link to="/chi-siamo" className="text-lg hover:text-[#e8d9c5] transition-colors link-underline inline-block w-fit">Chi Siamo</Link>
              <Link to="/prodotti" className="text-lg hover:text-[#e8d9c5] transition-colors link-underline inline-block w-fit">Prodotti</Link>
              <Link to="/qualita" className="text-lg hover:text-[#e8d9c5] transition-colors link-underline inline-block w-fit">Qualità</Link>
              <Link to="/contatti" className="text-lg hover:text-[#e8d9c5] transition-colors link-underline inline-block w-fit">Contatti</Link>
            </nav>
          </div>

          {/* Contact - Right with negative margin */}
          <div className="col-span-6 md:col-span-3 md:-mt-4">
            <h3 className="text-xs uppercase tracking-[0.2em] mb-6 opacity-40">Contatti</h3>
            <address className="not-italic flex flex-col gap-2 text-[#f9f5f0]/70">
              <p>Via Provinciale, 27</p>
              <p>25055 Gratacasolo</p>
              <p>Pisogne (BS)</p>
            </address>
            <a
              href="tel:036489008"
              className="inline-block mt-6 text-2xl md:text-3xl font-serif hover:text-[#e8d9c5] transition-colors"
              style={{ transform: 'rotate(-1deg)' }}
            >
              0364 89008
            </a>
          </div>
        </div>
      </div>

      {/* Bottom - Asymmetric */}
      <div className="border-t border-[#f9f5f0]/10">
        <div className="container-fluid py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-[#f9f5f0]/30 text-xs md:text-sm">
            <p>© {currentYear} Clerici Attilio & C. S.N.C.</p>
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-wider text-[#f9f5f0]/30">
            <Link to="/privacy-policy" className="hover:text-[#f9f5f0] transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-[#f9f5f0] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* Large decorative text */}
      <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <span className="font-serif text-[20vw] font-bold leading-none block translate-x-1/4 translate-y-1/4">
          MC
        </span>
      </div>
    </footer>
  )
}
