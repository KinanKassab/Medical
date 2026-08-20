'use client'

import { useState, type FormEvent } from 'react'

export function ContactForm({ whatsappUrl }: { whatsappUrl: string | null }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!whatsappUrl) return
    const text = `الاسم: ${name}\nالرسالة: ${message}`
    window.open(
      `${whatsappUrl}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  if (!whatsappUrl) {
    return (
      <div className="contact-form">
        <p>
          نموذج رسائل واتساب غير مفعّل حتى يُدخل الرقم الرسمي. لطلب الدواء
          راجع{' '}
          <a href="/order-cytotec">صفحة طلب سايتوتك</a>.
        </p>
      </div>
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
        هذا النموذج يفتح واتساب لرسالة دعم حرّة. لبدء طلب الدواء استخدم{' '}
        <a href="/order-cytotec">طلب الدواء عبر واتساب</a>.
      </p>
      <button className="submit-btn" type="submit">
        متابعة عبر واتساب
      </button>
    </form>
  )
}
