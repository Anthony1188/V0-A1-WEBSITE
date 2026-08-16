'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { services } from '@/lib/content'

const inputClass =
  'w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // NOTE: UI-only for now. No backend wiring yet — this simply shows a
    // confirmation state. Hook this up to email or a database when ready.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="font-display mt-4 text-2xl">Request Received</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Thanks for reaching out. We&apos;ll be in touch shortly to get your job on the
          schedule.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'mt-6 h-11 rounded-sm px-6 font-display tracking-wide',
          )}
        >
          Send Another
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="font-display text-sm tracking-wide text-foreground">
            Full Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" className={cn(inputClass, 'mt-2')} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="font-display text-sm tracking-wide text-foreground">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="(555) 123-4567" className={cn(inputClass, 'mt-2')} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="font-display text-sm tracking-wide text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@email.com" className={cn(inputClass, 'mt-2')} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="font-display text-sm tracking-wide text-foreground">
            Service Needed
          </label>
          <select id="service" name="service" defaultValue="" required className={cn(inputClass, 'mt-2')}>
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="font-display text-sm tracking-wide text-foreground">
            Tell Us About the Job
          </label>
          <textarea id="message" name="message" rows={5} placeholder="What do you need hauled? Where are you located?" className={cn(inputClass, 'mt-2 resize-y')} />
        </div>
      </div>
      <button
        type="submit"
        className={cn(
          buttonVariants(),
          'mt-6 h-12 w-full gap-2 rounded-sm text-base font-display tracking-wide sm:w-auto sm:px-8',
        )}
      >
        <Send className="h-4 w-4" />
        Request My Free Quote
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        We&apos;ll never share your info. Prefer to talk? Give us a call anytime.
      </p>
    </form>
  )
}
