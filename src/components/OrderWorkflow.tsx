import { ORDER_STEPS } from '@/lib/organization'

export function OrderWorkflow({ currentStep = 0 }: { currentStep?: number }) {
  return (
    <ol className="order-workflow" aria-label="مسار الطلب">
      {ORDER_STEPS.map((step, index) => (
        <li
          key={step.id}
          className={index === currentStep ? 'is-current' : undefined}
        >
          <span className="step-index">{index + 1}</span>
          <span>{step.label}</span>
        </li>
      ))}
    </ol>
  )
}
