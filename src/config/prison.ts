/**
 * PRISON STREAM — single source of truth.
 *
 * Everything the project has not officially announced lives here as a
 * placeholder. Update this file as information is revealed; the whole site
 * re-renders around it. No component hard-codes an assumption.
 */

/** ---------------------------------------------------------------------
 * TERMINOLOGY
 * What the participants are officially called is NOT confirmed.
 * Change these strings once it is; they are used site-wide.
 * ------------------------------------------------------------------- */
export const terms = {
  /** singular, neutral */
  person: "Creator",
  /** plural, neutral */
  people: "Creators",
  /** collective noun for the group */
  group: "The Roster",
  /** what a profile page is called */
  profile: "File",
  /** teased, unconfirmed options — used by the terminology easter egg */
  candidates: ["CREATORS?", "GUESTS?", "INMATES?", "PARTICIPANTS?", "RESIDENTS?"],
  candidatesAnswer: "WE'LL LET YOU KNOW.",
} as const;

/** ---------------------------------------------------------------------
 * LAUNCH
 * When the exact date is announced: set `exactDateAnnounced: true` and
 * fill `targetIso`. The Lockdown section swaps the placeholder for a real
 * countdown automatically. Do NOT guess a date.
 * ------------------------------------------------------------------- */
export const launch = {
  window: "AUTUMN",
  year: "2026",
  exactDateAnnounced: false,
  /** e.g. "2026-10-31T20:00:00Z" — only once officially confirmed */
  targetIso: null as string | null,
  /** shown while the date is unknown */
  dateLabel: "NOT YET REVEALED",
  timeLabel: "CLASSIFIED",
  status: "AWAITING AUTHORIZATION",
} as const;

/** Atmospheric readouts. Visual only — never fake statistics. */
export const systemReadout = [
  { label: "SYSTEM STATUS", value: "ACTIVE", tone: "ok" as const },
  { label: "TRANSMISSIONS", value: "STANDBY", tone: "warn" as const },
  { label: "ROSTER", value: "CLASSIFIED", tone: "muted" as const },
  { label: "NEXT REVEAL", value: "UNKNOWN", tone: "muted" as const },
  { label: "LAUNCH", value: "AUTUMN 2026", tone: "ok" as const },
  { label: "SECURITY LEVEL", value: "[CLASSIFIED]", tone: "muted" as const },
];

export const projectFile = [
  { label: "PROJECT", value: "PRISON STREAM" },
  { label: "STATUS", value: "ACTIVE" },
  { label: "LAUNCH", value: "AUTUMN 2026" },
  { label: "DATE", value: "CLASSIFIED" },
  { label: "PARTICIPANTS", value: "CLASSIFIED" },
  { label: "LOCATION", value: "CLASSIFIED" },
  { label: "FORMAT", value: "CLASSIFIED" },
];

/** ---------------------------------------------------------------------
 * ROSTER
 * Nobody has been officially revealed. Add entries as announcements happen;
 * `placeholderFiles` only controls how many empty files are displayed and
 * does NOT imply a participant count.
 * ------------------------------------------------------------------- */
export type SocialLink = { platform: string; url: string };

export type RosterEntry = {
  /** file number, e.g. "001" */
  file: string;
  revealed: boolean;
  name?: string;
  username?: string;
  platform?: string;
  bio?: string;
  image?: string;
  socials?: SocialLink[];
  streamUrl?: string;
  announcedOn?: string;
  status?: string;
  /** position within the organisation, if revealed */
  role?: string;
};

export const placeholderFiles = 6;

export const roster: RosterEntry[] = [
  {
    file: "001",
    revealed: true,
    name: "XKEONTE",
    platform: "INSTAGRAM",
    role: "HEAD OF THE ORGANISATION — STILL AN INMATE",
    bio: "British content creator and online personality from Birmingham, England. Known for entertaining, creator-led content and his involvement in the UK online creator scene. He runs this organisation — from the inside.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/reel/DcOsXiWN6Ex/" },
    ],
    announcedOn: "2026",
    status: "CONFIRMED — INSIDE",
  },
];

/** ---------------------------------------------------------------------
 * LIVE TRANSMISSIONS — empty until streams actually exist.
 * ------------------------------------------------------------------- */
export type Stream = {
  id: string;
  creator: string;
  platform: string;
  title: string;
  viewers?: number;
  url: string;
};

export const liveStreams: Stream[] = [];

/** ---------------------------------------------------------------------
 * TRAILER — no trailer released yet.
 * ------------------------------------------------------------------- */
export const trailer = {
  released: true,
  label: "TRANSMISSION 001",
  /** Instagram reel — first transmission */
  url: "https://www.instagram.com/reel/DcOsXiWN6Ex/",
  runtime: "CLASSIFIED",
};

/** ---------------------------------------------------------------------
 * BULLETIN — official announcements only.
 * ------------------------------------------------------------------- */
export type Bulletin = {
  id: string;
  code: string;
  date: string;
  title: string;
  body: string;
  status: "VERIFIED" | "PENDING";
};

export const bulletins: Bulletin[] = [
  {
    id: "b-001",
    code: "BULLETIN 001",
    date: "CLASSIFIED",
    title: "THE FACILITY IS ONLINE",
    body: "Prison Stream exists. The launch window is Autumn 2026. Everything else remains behind locked doors.",
    status: "VERIFIED",
  },
  {
    id: "b-002",
    code: "BULLETIN 002",
    date: "2026",
    title: "FILE 001 DECLASSIFIED: XKEONTE",
    body: "The first name is out. XKeonte — British creator from Birmingham — is confirmed inside, and he is the head of this organisation. He is still an inmate. Transmission 001 is live.",
    status: "VERIFIED",
  },
  {
    id: "b-003",
    code: "BULLETIN 003",
    date: "PENDING",
    title: "[REDACTED]",
    body: "[COMING SOON]",
    status: "PENDING",
  },
];

/** ---------------------------------------------------------------------
 * THE VOTE — flexible poll system. Add polls when there is something to ask.
 * ------------------------------------------------------------------- */
export type Poll = {
  id: string;
  question: string;
  options: { id: string; label: string }[];
  closes: string;
  status: "OPEN" | "CLOSED" | "PENDING";
};

export const polls: Poll[] = [
  {
    id: "p-001",
    question: "WHAT SHOULD THE PEOPLE INSIDE BE CALLED?",
    options: [
      { id: "o1", label: "CREATORS" },
      { id: "o2", label: "PARTICIPANTS" },
      { id: "o3", label: "INMATES" },
      { id: "o4", label: "WE SHOULDN'T KNOW YET" },
    ],
    closes: "CLOSING TIME: CLASSIFIED",
    status: "OPEN",
  },
];

/** ---------------------------------------------------------------------
 * WHAT'S NEXT — nothing cleared for release yet.
 * ------------------------------------------------------------------- */
export type UpcomingItem = { id: string; label: string; when: string; kind: string };

export const upcoming: UpcomingItem[] = [];

/** ---------------------------------------------------------------------
 * SOCIALS — only real, official accounts. Empty until confirmed.
 * ------------------------------------------------------------------- */
export const officialSocials: SocialLink[] = [];
