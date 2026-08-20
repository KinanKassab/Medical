'use client'

import type { FaqItem } from '@/content/faq'
import { Icon } from '@/components/Icon'
import { useState } from 'react'

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`
        return (
          <div className={open ? 'faq-item active' : 'faq-item'} key={item.question}>
            <h2 className="faq-heading">
              <button
                id={buttonId}
                type="button"
                className="faq-question"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                {item.question}
                <Icon name="chevron" />
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-answer"
              hidden={!open}
            >
              {item.answer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
