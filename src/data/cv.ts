export type Credit = {
  title: string;
  href?: string;
  note?: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  role: string;
  description?: string;
  href?: string;
};

export type Stat = {
  value: string;
  label: string;
};

export const profile = {
  name: "AkmelikA",
  domain: "akmelika.com",
  tagline: "Band · Composer · Sound Producer · Recording Engineer",
  summary:
    "Founder of Ypsilon — one of Moscow's most influential underground venues (2013–2019). Recording engineer, sound producer, and composer for film, advertising, and contemporary music projects. Frontman of AkmelikA.",
};

export const education = [
  {
    institution: "Gymnasium 1513",
    detail: "Extensive German language programme",
  },
  {
    institution: "Lomonosov Moscow State University",
    detail: "Magister in Law",
  },
];

export const highlights: Stat[] = [
  { value: "1000+", label: "Gigs curated" },
  { value: "4000+", label: "Parties produced" },
  { value: "2012–2018", label: "Ypsilon Moscow" },
  { value: "2018–", label: "Twilight Lounge Records" },
];

export const experience: TimelineEntry[] = [
  {
    period: "2011–2013",
    title: "Agranovskaya & Partners",
    role: "Junior, Corporate Law",
  },
  {
    period: "2013",
    title: "Young Creative Entrepreneurs Awards",
    role: "Nominee — British Council",
  },
  {
    period: "2012–2018",
    title: "Ypsilon Moscow Club / Venue",
    role: "Founder · CEO · Manager · HR · Technical Director · Sound Engineer · Bartender",
    description:
      "Ypsilon was one of the most influential underground venues in Moscow throughout 2013–2019, hosting iconic performances by artists from around the world and becoming a breeding ground for hundreds of local bands and performers.",
  },
  {
    period: "2020",
    title: "PEREDELKINO Dom Tvorchestva",
    role: "Audio technical contractor",
    href: "https://pro-peredelkino.org/residency2020",
  },
  {
    period: "2017",
    title: "IZI Assembly (Индустрия Звукового Искусства)",
    role: "Education assembly — speaker",
  },
  {
    period: "—",
    title: "STRELKA Institute & Bar",
    role: "Audio technical contractor",
    href: "https://barstrelka.com",
  },
  {
    period: "—",
    title: "Наука и Искусство",
    role: "Audio technical contractor",
  },
];

export const venueArtists = [
  "Kid Koala (US)",
  "Eric Copeland (US)",
  "Sun Araw (US)",
  "Pop.1280 (US)",
  "Turzi (FR)",
  "Barberos (UK)",
  "Damien Dubrovnik (DK)",
  "Shortparis",
  "USSSY",
  "Spasibo",
  "Mad Pilot",
  "Jars",
  "eeva",
  "Fanny Kaplan",
  "Lucidvox",
  "BROM",
  "musicians from Auktyon",
  "::vtol::",
  "papa_srapa",
  "Pharaoh",
  "HASKY",
  "Pasha-Technic",
  "GOSTzvuk",
  "Hyperboloid",
  "Структурность",
  "Waveform",
  "John's Kingdom",
  "and many more…",
];

export const labels: TimelineEntry[] = [
  { period: "2010", title: "Avant Records", role: "Label" },
  { period: "2011–2018", title: "YpsiloN Records", role: "Label" },
  { period: "2015–2017", title: "STEREO MANSION (Nikitskaya Records)", role: "Label" },
  { period: "2018–present", title: "Twilight Lounge Records", role: "Label" },
];

export const recordingCredits: Credit[] = [
  { title: "Spasibo", href: "https://spasiboband.bandcamp.com/album/v-somneniyah", note: "В сомнениях" },
  { title: "Lucidvox", href: "https://lucidvoxband.bandcamp.com/album/-", note: "—" },
  { title: "EEVA", href: "https://eeva.bandcamp.com/album/--2", note: "—" },
  { title: "MARZAHN", href: "https://marzahnmarzahn.bandcamp.com/album/1", note: "1" },
];

export const productionCredits: Credit[] = [
  { title: "EEVA", href: "https://eeva.bandcamp.com/album/7", note: "7" },
  { title: "Jars", href: "https://jars.bandcamp.com/album/jars", note: "Jars" },
  { title: "Glintshake", href: "https://glintshake.bandcamp.com/album/nano-banana", note: "Nano Banana" },
  { title: "1/2 Orchestra (HalfLive!)", note: "Live project" },
  { title: "USSSY", href: "https://usssy.bandcamp.com/album/naghma", note: "Naghma" },
  { title: "WET RED", note: "Into the Wild (2020)" },
  { title: "Hellspin", href: "https://hellspin.bandcamp.com/album/hellspin-ep", note: "EP" },
  { title: "Spasibo", href: "https://spasiboband.bandcamp.com/album/spasibo", note: "Spasibo" },
  {
    title: "Midnite Cobras",
    href: "https://www.youtube.com/watch?v=19x7QZzjLeg",
    note: "Boiler Room",
  },
];

export const compositionCredits: Credit[] = [
  {
    title: "Pavlov's Mammoth",
    note: "Documentary (2020) · Ataman Production",
    href: "https://www.kinopoisk.ru/film/4493182/",
  },
  {
    title: "Chess Pride",
    note: "Documentary (2022) · Ataman Production",
    href: "https://skfo-chess.ru/dokumentalnyj-film-chess-pride-nepomnyashhij-kramnik-grishhuk-amsterdam-levitov-chess-week-2019/",
  },
  {
    title: "Cardboard Media",
    note: "Commercial · Yandex",
    href: "https://www.adforum.com/creative-work/ad/player/34649236/cardboard-media/yandex-retail-marketplace",
  },
  {
    title: "The Man",
    note: "Film (2024) · Sarah Vinitz Foundation",
  },
  {
    title: "Abrau-Durso",
    note: "TV commercial (2020)",
    href: "https://www.youtube.com/watch?v=--ulsBHbkrc",
  },
];

export const bandReleases = [
  {
    year: 2013,
    title: "Twilight Lounge, Vol.1",
    status: "released",
    slug: "twilight-lounge-vol-1",
    href: "https://akmelika.bandcamp.com/album/twilight-lounge-vol-1",
  },
  { year: 2020, title: "AkmelikA", status: "released", slug: "akmelika-2020" },
  { year: 2024, title: "Rocks", status: "upcoming" },
  { year: 2024, title: "Singles + unreleased", status: "in-progress" },
];

export const awards: Credit[] = [
  {
    title: "BEATFILM FESTIVAL 2020",
    href: "https://beatfilmfestival.ru/movies/priklyuchenie",
    note: "Приключение",
  },
  { title: "Jägermeister Indie (Music) Awards 2017", note: "Nominee" },
];

export const otherWork: Credit[] = [
  { title: "Mississippi Landscapes", note: "Videography" },
  { title: "COSMOSCOW — EVDOKIMOV Gallery", note: "Art (2021)" },
];

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/studio", label: "Studio" },
  { href: "/composer", label: "Composer" },
  { href: "/music", label: "Music" },
  { href: "/contact", label: "Contact" },
];
