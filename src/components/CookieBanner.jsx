import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SITE_DATA from '../constants/siteData'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  // Pagine policy dove non mostrare il blur
  const isPolicyPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

  useEffect(() => {
    // Controlla se il consenso è già stato dato
    const consent = localStorage.getItem(SITE_DATA.cookieConsentKey)
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(SITE_DATA.cookieConsentKey, 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(SITE_DATA.cookieConsentKey, 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Blur overlay - non mostrare sulle pagine policy */}
      {!isPolicyPage && (
        <div
          className="fixed inset-0 bg-[#2e2e2e]/60 backdrop-blur-sm z-[9998]"
          aria-hidden="true"
        />
      )}

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-[#f9f5f0] shadow-2xl border border-[#2e2e2e]/10">
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-[#7f1d1d] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#f9f5f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="font-serif text-xl md:text-2xl text-[#2e2e2e] mb-1">
                  Informativa sui Cookie
                </h2>
                <p className="text-[#2e2e2e]/60 text-sm">
                  {SITE_DATA.name}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <p className="text-[#2e2e2e]/70 leading-relaxed mb-4">
                Questo sito utilizza esclusivamente <strong className="text-[#2e2e2e]">cookie tecnici</strong> necessari
                al corretto funzionamento. Non utilizziamo cookie di profilazione o di terze parti per tracciare
                la tua navigazione.
              </p>
              <p className="text-[#2e2e2e]/70 text-sm">
                Per maggiori informazioni, consulta la nostra{' '}
                <Link to="/privacy-policy" className="text-[#7f1d1d] hover:underline font-medium">
                  Privacy Policy
                </Link>{' '}
                e la{' '}
                <Link to="/cookie-policy" className="text-[#7f1d1d] hover:underline font-medium">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            {/* Buttons - stessa dimensione e stile */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 py-3 px-6 bg-[#7f1d1d] text-[#f9f5f0] font-medium text-sm uppercase tracking-wider hover:bg-[#991b1b] transition-colors"
              >
                Accetta
              </button>
              <button
                onClick={handleReject}
                className="flex-1 py-3 px-6 bg-[#7f1d1d] text-[#f9f5f0] font-medium text-sm uppercase tracking-wider hover:bg-[#991b1b] transition-colors"
              >
                Rifiuta
              </button>
            </div>

            {/* Note */}
            <p className="text-[#2e2e2e]/40 text-xs mt-4 text-center">
              Continuando la navigazione acconsenti all'utilizzo dei cookie tecnici.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
