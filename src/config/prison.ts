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
import xkeonteAsset from "@/assets/xkeonte-portrait.jpg.asset.json";
import sebzAsset from "@/assets/sebzonair.jpg.asset.json";
import amiriAsset from "@/assets/amirididit.png.asset.json";
import cloutAsset from "@/assets/mrcloutglasses.jpg.asset.json";

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
    platform: "TWITCH",
    role: "INMATE",
    image: xkeonteAsset.url,
    bio: "British content creator and online personality from Birmingham, England. Known for entertaining, creator-led content and his involvement in the UK online creator scene.",
    socials: [
      { platform: "Twitch", url: "https://www.twitch.tv/xkeonte" },
      { platform: "Discord", url: "https://discord.com/invite/MddrwwJpf5" },
      { platform: "Instagram", url: "https://www.instagram.com/reel/DcOsXiWN6Ex/" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "002",
    revealed: true,
    name: "SEBZONAIR",
    platform: "TWITCH",
    role: "INMATE",
    image: sebzAsset.url,
    bio: "SebzOnAir is a British content creator and streamer known for his entertaining personality, livestreams and engaging online presence. His content centres around entertainment, interactions with his audience and creating memorable moments for his community. With a personality-driven approach to content, SebzOnAir has developed his own identity online through livestreaming, social media and collaborations with other creators.",
    socials: [
      { platform: "Twitch", url: "https://www.twitch.tv/sebzonair" },
      { platform: "YouTube", url: "https://www.youtube.com/@SebzOnAir" },
      { platform: "TikTok", url: "https://www.tiktok.com/@sebzonairlive" },
      { platform: "Instagram", url: "https://www.instagram.com/sebzonair/" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "003",
    revealed: true,
    name: "AMIRIDIDIT",
    platform: "TWITCH",
    role: "INMATE",
    image: amiriAsset.url,
    bio: "AmirIDidIt, also known as 4DidIt, is a British content creator and online personality known for his entertaining personality, social media presence and creator-focused content. He has developed his own identity online through engaging with his audience, collaborating with other creators and sharing entertaining moments across social platforms.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/amirididit/" },
      { platform: "Twitch", url: "https://www.twitch.tv/4didit" },
      { platform: "TikTok", url: "https://www.tiktok.com/@amiri.didit" },
      { platform: "YouTube", url: "https://www.youtube.com/channel/UCifKJvSuQBh57QupAWnPjDQ" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "004",
    revealed: true,
    name: "MRCLOUTGLASSES",
    platform: "YOUTUBE",
    role: "INMATE",
    image: cloutAsset.url,
    bio: "MrCloutGlasses is a British content creator and online personality known for his distinctive online persona, entertaining content and presence across social media. He has built his identity around personality-driven entertainment, interacting with audiences and creating memorable moments online. Known by the name MrCloutGlasses or Andre, he continues to grow his presence within the online creator scene through social content, collaborations and community engagement.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/mrcloutglassess/" },
      { platform: "YouTube", url: "https://www.youtube.com/c/MrCloutGlasses" },
      { platform: "TikTok", url: "https://www.tiktok.com/@mrcloutglassess" },
    ],
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
    title: "FIRST FILES DECLASSIFIED",
    body: "The first name is out. XKeonte, SebzOnAir, AmirIDidIt and MrCloutGlasses are confirmed inside. Transmission 001 is live.",
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
