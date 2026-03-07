import './TrustProof.css'
import { useTranslation } from '../context/LanguageContext'

const LOGOS = [
  'Nuanu.jpg',
  'Bar Boa.jpg',
  'BeachWalk.jpg',
  'Kemilau.jpg',
  'Akohra.jpg',
  'I Gusti Ngurah Rai.jpg',
  'Icon Bali.jpg',
  'Tropical Nomad.jpg',
  'Maya.jpg',
  'Obsidian.jpg',
  'Ritz Carlton Mandapa.jpg',
  'Atlas.jpg',
  'Bron.jpg',
  'Luna.jpg',
]

export function TrustProof() {
  const { t } = useTranslation()
  return (
    <section id="trust" className="section trust-section">
      <div className="container">
        <div className="section-header section-header-center">
          <h2 className="section-title">{t('trust.title')}</h2>
          <p className="section-subtitle">{t('trust.subtitle')}</p>
        </div>
        <div className="trust-logos">
          {LOGOS.map((file) => {
            const name = file.replace(/\.(jpg|jpeg|png|webp)$/i, '')
            return (
              <div key={file} className="trust-logo-item">
                <img
                  src={`/images/logos/${encodeURIComponent(file)}`}
                  alt={name}
                  loading="lazy"
                  width="160"
                  height="80"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
