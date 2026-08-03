"use client"

import * as React from "react"
import { Check, RotateCcw, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { ContactFormData, FormStatus } from "@/lib/types"

const initialForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
}

const subjects = [
  "General enquiry",
  "Order or delivery",
  "Alterations",
  "Weddings & events",
  "Press & partnerships",
  "Something else",
]

export function ContactForm() {
  const [form, setForm] = React.useState<ContactFormData>(initialForm)
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [status, setStatus] = React.useState<FormStatus>("idle")

  const update = (field: keyof ContactFormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const validate = () => {
    const next: Record<string, string> = {}

    if (form.name.trim().length < 2) next.name = "Please tell us your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address."
    if (!form.subject) next.subject = "Choose a subject."
    if (form.message.trim().length < 12)
      next.message = "A little more detail helps us route your message."

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) {
      setStatus("error")
      return
    }

    setStatus("submitting")
    window.setTimeout(() => setStatus("success"), 700)
  }

  if (status === "success") {
    return (
      <div className="border border-gold/40 bg-softwhite p-12 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
          <Check className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <h2 className="mt-7 font-serif text-3xl">Message Received</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you, {form.name.split(" ")[0]}. A member of the atelier will reply to{" "}
          {form.email} within one business day. This is a demonstration site, so no
          message has actually been sent.
        </p>
        <Button
          variant="outline"
          className="mt-9"
          onClick={() => {
            setForm(initialForm)
            setStatus("idle")
          }}
        >
          <RotateCcw className="mr-2 h-4 w-4" strokeWidth={1.5} />
          Write Another
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-border bg-softwhite p-8 md:p-12"
    >
      <p className="eyebrow text-gold">Write To Us</p>
      <h2 className="mt-4 font-serif text-3xl">Send a Message</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Fields marked with an asterisk are required. We reply to every message within
        one business day.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full name *</Label>
          <Input
            id="contact-name"
            value={form.name}
            autoComplete="name"
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Email *</Label>
          <Input
            id="contact-email"
            type="email"
            value={form.email}
            autoComplete="email"
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone</Label>
          <Input
            id="contact-phone"
            type="tel"
            value={form.phone}
            autoComplete="tel"
            onChange={(event) => update("phone", event.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-subject">Subject *</Label>
          <Select
            value={form.subject}
            onValueChange={(value) => update("subject", value)}
          >
            <SelectTrigger id="contact-subject" aria-invalid={Boolean(errors.subject)}>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.subject ? (
            <p className="text-xs text-destructive">{errors.subject}</p>
          ) : null}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="contact-message">Message *</Label>
          <Textarea
            id="contact-message"
            rows={6}
            value={form.message}
            placeholder="Tell us about the occasion, the timeline and anything we should know in advance."
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? (
            <p className="text-xs text-destructive">{errors.message}</p>
          ) : null}
        </div>
      </div>

      {status === "error" ? (
        <p className="mt-8 border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          Please correct the highlighted fields and try again.
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="mt-10 w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        <Send className="mr-2 h-4 w-4" strokeWidth={1.5} />
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  )
}
