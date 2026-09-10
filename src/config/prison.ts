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
import primeAsset from "@/assets/primedehaney.png.asset.json";
import mrwrldAsset from "@/assets/upload-image-2.png.asset.json";
import samhamAsset from "@/assets/upload-image-3.png.asset.json";
import angelAsset from "@/assets/upload-image-4.png.asset.json";
import mr100Asset from "@/assets/upload-image-5.png.asset.json";
import noisebykjAsset from "@/assets/upload-image-6.png.asset.json";
import lbmmAsset from "@/assets/upload-image-7.png.asset.json";
import r3dAsset from "@/assets/upload-image-8.png.asset.json";
import tyroneAsset from "@/assets/upload-image-9.png.asset.json";
import kingsleyAsset from "@/assets/upload-image-10.png.asset.json";

export type SocialLink = { platform: string; url: string };

/**
 * Database clearance for a creator.
 * CLASSIFIED — in the database, not cleared for release (search returns classified).
 * CONFIRMED  — cleared: search runs the full scan and unseals the file.
 * REVEALED   — already unsealed publicly; search still runs the scan.
 */
export type Clearance = "CLASSIFIED" | "CONFIRMED" | "REVEALED";

export type RosterEntry = {
  /** file number, e.g. "001" */
  file: string;
  revealed: boolean;
  /** database clearance — drives the reveals search terminal */
  clearance?: Clearance;
  name?: string;
  /** extra spellings the search should recognise */
  aliases?: string[];
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
    name: "4DIDIT",
    aliases: ["AMIRIDIDIT", "AMIRI DID IT", "AMIRI"],
    platform: "TWITCH",
    role: "INMATE",
    image: amiriAsset.url,
    bio: "4DidIt, also known as AmirIDidIt, is a British content creator and online personality known for his entertaining personality, social media presence and creator-focused content. He has developed his own identity online through engaging with his audience, collaborating with other creators and sharing entertaining moments across social platforms.",
    socials: [
      { platform: "Instagram", url: "https://www.instagram.com/amirididit/" },
      { platform: "Twitch", url: "https://www.twitch.tv/4didit" },
      { platform: "TikTok", url: "https://www.tiktok.com/@amiri.didit" },
      { platform: "YouTube", url: "https://www.youtube.com/channel/UCifKJvSuQBh57QupAWnPjDQ" },
    ],
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "005",
    revealed: true,
    name: "PRIMEDEHANEY",
    role: "INMATE",
    image: primeAsset.url,
    bio: "primeDehaney is a British content creator and online personality who has built his presence around entertainment, personality-driven content and social media. Known for his distinctive online identity, primeDehaney has developed an audience interested in his personality and the content he creates across digital platforms. His growing presence has established him as a recognizable name within the UK creator scene.",
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "006",
    revealed: true,
    name: "MRWRLD",
    role: "INMATE",
    image: mrwrldAsset.url,
    bio: "MrWRLD is a British content creator and online personality known for his entertaining presence across social media. With a personality-led approach to content, MrWRLD has developed his own identity within the online creator space and continues to build an audience through his digital presence. His name and persona have become closely associated with the content and entertainment he shares online.",
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "007",
    revealed: true,
    name: "SAMHAM",
    role: "INMATE",
    image: samhamAsset.url,
    bio: "SamHam is a London-based British content creator and streamer known for his energetic personality, livestreams and entertainment-focused content. He has built a strong online presence through platforms such as Twitch, YouTube and TikTok, creating a mixture of gaming, reactions, conversations and live entertainment. SamHam is also known for his interactive relationship with his community, making his livestreams a major part of his creator identity.",
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "008",
    revealed: true,
    name: "ANGELMURRAY",
    role: "INMATE",
    image: angelAsset.url,
    bio: "AngelMurray is a British creator, streamer and music artist who has developed a presence across livestreaming, social media and music. Her content combines entertainment and personality with her creative work as an artist, allowing her to connect with audiences across multiple platforms. AngelMurray has also established a dedicated online community around her content, while continuing to develop her presence as both a creator and musician.",
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "009",
    revealed: true,
    name: "MR£100",
    aliases: ["MR100", "MR 100"],
    role: "INMATE",
    image: mr100Asset.url,
    bio: "MR£100 is a British online creator and personality known for his distinctive identity across social media and digital entertainment. His presence is centred around personality-driven content and connecting with an online audience, helping him establish his own place within the creator space. Recognisable by the MR£100 name, he continues to develop his digital presence and audience across social platforms.",
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "010",
    revealed: true,
    name: "NOISEBYKJ",
    role: "INMATE",
    image: noisebykjAsset.url,
    bio: "NoiseByKj is a British content creator and online personality who has developed his presence through social media and digital entertainment. His content is centred around his personality, interactions and ability to engage with an online audience, helping him establish a recognisable identity within the creator space. As his digital presence continues to grow, NoiseByKj is building his own name and community across social platforms.",
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "011",
    revealed: true,
    name: "LBMM",
    role: "INMATE",
    image: lbmmAsset.url,
    bio: "LBMM is a British online creator and personality who has developed his presence through social media and digital entertainment. His content is driven by personality and audience interaction, allowing him to create an identity that stands out within the wider creator space. LBMM continues to build his online presence while developing his own style and connection with his audience.",
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "012",
    revealed: true,
    name: "R3DEMPTIONTJ",
    role: "INMATE",
    image: r3dAsset.url,
    bio: "R3demptionTJ is a British Twitch streamer, content creator and gamer from London who has built a strong presence through livestreaming and social media. His content spans gaming, reactions and Just Chatting, with his personality and interaction with viewers playing a major part in his streams. He has developed a dedicated online community known as the R3D community and continues to grow his presence across digital platforms.",
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "013",
    revealed: true,
    name: "TYRONE1MC",
    role: "INMATE",
    image: tyroneAsset.url,
    bio: "Tyrone1mc is a British streamer, host, content creator and musician who has built a significant presence across the UK entertainment and online creator scene. Alongside livestreaming and content creation, he has developed a career in music and is part of the dance music group FooR. Known for his energetic personality and entertainment-focused presence, Tyrone1mc has built a large audience across social platforms.",
    status: "CONFIRMED — INSIDE",
  },
  {
    file: "014",
    revealed: true,
    name: "KINGSLEYCMA",
    role: "INMATE",
    image: kingsleyAsset.url,
    bio: "KingsleyCMA is a British online creator and streamer known for his personality-driven presence and entertainment-focused content. His livestreams combine conversations, audience interaction and creative moments, with music and rap sessions also featuring within his content. Through his consistent online presence, KingsleyCMA has developed his own identity and community across the streaming space.",
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
    body: "The first names are out. XKeonte, SebzOnAir and 4DidIt are confirmed inside. Transmission 001 is live. Every other file remains sealed until searched.",
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
 * WHAT'S NEXT — nothing cleared for release yet.
 * ------------------------------------------------------------------- */
export type UpcomingItem = { id: string; label: string; when: string; kind: string };

export const upcoming: UpcomingItem[] = [];

/** ---------------------------------------------------------------------
 * SOCIALS — only real, official accounts. Empty until confirmed.
 * ------------------------------------------------------------------- */
export const officialSocials: SocialLink[] = [];
