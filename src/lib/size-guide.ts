export interface SizeChart {
  slug: string
  title: string
  note: string
  headers: string[]
  rows: string[][]
}

export const sizeCharts: SizeChart[] = [
  {
    slug: "suits",
    title: "Suits & Jackets",
    note: "Jacket sizes are listed in US chest measurement. R denotes regular length; short and long lengths are available on request during a fitting.",
    headers: ["Size", "Chest (in)", "Waist (in)", "Sleeve (in)", "Jacket Length (in)"],
    rows: [
      ["36R", "35 – 36", "29 – 30", "32", "29.5"],
      ["38R", "37 – 38", "31 – 32", "32.5", "30"],
      ["40R", "39 – 40", "33 – 34", "33", "30.5"],
      ["42R", "41 – 42", "35 – 36", "33.5", "31"],
      ["44R", "43 – 44", "37 – 38", "34", "31.5"],
      ["46R", "45 – 46", "39 – 40", "34.5", "32"],
      ["48R", "47 – 48", "41 – 42", "35", "32.5"],
    ],
  },
  {
    slug: "tuxedos",
    title: "Tuxedos & Dinner Jackets",
    note: "Evening tailoring is cut slightly closer through the waist. If you are between sizes, take the larger and allow our tailor to suppress the waist.",
    headers: ["Size", "Chest (in)", "Waist (in)", "Trouser Waist (in)", "Inseam (in)"],
    rows: [
      ["36R", "35 – 36", "29 – 30", "30", "31"],
      ["38R", "37 – 38", "31 – 32", "32", "31.5"],
      ["40R", "39 – 40", "33 – 34", "34", "32"],
      ["42R", "41 – 42", "35 – 36", "36", "32.5"],
      ["44R", "43 – 44", "37 – 38", "38", "33"],
      ["46R", "45 – 46", "39 – 40", "40", "33"],
    ],
  },
  {
    slug: "shirts",
    title: "Dress Shirts",
    note: "Shirt sizes are given by collar measurement. Measure around the base of the neck and add half an inch for comfort.",
    headers: ["Collar", "Chest (in)", "Waist (in)", "Sleeve (in)", "Equivalent"],
    rows: [
      ['14.5"', "36 – 38", "30 – 32", "33", "Small"],
      ['15"', "38 – 40", "32 – 34", "33.5", "Small / Medium"],
      ['15.5"', "40 – 42", "34 – 36", "34", "Medium"],
      ['16"', "42 – 44", "36 – 38", "34.5", "Medium / Large"],
      ['16.5"', "44 – 46", "38 – 40", "35", "Large"],
      ['17"', "46 – 48", "40 – 42", "35.5", "Large / XL"],
      ['17.5"', "48 – 50", "42 – 44", "36", "XL"],
    ],
  },
  {
    slug: "footwear",
    title: "Footwear",
    note: "Our Goodyear-welted lasts run true to size with a slightly narrower waist. If you wear a wide fitting, size up a half.",
    headers: ["US", "UK", "EU", "Foot Length (in)"],
    rows: [
      ["7", "6", "40", "9.6"],
      ["8", "7", "41", "9.9"],
      ["8.5", "7.5", "41.5", "10.1"],
      ["9", "8", "42", "10.3"],
      ["9.5", "8.5", "42.5", "10.5"],
      ["10", "9", "43", "10.6"],
      ["10.5", "9.5", "44", "10.8"],
      ["11", "10", "44.5", "11"],
      ["12", "11", "45.5", "11.4"],
      ["13", "12", "46.5", "11.7"],
    ],
  },
  {
    slug: "accessories",
    title: "Accessories",
    note: "Ties are offered in standard and long lengths. Cufflinks and collar stays are one size and fit all Artesian Steps shirting.",
    headers: ["Item", "Length", "Width", "Fits"],
    rows: [
      ["Standard Tie", '58"', '3"', "Up to 6'0\""],
      ["Long Tie", '62"', '3"', "6'1\" and above"],
      ["Pocket Square", '16" × 16"', "—", "All jackets"],
      ["Cufflinks", "One size", "—", "French cuff shirting"],
    ],
  },
]

export function getSizeChart(slug: string) {
  return sizeCharts.find((chart) => chart.slug === slug) ?? sizeCharts[0]
}

export const measuringTips = [
  {
    title: "Chest",
    detail:
      "Measure around the fullest part of the chest, keeping the tape level under the arms and relaxed across the shoulder blades.",
  },
  {
    title: "Waist",
    detail:
      "Measure at the natural waist — roughly an inch above the navel — with one finger between the tape and your body.",
  },
  {
    title: "Sleeve",
    detail:
      "From the centre back of the neck, across the shoulder and down to the wrist bone with the arm slightly bent.",
  },
  {
    title: "Inseam",
    detail:
      "From the crotch seam of a well-fitting trouser to the desired break at the shoe. Bring your dress shoes to the fitting.",
  },
]
