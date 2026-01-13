import { Link } from 'react-router-dom'
import SITE_DATA from '../constants/siteData'

export default function CookiePolicy() {
  const currentDate = new Date().toLocaleDateString('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="bg-[#2e2e2e] py-16 md:py-20">
        <div className="container-fluid">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#f9f5f0]/60 hover:text-[#f9f5f0] transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">Torna alla Home</span>
          </Link>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#7f1d1d] rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#f9f5f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-[#f9f5f0] mb-2">Cookie Policy</h1>
              <p className="text-[#f9f5f0]/60">Informativa sull'utilizzo dei cookie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-[#f9f5f0]">
        <div className="container-fluid">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 shadow-sm">
              <p className="text-[#2e2e2e]/50 text-sm mb-8">Ultimo aggiornamento: {currentDate}</p>

              {/* Privacy Friendly Notice */}
              <div className="bg-green-50 border border-green-200 p-6 rounded mb-10">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-green-800 font-medium mb-1">Sito Privacy-Friendly</p>
                    <p className="text-green-700 text-sm">
                      Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie
                      di profilazione, tracciamento o analisi</strong>. La tua privacy è protetta e non serve il tuo consenso per
                      la navigazione.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sezione 1 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">1. Cosa sono i Cookie</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone)
                  quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune
                  informazioni sulle tue preferenze o azioni passate.
                </p>
              </div>

              {/* Sezione 2 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">2. Tipologie di Cookie</h2>

                <h3 className="font-medium text-[#2e2e2e] mb-3">2.1 Cookie Tecnici</h3>
                <p className="text-[#2e2e2e]/70 mb-4">
                  Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza
                  questi cookie, il sito potrebbe non funzionare correttamente.
                </p>
                <div className="bg-[#e8d9c5]/30 p-4 rounded mb-6">
                  <p className="text-[#2e2e2e]/80 text-sm font-medium mb-2">Cookie tecnici utilizzati su questo sito:</p>
                  <ul className="list-disc list-inside text-[#2e2e2e]/70 text-sm space-y-1">
                    <li>Cookie di navigazione e di sessione</li>
                    <li>Cookie per memorizzare la preferenza del cookie consent</li>
                  </ul>
                  <p className="text-[#2e2e2e]/60 text-xs mt-3 italic">
                    Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
                  </p>
                </div>

                <h3 className="font-medium text-[#2e2e2e] mb-3">2.2 Cookie Analitici</h3>
                <div className="bg-red-50 border border-red-200 p-4 rounded mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span className="text-red-700 font-medium">NON UTILIZZATI</span>
                  </div>
                  <p className="text-red-700 text-sm">
                    Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
                  </p>
                </div>

                <h3 className="font-medium text-[#2e2e2e] mb-3">2.3 Cookie di Profilazione</h3>
                <div className="bg-red-50 border border-red-200 p-4 rounded mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span className="text-red-700 font-medium">NON UTILIZZATI</span>
                  </div>
                  <p className="text-red-700 text-sm">
                    Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
                  </p>
                </div>

                <h3 className="font-medium text-[#2e2e2e] mb-3">2.4 Cookie di Terze Parti</h3>
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span className="text-red-700 font-medium">NON UTILIZZATI</span>
                  </div>
                  <p className="text-red-700 text-sm">
                    Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
                  </p>
                </div>
              </div>

              {/* Sezione 3 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">3. Cookie Utilizzati su Questo Sito</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#f9f5f0]">
                        <th className="text-left p-3 border border-[#2e2e2e]/10 font-medium text-[#2e2e2e]">Nome Cookie</th>
                        <th className="text-left p-3 border border-[#2e2e2e]/10 font-medium text-[#2e2e2e]">Tipologia</th>
                        <th className="text-left p-3 border border-[#2e2e2e]/10 font-medium text-[#2e2e2e]">Finalità</th>
                        <th className="text-left p-3 border border-[#2e2e2e]/10 font-medium text-[#2e2e2e]">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-[#2e2e2e]/10 text-[#2e2e2e]/70">{SITE_DATA.cookieConsentKey}</td>
                        <td className="p-3 border border-[#2e2e2e]/10">
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Tecnico</span>
                        </td>
                        <td className="p-3 border border-[#2e2e2e]/10 text-[#2e2e2e]/70">
                          Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione
                        </td>
                        <td className="p-3 border border-[#2e2e2e]/10 text-[#2e2e2e]/70">1 anno</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#e8d9c5]/30 p-4 rounded mt-6">
                  <p className="text-[#2e2e2e]/80 text-sm">
                    <strong className="text-[#7f1d1d]">Nota importante:</strong> I cookie tecnici come quello indicato sono essenziali per il funzionamento del sito e non richiedono il
                    consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
                  </p>
                </div>
              </div>

              {/* Sezione 4 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">4. Come Gestire i Cookie</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni
                  del tuo browser.
                </p>

                <p className="text-[#2e2e2e]/80 font-medium mb-3">Disabilitare i cookie tramite il browser:</p>
                <ul className="list-disc list-inside text-[#2e2e2e]/70 space-y-2 mb-6">
                  <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                  <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
                  <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
                  <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                  <p className="text-yellow-800 text-sm">
                    <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la
                    qualità dell'esperienza di navigazione.
                  </p>
                </div>
              </div>

              {/* Sezione 5 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">5. Link a Siti Esterni</h2>
                <p className="text-[#2e2e2e]/70">
                  Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o
                  il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
                </p>
              </div>

              {/* Sezione 6 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">6. Aggiornamenti della Cookie Policy</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate
                  attraverso un avviso pubblicato su questa pagina.
                </p>
                <p className="text-[#2e2e2e]/70">
                  Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro
                  sito.
                </p>
              </div>

              {/* Sezione 7 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">7. Base Normativa</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  Questa Cookie Policy è redatta in conformità a:
                </p>
                <ul className="list-disc list-inside text-[#2e2e2e]/70 space-y-1">
                  <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
                  <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
                  <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
                  <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
                </ul>
              </div>

              {/* Sezione 8 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">8. Contatti</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
                </p>
                <div className="bg-[#f9f5f0] p-4 rounded border-l-4 border-[#7f1d1d]">
                  <p className="font-medium text-[#2e2e2e] mb-2">{SITE_DATA.legalName}</p>
                  <p className="text-[#2e2e2e]/70 text-sm">{SITE_DATA.address.full}</p>
                  <p className="text-[#2e2e2e]/70 text-sm">
                    Email: <a href={`mailto:${SITE_DATA.email}`} className="text-[#7f1d1d] hover:underline">{SITE_DATA.email}</a>
                  </p>
                  <p className="text-[#2e2e2e]/70 text-sm">
                    Tel: <a href={SITE_DATA.phoneLink} className="text-[#7f1d1d] hover:underline">{SITE_DATA.phone}</a>
                  </p>
                </div>
              </div>

              {/* Zero Tracking Badge */}
              <div className="bg-green-50 border border-green-200 p-8 rounded text-center">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-green-800 font-medium text-lg mb-2">Zero Tracciamento</p>
                <p className="text-green-700 text-sm">
                  Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online
                </p>
              </div>
            </div>

            {/* Bottom buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/"
                className="flex-1 text-center py-4 border border-[#2e2e2e]/20 text-[#2e2e2e] hover:bg-[#2e2e2e] hover:text-[#f9f5f0] transition-colors"
              >
                Torna alla Home
              </Link>
              <Link
                to="/privacy-policy"
                className="flex-1 text-center py-4 border border-[#7f1d1d] text-[#7f1d1d] hover:bg-[#7f1d1d] hover:text-[#f9f5f0] transition-colors"
              >
                Leggi la Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
