'use client'

import { useState, type FormEvent } from 'react'
import { WHATSAPP_URL } from '@/lib/site'

export function ContactForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = `الاسم: ${name}\nالرسالة: ${message}`
    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="contact-name">الاسم</label>
        <input
          id="contact-name"
          className="form-control"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact-message">الرسالة</label>
        <textarea
          id="contact-message"
          className="form-control"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <p className="form-help">
        سيُفتح واتساب برسالتك. لا نحتفظ بنموذج على الخادم في الإصدار الحالي.
      </p>
      <button className="submit-btn" type="submit">
        متابعة عبر واتساب
      </button>
    </form>
  )
}
