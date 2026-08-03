interface PolicySection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

interface PolicyContentProps {
  updated: string
  intro?: string
  sections: PolicySection[]
}

export function PolicyContent({ updated, intro, sections }: PolicyContentProps) {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-[0.62rem] uppercase tracking-wideline text-muted-foreground">
          Last updated {updated}
        </p>

        {intro ? (
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}

        <div className="mt-16 space-y-14">
          {sections.map((section, index) => (
            <article key={section.heading}>
              <h2 className="font-serif text-2xl md:text-3xl">
                <span className="mr-4 text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.heading}
              </h2>
              <div className="luxe-rule mt-5" />

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-6 text-sm leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets ? (
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="flex gap-4 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="text-gold">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
