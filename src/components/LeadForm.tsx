import { FormEvent, useState } from 'react'
import './LeadForm.css'
import { useTranslation } from '../context/LanguageContext'

export function LeadForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const phone = String(formData.get('phone') || '').trim()

    if (!name || !phone) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    // Имитация отправки формы.
    // Здесь можно интегрировать API, почтовый сервис или webhook.
    setTimeout(() => {
      setStatus('success')
      form.reset()
    }, 900)
  }

  return (
    <section id="lead-form" className="section section-animated lead-section">
      <div className="container lead-layout">
        <div className="lead-copy">
          <h2 className="section-title">{t('lead.title')}</h2>
          <p className="section-subtitle">{t('lead.subtitle')}</p>
          <div className="lead-contacts">
            <p>{t('lead.contactLabel')}</p>
            <a href="tel:+622100000000">+62 21 000 000 00</a>
            <a href="mailto:info@mistsystem.id">info@mistsystem.id</a>
          </div>
        </div>
        <div className="lead-form-wrapper">
          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="lead-field">
              <label htmlFor="name">{t('lead.nameLabel')}</label>
              <input id="name" name="name" type="text" placeholder={t('lead.namePlaceholder')} required />
            </div>
            <div className="lead-field">
              <label htmlFor="phone">{t('lead.phoneLabel')}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t('lead.phonePlaceholder')}
                required
              />
            </div>
            <div className="lead-field">
              <label htmlFor="context">{t('lead.contextLabel')}</label>
              <select id="context" name="context" defaultValue="">
                <option value="" disabled>
                  {t('lead.contextPlaceholder')}
                </option>
                <option value="home">{t('lead.contextHome')}</option>
                <option value="horeca">{t('lead.contextHoreca')}</option>
                <option value="business">{t('lead.contextBusiness')}</option>
                <option value="other">{t('lead.contextOther')}</option>
              </select>
            </div>
            <div className="lead-field">
              <label htmlFor="comment">{t('lead.commentLabel')}</label>
              <textarea
                id="comment"
                name="comment"
                rows={3}
                placeholder={t('lead.commentPlaceholder')}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? t('lead.submitting') : t('lead.submit')}
            </button>
            <p className="lead-policy">{t('lead.policy')}</p>
            {status === 'success' && (
              <p className="lead-status lead-status-success">{t('lead.success')}</p>
            )}
            {status === 'error' && (
              <p className="lead-status lead-status-error">{t('lead.error')}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

