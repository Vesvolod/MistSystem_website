import './App.css'
import { useTranslation } from './context/LanguageContext'
import { Hero } from './components/Hero'
import { PainSolution } from './components/PainSolution'
import { BeforeAfter } from './components/BeforeAfter'
import { Benefits } from './components/Benefits'
import { HowItWorks } from './components/HowItWorks'
import { InstallationMap } from './components/InstallationMap'
import { Calculator } from './components/Calculator'
import { SocialProof } from './components/SocialProof'
import { Pricing } from './components/Pricing'
import { LeadForm } from './components/LeadForm'
import { WhatsAppButton } from './components/WhatsAppButton'
import { buildWhatsAppLink } from './config/contact'

function App() {
  const { t, locale, setLocale } = useTranslation()
  const currentYear = new Date().getFullYear()
  const copyrightYear = currentYear === 2024 ? '2024' : `2024–${currentYear}`

  return (
    <div className="page-root">
      <header className="page-header">
        <div className="container header-inner">
          <a className="header-logo" href="#hero" aria-label="Mist System">
            Mist System
          </a>
          <nav className="header-nav">
            <a href="#benefits">{t('nav.benefits')}</a>
            <a href="#product">{t('nav.product')}</a>
            <a href="#calculator">{t('nav.calculator')}</a>
            <a href="#cases">{t('nav.cases')}</a>
            <a href="#pricing">{t('nav.pricing')}</a>
          </nav>

          <div className="header-actions">
            <div className="lang-switcher" role="group" aria-label="Language">
              <button
                type="button"
                className={locale === 'en' ? 'lang-btn active' : 'lang-btn'}
                onClick={() => setLocale('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={locale === 'id' ? 'lang-btn active' : 'lang-btn'}
                onClick={() => setLocale('id')}
              >
                ID
              </button>
            </div>

            <a href="#lead-form" className="btn btn-primary header-cta" aria-label={t('nav.cta')}>
              <span className="header-cta-long">{t('nav.cta')}</span>
              <span className="header-cta-short">{t('nav.ctaShort')}</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <PainSolution />
        <BeforeAfter />
        <Benefits />
        <HowItWorks />
        <InstallationMap />
        <Calculator />
        <SocialProof />
        <Pricing />
        <LeadForm />
      </main>

      <footer className="page-footer">
        <div className="container footer-inner">
          <div className="footer-main">
            <div className="footer-brand">Mist System</div>
            <p className="footer-copy">{t('footer.copy')}</p>
          </div>
          <div className="footer-links">
            <div className="footer-link-group">
              <p className="footer-group-title">{t('footer.navTitle')}</p>
              <nav className="footer-nav">
                <a href="#benefits">{t('footer.navWhy')}</a>
                <a href="#product">{t('footer.navTech')}</a>
                <a href="#calculator">{t('footer.navCalculator')}</a>
                <a href="#lead-form">{t('footer.navContact')}</a>
              </nav>
            </div>
            <div className="footer-link-group">
              <p className="footer-group-title">{t('footer.contactTitle')}</p>
              <nav className="footer-nav">
                <a href={buildWhatsAppLink(t('lead.whatsappPrefill'))} target="_blank" rel="noopener noreferrer">{t('footer.contactWhatsApp')}</a>
                <a href="#lead-form">{t('footer.contactPlan')}</a>
              </nav>
            </div>
          </div>
          <div className="footer-meta">
            <span className="footer-copyright">{t('footer.copyrightPrefix')}, {copyrightYear}</span>
            <span className="footer-rights">{t('footer.rights')}</span>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}

export default App

