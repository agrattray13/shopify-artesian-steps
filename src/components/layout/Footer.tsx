"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/layout/SocialIcons"
import { footerNav, siteConfig } from "@/lib/site"

const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Youtube: YoutubeIcon,
  Twitter: TwitterIcon,
}

export function Footer() {
  const [email, setEmail] = React.useState("")
  const [subscribed, setSubscribed] = React.useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail("")
  }

  return (
    <footer className="bg-obsidian text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-xl tracking-luxe">
              ARTESIAN STEPS
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              A formalwear atelier for the moments that ask something of you.
              Tailored, fitted and finished by hand.
            </p>
            <div className="mt-6 flex gap-3">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.label as keyof typeof socialIcons]
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {footerNav.map((column) => (
            <div key={column.title}>
              <h3 className="eyebrow text-gold">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="eyebrow text-gold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-ivory/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-ivory">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-ivory">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <h3 className="eyebrow mt-8 text-gold">Newsletter</h3>
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <Input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="border-ivory/25 text-ivory placeholder:text-ivory/40"
              />
              <Button type="submit" variant="gold" className="w-full">
                Subscribe
              </Button>
              {subscribed ? (
                <p className="text-xs uppercase tracking-wideline text-gold">
                  Thank you — welcome to The Gentleman&apos;s Edit.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 text-[0.68rem] uppercase tracking-wideline text-ivory/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ivory">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ivory">
              Terms
            </Link>
            <Link href="/shipping-returns" className="hover:text-ivory">
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
