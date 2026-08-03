"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const appointmentTypes = [
  "Private style consultation",
  "Suit fitting",
  "Tuxedo fitting",
  "Wedding-party consultation",
  "Wardrobe consultation",
  "Alteration appointment",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

export function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    type: "",
    eventDate: "",
    partySize: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.includes("@")) next.email = "Please enter a valid email.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.date) next.date = "Please select a preferred date.";
    if (!form.time) next.time = "Please select a preferred time.";
    if (!form.type) next.type = "Please select an appointment type.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center bg-soft-white px-4 py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
          <Check className="h-8 w-8 text-gold" />
        </div>
        <h1 className="mt-6 font-serif text-3xl text-obsidian">Appointment Request Received</h1>
        <p className="mt-2 max-w-md text-charcoal/70">
          Thank you, {form.name}. We have received your request for a {form.type.toLowerCase()} on {form.date} at{" "}
          {form.time}. A member of our team will confirm your appointment shortly.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-soft-white py-12 sm:py-16">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Appointments</p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-obsidian">Book a Private Appointment</h1>
          <p className="mt-4 text-charcoal/70">
            Reserve a one-on-one consultation or fitting with our style advisors.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 border border-stone-200 bg-ivory/20 p-6 sm:p-10"
          noValidate
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={form.name} onChange={(e) => updateField("name", e.target.value)} className="mt-2" />
              {errors.name && <p className="mt-1 text-sm text-burgundy">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="mt-2" />
              {errors.email && <p className="mt-1 text-sm text-burgundy">{errors.email}</p>}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="mt-2" />
              {errors.phone && <p className="mt-1 text-sm text-burgundy">{errors.phone}</p>}
            </div>
            <div>
              <Label htmlFor="type">Appointment Type</Label>
              <select
                id="type"
                value={form.type}
                onChange={(e) => updateField("type", e.target.value)}
                className="mt-2 w-full border border-stone-300 bg-soft-white px-3 py-3 text-sm text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <option value="">Select an appointment type</option>
                {appointmentTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.type && <p className="mt-1 text-sm text-burgundy">{errors.type}</p>}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" type="date" value={form.date} onChange={(e) => updateField("date", e.target.value)} className="mt-2" />
              {errors.date && <p className="mt-1 text-sm text-burgundy">{errors.date}</p>}
            </div>
            <div>
              <Label htmlFor="time">Preferred Time</Label>
              <select
                id="time"
                value={form.time}
                onChange={(e) => updateField("time", e.target.value)}
                className="mt-2 w-full border border-stone-300 bg-soft-white px-3 py-3 text-sm text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <option value="">Select a time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.time && <p className="mt-1 text-sm text-burgundy">{errors.time}</p>}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="eventDate">Event Date (optional)</Label>
              <Input id="eventDate" type="date" value={form.eventDate} onChange={(e) => updateField("eventDate", e.target.value)} className="mt-2" />
            </div>
            <div>
              <Label htmlFor="partySize">Party Size (optional)</Label>
              <Input
                id="partySize"
                type="number"
                min={1}
                value={form.partySize}
                onChange={(e) => updateField("partySize", e.target.value)}
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Notes (optional)</Label>
            <Textarea
              id="notes"
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              className="mt-2"
              placeholder="Tell us about your event, style preferences, or any special requests."
            />
          </div>

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Request Appointment
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
