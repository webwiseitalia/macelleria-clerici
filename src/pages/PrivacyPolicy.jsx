import { Link } from 'react-router-dom'
import SITE_DATA from '../constants/siteData'

export default function PrivacyPolicy() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-[#f9f5f0] mb-2">Privacy Policy</h1>
              <p className="text-[#f9f5f0]/60">Informativa sul trattamento dei dati personali</p>
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

              {/* Sezione 1 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">1. Titolare del Trattamento</h2>
                <p className="text-[#2e2e2e]/70 mb-4">Il Titolare del trattamento dei dati personali è:</p>
                <div className="bg-[#f9f5f0] p-6 border-l-4 border-[#7f1d1d]">
                  <p className="font-medium text-[#2e2e2e] mb-2">{SITE_DATA.legalName}</p>
                  <p className="text-[#2e2e2e]/70 text-sm flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-[#7f1d1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {SITE_DATA.address.full}
                  </p>
                  <p className="text-[#2e2e2e]/70 text-sm flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4 text-[#7f1d1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {SITE_DATA.phone}
                  </p>
                  <p className="text-[#2e2e2e]/70 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#7f1d1d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {SITE_DATA.email}
                  </p>
                </div>
              </div>

              {/* Sezione 2 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>

                <h3 className="font-medium text-[#2e2e2e] mb-3">2.1 Dati forniti volontariamente dall'utente</h3>
                <p className="text-[#2e2e2e]/70 mb-4">
                  Tramite il contatto telefonico o via email, potremmo raccogliere i seguenti dati personali:
                </p>
                <ul className="list-disc list-inside text-[#2e2e2e]/70 mb-6 space-y-1">
                  <li><strong>Nome e Cognome</strong> - per identificare l'interessato</li>
                  <li><strong>Numero di Telefono</strong> - per contatti telefonici</li>
                  <li><strong>Indirizzo Email</strong> - per rispondere alle richieste</li>
                </ul>

                <div className="bg-[#e8d9c5]/30 p-4 rounded mb-6">
                  <p className="text-[#2e2e2e]/80 text-sm">
                    <strong className="text-[#7f1d1d]">Finalità:</strong> I dati vengono raccolti esclusivamente per:
                  </p>
                  <ul className="list-disc list-inside text-[#2e2e2e]/70 text-sm mt-2 space-y-1">
                    <li>Rispondere alle richieste di informazioni</li>
                    <li>Gestire prenotazioni e ordini</li>
                    <li>Fornire assistenza ai clienti</li>
                  </ul>
                </div>

                <h3 className="font-medium text-[#2e2e2e] mb-3">2.2 Base giuridica del trattamento</h3>
                <p className="text-[#2e2e2e]/70">
                  Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso
                  il contatto diretto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
                </p>
              </div>

              {/* Sezione 3 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">3. Modalità di Trattamento</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle
                  finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
                </p>
                <p className="text-[#2e2e2e]/70">
                  Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non
                  autorizzati, perdita, distruzione o divulgazione.
                </p>
              </div>

              {/* Sezione 4 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">4. Conservazione dei Dati</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le
                  relazioni commerciali conseguenti:
                </p>
                <ul className="list-disc list-inside text-[#2e2e2e]/70 space-y-1">
                  <li><strong>Richieste di preventivo:</strong> I dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
                  <li><strong>Rapporti contrattuali:</strong> I dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
                  <li><strong>Richieste di informazioni:</strong> I dati vengono conservati per 12 mesi dalla risposta</li>
                </ul>
              </div>

              {/* Sezione 5 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">5. Comunicazione e Diffusione dei Dati</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
                </p>
                <ul className="list-disc list-inside text-[#2e2e2e]/70 mb-6 space-y-1">
                  <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
                  <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
                  <li>Autorità competenti in caso di richieste legittime previste per legge</li>
                </ul>

                <div className="bg-[#7f1d1d]/5 border border-[#7f1d1d]/20 p-4 rounded">
                  <p className="text-[#7f1d1d] font-medium text-sm mb-2">I tuoi dati NON verranno MAI:</p>
                  <ul className="list-disc list-inside text-[#2e2e2e]/70 text-sm space-y-1">
                    <li>Venduti a terze parti</li>
                    <li>Condivisi con scopi di marketing</li>
                    <li>Utilizzati per invio di newsletter non richieste</li>
                    <li>Trasferiti fuori dall'Unione Europea</li>
                  </ul>
                </div>
              </div>

              {/* Sezione 6 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">6. Diritti dell'Interessato</h2>
                <p className="text-[#2e2e2e]/70 mb-4">In qualità di interessato, hai il diritto di:</p>
                <ul className="list-disc list-inside text-[#2e2e2e]/70 space-y-2">
                  <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
                  <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
                  <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
                  <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
                  <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
                  <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
                  <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
                </ul>

                <div className="bg-[#e8d9c5]/30 p-4 rounded mt-6">
                  <p className="text-[#2e2e2e]/80 text-sm font-medium mb-2">Come esercitare i tuoi diritti:</p>
                  <p className="text-[#2e2e2e]/70 text-sm">
                    Puoi esercitare i tuoi diritti inviando una richiesta via email a{' '}
                    <a href={`mailto:${SITE_DATA.email}`} className="text-[#7f1d1d] hover:underline">{SITE_DATA.email}</a>{' '}
                    o tramite raccomandata A/R all'indirizzo: {SITE_DATA.address.full}.
                  </p>
                  <p className="text-[#2e2e2e]/70 text-sm mt-2">
                    Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.
                  </p>
                </div>
              </div>

              {/* Sezione 7 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">7. Diritto di Reclamo</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il
                  trattamento dei tuoi dati violi il GDPR.
                </p>
                <div className="bg-[#f9f5f0] p-4 rounded border-l-4 border-[#7f1d1d]">
                  <p className="text-[#2e2e2e] font-medium text-sm mb-1">Garante per la protezione dei dati personali:</p>
                  <p className="text-[#2e2e2e]/70 text-sm">Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#7f1d1d] hover:underline">www.garanteprivacy.it</a></p>
                  <p className="text-[#2e2e2e]/70 text-sm">Email: garante@gpdp.it</p>
                  <p className="text-[#2e2e2e]/70 text-sm">PEC: protocollo@pec.gpdp.it</p>
                </div>
              </div>

              {/* Sezione 8 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
                <p className="text-[#2e2e2e]/70">
                  Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni,
                  consulta la nostra <Link to="/cookie-policy" className="text-[#7f1d1d] hover:underline">Cookie Policy</Link>.
                </p>
              </div>

              {/* Sezione 9 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">9. Modifiche alla Privacy Policy</h2>
                <p className="text-[#2e2e2e]/70">
                  Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche
                  saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a
                  consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
                </p>
              </div>

              {/* Sezione 10 */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl text-[#2e2e2e] mb-4">10. Contatti</h2>
                <p className="text-[#2e2e2e]/70 mb-4">
                  Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
                </p>
                <div className="flex flex-col gap-2">
                  <a href={`mailto:${SITE_DATA.email}`} className="inline-flex items-center gap-2 text-[#7f1d1d] hover:text-[#991b1b]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {SITE_DATA.email}
                  </a>
                  <a href={SITE_DATA.phoneLink} className="inline-flex items-center gap-2 text-[#7f1d1d] hover:text-[#991b1b]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {SITE_DATA.phone}
                  </a>
                </div>
              </div>

              {/* Footer nota */}
              <div className="pt-8 border-t border-[#2e2e2e]/10 text-center">
                <p className="text-[#2e2e2e]/50 text-sm">
                  Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018
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
                to="/cookie-policy"
                className="flex-1 text-center py-4 border border-[#7f1d1d] text-[#7f1d1d] hover:bg-[#7f1d1d] hover:text-[#f9f5f0] transition-colors"
              >
                Leggi la Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
