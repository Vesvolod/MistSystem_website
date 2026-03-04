import './App.css'
import { useTranslation } from './context/LanguageContext'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
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

function App() {
  const { t, locale, setLocale } = useTranslation()

  return (
    <div className="page-root">
      <header className="page-header">
        <div className="container header-inner">
          <div className="header-logo metallic-text metallic-text-hover">MistSystem</div>
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
            <a href="#lead-form" className="btn btn-primary header-cta">
              {t('nav.cta')}
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <StatsBar />
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
            <div className="footer-logo">MistSystem</div>
            <p className="footer-copy">{t('footer.copy')}</p>
          </div>
          <div className="footer-nav">
            <a href="#hero">{t('nav.home')}</a>
            <a href="#benefits">{t('nav.benefits')}</a>
            <a href="#product">{t('nav.product')}</a>
            <a href="#lead-form">{t('nav.contacts')}</a>
          </div>
          <div className="footer-meta">
            <p>© MistSystem, {new Date().getFullYear()}</p>
            <p>{t('footer.rights')}</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}

export default App
