import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Chi Siamo', href: '/chi-siamo' },
    { name: 'Prodotti', href: '/prodotti' },
    { name: 'Qualità', href: '/qualita' },
    { name: 'Contatti', href: '/contatti' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'mix-blend-difference' : ''
        }`}
      >
        <nav className="container-fluid py-4 md:py-6 flex justify-between items-center">
          <Link to="/" className="relative z-50 group">
            <span
              className={`font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isMenuOpen || scrolled ? 'text-[#f9f5f0]' : 'text-[#7f1d1d]'
              }`}
            >
              Macelleria
              <span className="block text-xs md:text-sm font-sans font-normal tracking-widest uppercase mt-0.5">
                Clerici
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item, i) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm uppercase tracking-wider font-medium link-underline transition-colors duration-300 ${
                  scrolled ? 'text-[#f9f5f0]' : 'text-[#2e2e2e]'
                } ${isActive(item.href) ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:036489008"
              className={`ml-4 px-5 py-2 border text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
                scrolled
                  ? 'border-[#f9f5f0] text-[#f9f5f0] hover:bg-[#f9f5f0] hover:text-[#2e2e2e]'
                  : 'border-[#7f1d1d] text-[#7f1d1d] hover:bg-[#7f1d1d] hover:text-[#f9f5f0]'
              }`}
              style={{ transform: 'rotate(-1deg)' }}
            >
              Chiamaci
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
              className={`block w-7 h-0.5 transition-colors ${
                isMenuOpen || scrolled ? 'bg-[#f9f5f0]' : 'bg-[#7f1d1d]'
              }`}
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1, scaleX: isMenuOpen ? 0 : 1 }}
              className={`block w-7 h-0.5 transition-colors ${
                isMenuOpen || scrolled ? 'bg-[#f9f5f0]' : 'bg-[#7f1d1d]'
              }`}
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
              className={`block w-7 h-0.5 transition-colors ${
                isMenuOpen || scrolled ? 'bg-[#f9f5f0]' : 'bg-[#7f1d1d]'
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2rem) 2rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-[#7f1d1d] flex items-center justify-start"
          >
            <div className="container-fluid">
              <nav className="flex flex-col gap-4">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
                  >
                    <Link
                      to={item.href}
                      className={`block font-serif text-4xl md:text-6xl text-[#f9f5f0] hover:text-[#e8d9c5] transition-colors ${
                        isActive(item.href) ? 'text-[#e8d9c5]' : ''
                      }`}
                      style={{ transform: `rotate(${(i - 2) * 0.5}deg)` }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-12 text-[#f9f5f0]/60 text-sm"
              >
                <p>Via Provinciale, 27</p>
                <p>Gratacasolo, Pisogne (BS)</p>
                <a href="tel:036489008" className="block mt-4 text-2xl font-serif text-[#f9f5f0]">
                  0364 89008
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
