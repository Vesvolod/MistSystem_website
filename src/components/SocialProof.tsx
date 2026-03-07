import './SocialProof.css'
import { useTranslation } from '../context/LanguageContext'

const LOGOS = [
  { file: 'Nuanu.jpg', name: 'Nuanu' },
  { file: 'Bar Boa.jpg', name: 'Bar Boa' },
  { file: 'BeachWalk.jpg', name: 'BeachWalk' },
  { file: 'Kemilau.jpg', name: 'Kemilau' },
  { file: 'Akohra.jpg', name: 'Akohra' },
  { file: 'I Gusti Ngurah Rai.jpg', name: 'I Gusti Ngurah Rai Airport' },
  { file: 'Icon Bali.jpg', name: 'Icon Bali' },
  { file: 'Tropical Nomad.jpg', name: 'Tropical Nomad' },
  { file: 'Maya.jpg', name: 'Maya' },
  { file: 'Obsidian.jpg', name: 'Obsidian' },
  { file: 'Ritz Carlton Mandapa.jpg', name: 'Ritz Carlton Mandapa' },
  { file: 'Atlas.jpg', name: 'Atlas' },
  { file: 'Bron.jpg', name: 'Bron' },
  { file: 'Luna.jpg', name: 'Luna' },
]

export function SocialProof() {
  const { t } = useTranslation()
  const doubled = [...LOGOS, ...LOGOS]

  return (
    <section id="cases" className="section social-section">
      <div className="container">
        <p className="social-stat">{t('social.stat')}</p>
      </div>
      <div className="social-marquee-wrap" aria-label="Client logos">
        <div className="social-marquee">
          {doubled.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="social-logo-item">
              <img
                src={`/images/logos/${encodeURIComponent(logo.file)}`}
                alt={logo.name}
                loading="lazy"
                width="160"
                height="80"
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
