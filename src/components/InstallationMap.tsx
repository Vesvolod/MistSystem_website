import './InstallationMap.css'
import { useTranslation } from '../context/LanguageContext'
import InstallationDiagram from './InstallationDiagram'

export function InstallationMap() {
  const { t } = useTranslation()
  const steps = [t('install.s1'), t('install.s2'), t('install.s3')]

  return (
    <section id="installation" className="section section-animated installation-section">
      <div className="container installation-layout">
        <div className="installation-copy">
          <div className="section-header">
            <h2 className="section-title">{t('install.title')}</h2>
            <p className="section-subtitle">{t('install.subtitle')}</p>
          </div>

          <ul className="installation-steps">
            {steps.map((step) => (
              <li key={step} className="installation-step">
                <span className="installation-step-dot" />
                <span className="installation-step-text">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="installation-visual">
          <InstallationDiagram />
        </div>
      </div>
    </section>
  )
}


