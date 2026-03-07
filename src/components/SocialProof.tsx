import './SocialProof.css'
import { useTranslation } from '../context/LanguageContext'

const LOGOS = [
  { file: 'Ritz Carlton Mandapa.jpg', name: 'Ritz Carlton Mandapa' },
  { file: 'Nuanu.jpg', name: 'Nuanu' },
  { file: 'BeachWalk.jpg', name: 'BeachWalk' },
  { file: 'I Gusti Ngurah Rai.jpg', name: 'I Gusti Ngurah Rai Airport' },
  { file: 'Bar Boa.jpg', name: 'Bar Boa' },
  { file: 'Icon Bali.jpg', name: 'Icon Bali' },
  { file: 'Maya.jpg', name: 'Maya' },
  { file: 'Tropical Nomad.jpg', name: 'Tropical Nomad' },
  { file: 'Kemilau.jpg', name: 'Kemilau' },
  { file: 'Obsidian.jpg', name: 'Obsidian' },
  { file: 'Atlas.jpg', name: 'Atlas' },
  { file: 'Akohra.jpg', name: 'Akohra' },
  { file: 'Bron.jpg', name: 'Bron' },
  { file: 'Luna.jpg', name: 'Luna' },
]

export function SocialProof() {
  const { t } = useTranslation()
  const tripled = [...LOGOS, ...LOGOS, ...LOGOS]

  return (
    <section id="cases" className="social-section">
      <div className="container">
        <div className="social-header">
          <p className="social-eyebrow">{t('social.eyebrow')}</p>
          <p className="social-stat">{t('social.stat')}</p>
        </div>
      </div>
      <div className="social-marquee-wrap" aria-label="Client logos">
        <div className="social-marquee">
          {tripled.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="social-logo-item">
              <img
                src={`/images/logos/${encodeURIComponent(logo.file)}`}
                alt={logo.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <p className="social-caption">{t('social.caption')}</p>
      </div>
    </section>
  )
}
