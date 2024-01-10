

const movies_data = [
  {
    title: "A sociedade da neve",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXvuFDkHq-mIyXg_1znn4jsqg2YWbQaPqz0mSvDrqua09bFU2CHBYo_7_KJ8MrCOcY7I_Q41E-PoJYtM8IJTNkHwAOBghPDqxyFQy_sif5CkrN2nZe-uiqAFnbtvKyvfAA9bJMgSF4fK9Vzz7GT4OKML9Y6cZYI26CJwEW7Tt3xtDPhmr8OqHmdIjC4zMWgKdS0zpcC-HNYBFPa9IumRt_elloi7mZ1wIAFaSD_W00ota-hjYWT_7YNm3ePxbFalfoXUubt6umyCUQiSZvLGts7-yss9s-EbM3AHOvqet-gbhcdOa4UeoJlO6YT59526xy8Po5fKWTetyvTn-R5EMqDL5OTkcQpr4S9y9jhJ2DI.jpg?r=21b",
    age_restriction: 18,
    relevance: 74,
    type: "movie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  // {
  //   title: "",
  //   thumb: "",
  //   age_restriction: 18,
  //   relevance: 74,
  //   type: "",
  //   num_episodes: 12,
  //   duration: 234,
  //   category: [
  //     "assustador",
  //     "suspense no ar",
  //     "terror sobrenatural"
  //   ]
  // },
  {
    title: "Clube da luta",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZzgtDGV4vffeVpXVt14mg8OEQY-IEQpVN20Pr2ZWq23uUybOU6LPgVZclg7C4BcirZFEpkzo5doTO3kE0Ee8aJs57hfZyRvgwo.webp?r=071",
    age_restriction: 18,
    relevance: 74,
    type: "movie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Manifest",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYDlZSUnXSPlKrDkNZny_2_6asadyohL5643hHSPs1GIdZIsSfa_WELLPoI6PWqZLWoY5MB2F15-bEXTFv8DImZCNtWTXR_xq_OcgOIhZ1bXuBE6GnCRgsdtfKmMGBfv6tlO.jpg?r=f18",
    age_restriction: 18,
    relevance: 74,
    type: "serie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "O dilema das redes",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRC3FAF7BHpX_2rfgnM8KH-sBREiVpkSR-tYxbpp9qgfkHURY39ZgGU91v8usCMB0HOKHBuHfiL9PYEDHqrdWRsUopwze-0ZZInasTuYNh1C607d_c3bC7MGCRSRn58avlEk.jpg?r=494",
    age_restriction: 18,
    relevance: 74,
    type: "movie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Não olhe para cima",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXMdNZuU5jsz5OrLTEUN_QeEPxYpe7wDVts5IgwJ6zdNlDJBvetk2pa-7PbBBVsgbKzDuWX-jEvTyFR4Axop02bFbP1muuqgViQLeWVp8z4xRMz91AIaoNcmE1I2NRP0Lnjj.jpg?r=9b6",
    age_restriction: 18,
    relevance: 74,
    type: "movie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Django Livre",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYAzT5DlKW-alcxdVPfbc0R_J1-Nsq5n0NKkIDbgvXWNXPaXypjUfo-eZtYqBpL5EqNb_2tLFK3dG8xdGQxlgj9_KwH8CxjnPBY.webp?r=0e1",
    age_restriction: 18,
    relevance: 74,
    type: "movie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Rango",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaFFeXN_3_cN5f2BRA68pOrjWjvp-3wYLv_T_26XZ7y2lW_f5F3jqY1pjtfBLRNyvOHqkKdYb_yRs_qfXcubinQoQvv5f0sksos.webp?r=df7",
    age_restriction: 18,
    relevance: 74,
    type: "movie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Cidade de Deus",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbh-qEAoy4bQ-l_TDS4ZTg_qM3BsYC3P3dkujvCR4Waufqjj0FlIR993XgqHQbcwIjPvYxUHRe8SCNfXuGnAJAb-2ZzRCpyduXQ.webp?r=c33",
    age_restriction: 18,
    relevance: 74,
    type: "movie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Breaking Bad",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX4OL8E82D813VKb_Uf_bWkZwD9xUj92YodAaE9C3HtNnaiTBrgOnPF1BXGLUEIF3ddX5Hur6TqzpUY_S78RvVeDLR_7c84UXIQ.webp?r=a32",
    age_restriction: 18,
    relevance: 74,
    type: "serie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Jovem Sheldon",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRDsyviQMMTdY1mUMAU6a5QLFtkIzj-ZyxLPRMD6mbURceTpT0c7ren_S0O6j9H9mI-c3e0OKu5Xara2siETtpMDBzcd8UBFmSo.webp?r=77d",
    age_restriction: 18,
    relevance: 74,
    type: "serie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Suits",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQHT239v8gBDmfKnXeFlEQ6awof6b1rFuP3ePGc9lF7xTIMvZeNtF2UGngxvWunMJIxRgSBwNzo2yTpyOlbRImHebDQnEVvIBxI.webp?r=e4d",
    age_restriction: 18,
    relevance: 74,
    type: "serie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "The 100",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVcbncpPRvKocWvIesfY46zPjRfWX9xMs9jUm-zZzNAWzGlkjL4ZwSByc9pKtYiwrCvct0O20ep1gRcP24Xd4FZKRVfui7Cu3zA.webp?r=d42",
    age_restriction: 18,
    relevance: 74,
    type: "serie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "One Piece",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfdnCwcbyfADodt0fNgE0ZEfhxerJjqxHODFmr7dQFKLnUAmgS0TBywjeKHUJplc8VbBiALy_5nothXTNa9aYXWDPDDs_TBgd6w2GRJ2i8SGSdNZhdazwGfS8u6MYKjDgkvQ_Jd4SNXYH8dKYdJLIPSKO_X6a0jUe4VxDKzxtX_0uPr_M1UHqUlpcSuwwaV2Ibp6iMe84p__axwswFegQfTtcJmbvglzlwp1WXiXRA4MyVFbb3gASKBgeVLIHGvo6yxHH5T2O4YkO8vTvFq97oQDa3fWyNc.webp?r=931",
    age_restriction: 18,
    relevance: 74,
    type: "serie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Dark",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa3IC_4NEM9BPnW1DF6eo36jJTV1mknNgsj_epYqs1th1b4eyIJG9sSffOuRDxuawJCVyQzI-FlCQPbGKeu13DDle598siM-L7lk2Smra-exgr1xHNQw2rfdBy-6EPU7QLCY.jpg?r=a13",
    age_restriction: 18,
    relevance: 74,
    type: "serie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "La Casa de Papel",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTAP56j1Nd3V-WkWSqIkA-wLos3FhsoGYKIL2o9Hcs0LCgcr8OtU9Ku9s88yEs3RQLMgHLU8pmc5r4iVu8pQPL3fZeQI8OpJWm2aheq-DYfl0_8paIT1SsTcWGN770aUCA_e.jpg?r=c62",
    age_restriction: 18,
    relevance: 74,
    type: "serie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Ragnarok",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZQEjP9h5ky-T5mUehpFTXnR5nO9OW3kUZmjfABhAEBWAbFFdy4R3gs26v4nPbT78XPWLSBiwBb4Y5lQGvFF2CV7R6neuN2xA4gRbNrQSCnxqwcOzUPXD4SeoZC4SEKAMes-.jpg?r=ae8",
    age_restriction: 18,
    relevance: 74,
    type: "serie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
  {
    title: "Peaky Blinders",
    thumb: "https://occ-0-1775-1380.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWWkUxtcJVK58SAnG-FMLo4iX-hjD1ZcT1MPd9Dk3ZTIFmz-Xt4QenjV5vEu80a-BXmRLEZCJa3XhSXDaEU633C5F_nmRIC8ZoeclQQAvW4SbBIYaRD3FdclHTVt90oDyLQs.jpg?r=9a9",
    age_restriction: 18,
    relevance: 74,
    type: "serie",
    num_episodes: 12,
    duration: 234,
    category: [
      "assustador",
      "suspense no ar",
      "terror sobrenatural"
    ]
  },
]

export default movies_data