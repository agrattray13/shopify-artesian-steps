"use client"

import * as React from "react"
import Link from "next/link"
import { CalendarCheck, Check, Clock, MapPin, RotateCcw } from "lucide-react"

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
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { appointmentTimes, appointmentTypes, siteConfig } from "@/lib/site"
import type { BookingFormData, FormStatus } from "@/lib/types"

const initialForm: BookingFormData = {
  name: "",
  email: "",
  phone: "",
  appointmentType: "",
  preferredDate: "",
  preferredTime: "",
  eventDate: "",
  partySize: "1",
  notes: "",
}

const partySizes = ["1", "2", "3 – 5", "6 – 9", "10 – 15", "16 or more"]

export function BookingForm() {
  const [form, setForm] = React.useState<BookingFormData>(initialForm)
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [status, setStatus] = React.useState<FormStatus>("idle")

  const today = new Date().toISOString().split("T")[0]

  const update = (field: keyof BookingFormData, value: string) => {
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
    if (form.phone.replace(/\D/g, "").length < 7)
      next.phone = "Enter a contactable phone number."
    if (!form.appointmentType) next.appointmentType = "Select an appointment type."
    if (!form.preferredDate) next.preferredDate = "Choose a preferred date."
    else if (form.preferredDate < today)
      next.preferredDate = "Choose a date in the future."
    if (!form.preferredTime) next.preferredTime = "Choose a preferred time."
    if (form.eventDate && form.eventDate < today)
      next.eventDate = "Your event date should be in the future."

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
    window.setTimeout(() => setStatus("success"), 800)
  }

  const fieldError = (field: string) =>
    errors[field] ? (
      <p className="mt-1.5 text-xs text-burgundy">{errors[field]}</p>
    ) : null

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center border border-gold/40 text-gold">
          <Check className="h-6 w-6" strokeWidth={1.25} />
        </span>
        <h2 className="mt-8 font-serif text-4xl">Your request has been received</h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Thank you, {form.name.split(" ")[0]}. We have your request for a{" "}
          {form.appointmentType.toLowerCase()} on {form.preferredDate} at{" "}
          {form.preferredTime}. A stylist will confirm the appointment by email
          within one business day.
        </p>
        <p className="mt-4 text-xs uppercase tracking-wideline text-muted-foreground">
          Demonstration site — no appointment has actually been scheduled
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              setForm(initialForm)
              setStatus("idle")
            }}
          >
            <RotateCcw />
            Book Another
          </Button>
          <Button asChild size="lg">
            <Link href="/new-arrivals">Browse the Collection</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
      <div className="grid gap-14 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <form onSubmit={handleSubmit} noValidate className="space-y-10">
          <section>
            <h2 className="font-serif text-2xl">Your Details</h2>
            <Separator className="my-6" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  className="mt-2"
                />
                {fieldError("name")}
              </div>
              <div>
                <Label htmlFor="booking-email">Email address</Label>
                <Input
                  id="booking-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  className="mt-2"
                />
                {fieldError("email")}
              </div>
              <div>
                <Label htmlFor="booking-phone">Phone number</Label>
                <Input
                  id="booking-phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  className="mt-2"
                />
                {fieldError("phone")}
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl">The Appointment</h2>
            <Separator className="my-6" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="appointmentType">Appointment type</Label>
                <Select
                  value={form.appointmentType}
                  onValueChange={(value) => update("appointmentType", value)}
                >
                  <SelectTrigger
                    id="appointmentType"
                    className="mt-2"
                    aria-invalid={Boolean(errors.appointmentType)}
                  >
                    <SelectValue placeholder="Select an appointment type" />
                  </SelectTrigger>
                  <SelectContent>
                    {appointmentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldError("appointmentType")}
              </div>

              <div>
                <Label htmlFor="preferredDate">Preferred date</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  min={today}
                  value={form.preferredDate}
                  onChange={(event) => update("preferredDate", event.target.value)}
                  aria-invalid={Boolean(errors.preferredDate)}
                  className="mt-2"
                />
                {fieldError("preferredDate")}
              </div>

              <div>
                <Label htmlFor="preferredTime">Preferred time</Label>
                <Select
                  value={form.preferredTime}
                  onValueChange={(value) => update("preferredTime", value)}
                >
                  <SelectTrigger
                    id="preferredTime"
                    className="mt-2"
                    aria-invalid={Boolean(errors.preferredTime)}
                  >
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {appointmentTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldError("preferredTime")}
              </div>

              <div>
                <Label htmlFor="eventDate">Event date (optional)</Label>
                <Input
                  id="eventDate"
                  type="date"
                  min={today}
                  value={form.eventDate}
                  onChange={(event) => update("eventDate", event.target.value)}
                  aria-invalid={Boolean(errors.eventDate)}
                  className="mt-2"
                />
                {fieldError("eventDate")}
              </div>

              <div>
                <Label htmlFor="partySize">Party size</Label>
                <Select
                  value={form.partySize}
                  onValueChange={(value) => update("partySize", value)}
                >
                  <SelectTrigger id="partySize" className="mt-2">
                    <SelectValue placeholder="How many attending?" />
                  </SelectTrigger>
                  <SelectContent>
                    {partySizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size} {size === "1" ? "guest" : "guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="notes">Notes for your stylist (optional)</Label>
                <Textarea
                  id="notes"
                  value={form.notes}
                  onChange={(event) => update("notes", event.target.value)}
                  placeholder="Tell us about the occasion, the dress code, or anything you already own that the new piece should work alongside."
                  className="mt-2"
                />
              </div>
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-5">
            <Button type="submit" size="lg" disabled={status === "submitting"}>
              <CalendarCheck />
              {status === "submitting" ? "Sending…" : "Request Appointment"}
            </Button>
            <div aria-live="polite">
              {status === "error" ? (
                <p className="text-xs text-burgundy">
                  Please correct the highlighted fields.
                </p>
              ) : null}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Requests are confirmed by email within one business day. This is a
            demonstration site — no appointment is actually scheduled.
          </p>
        </form>

        <aside className="space-y-8 lg:sticky lg:top-40 lg:self-start">
          <div className="border border-border bg-ivory/40 p-8">
            <h2 className="font-serif text-2xl">The Atelier</h2>
            <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>
                  {siteConfig.hours.map((entry) => (
                    <span key={entry.day} className="block">
                      {entry.day} — {entry.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          <div className="border border-border p-8">
            <p className="eyebrow text-gold">What to bring</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>The dress shoes you intend to wear with the garment.</li>
              <li>An existing jacket that fits you well, if you have one.</li>
              <li>Any invitation or dress code wording for the event.</li>
              <li>Photographs of the palette, if it is a wedding.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
