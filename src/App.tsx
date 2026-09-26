import {
  FormEvent,
  ReactNode,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

const photos = {
  hero: "/photos/Puji.jpeg",
  portrait: "/photos/syauqi-profile.jpeg",
  garden: "/photos/Puji.jpeg",
  close: "/photos/syauqi-profile.jpeg",
  ceremony: "/photos/upscalemedia-transformed__1_-1.jpeg",
  outdoor: "/photos/WhatsApp_Image_2026-09-26_at_18.15.00__1_.jpeg", // pastikan nama file ini di-rename agar lebih pendek & mudah
  waterfall: "/photos/upscalemedia-transformed__2_.jpeg",
};
type IconName =
  | "arrow"
  | "calendar"
  | "clock"
  | "copy"
  | "gift"
  | "instagram"
  | "location"
  | "mail"
  | "music"
  | "pause"
  | "send"
  | "video";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="m6 9 6 6 6-6" />,
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
    gift: (
      <>
        <rect x="3" y="9" width="18" height="12" rx="1" />
        <path d="M12 9v12M3 13h18M7.5 9C4 9 4 4 7 4c2 0 5 5 5 5M16.5 9C20 9 20 4 17 4c-2 0-5 5-5 5" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    music: (
      <>
        <path d="M9 18V5l10-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="16" cy="16" r="3" />
      </>
    ),
    pause: (
      <>
        <path d="M9 7v10M15 7v10" />
      </>
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="m16 10 5-3v10l-5-3Z" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function BotanicalCorner({
  flip = false,
  gateSide,
}: {
  flip?: boolean;
  gateSide?: "left" | "right";
}) {
  const goldGradientId = useId().replace(/:/g, "");
  return (
    <svg
      className={`botanical ${flip ? "botanical-flip" : ""} ${gateSide ? `gate-foliage-${gateSide}` : ""}`}
      viewBox="0 0 180 210"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={goldGradientId} x1="0" y1="0" x2="1" y2="1">
          <stop className="gold-gradient-bright" offset="0%" />
          <stop className="gold-gradient-mid" offset="48%" />
          <stop className="gold-gradient-dark" offset="100%" />
        </linearGradient>
      </defs>
      <path className="stem" d="M8 206C45 163 46 104 88 69c20-17 42-19 70-52" />
      <path
        className="stem"
        d="M50 154c22-12 50-11 72-3M68 112c-4-24 1-42 16-58M94 67c23 1 40-9 54-25"
      />
      <g className="leaves" fill={`url(#${goldGradientId})`}>
        <path d="M28 176c2-20 13-31 34-33-2 19-13 31-34 33Z" />
        <path d="M48 148c-17-5-27-17-27-35 18 4 28 16 27 35Z" />
        <path d="M66 120c17-15 33-17 50-7-14 16-31 18-50 7Z" />
        <path d="M72 96C58 82 55 67 64 51c16 12 19 28 8 45Z" />
        <path d="M97 64c4-17 15-26 33-27-3 17-14 26-33 27Z" />
      </g>
      <g className="flowers" fill={`url(#${goldGradientId})`}>
        <circle cx="122" cy="151" r="9" />
        <circle cx="111" cy="147" r="8" />
        <circle cx="116" cy="137" r="8" />
        <circle cx="128" cy="139" r="8" />
        <circle cx="120" cy="145" r="4" />
        <circle cx="157" cy="18" r="10" />
        <circle cx="147" cy="25" r="9" />
        <circle cx="158" cy="31" r="9" />
        <circle cx="167" cy="25" r="9" />
        <circle cx="157" cy="25" r="4" />
      </g>
    </svg>
  );
}

function Peacock() {
  return (
    <svg className="peacock" viewBox="0 0 180 220" aria-hidden="true">
      <g className="tail">
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={i}
            cx={90 + (i - 2) * 26}
            cy={90 + Math.abs(i - 2) * 13}
            rx="25"
            ry="68"
            transform={`rotate(${(i - 2) * 17} ${90 + (i - 2) * 26} 90)`}
          />
        ))}
      </g>
      <g className="eyes">
        {[38, 64, 90, 116, 142].map((x, i) => (
          <circle key={x} cx={x} cy={58 + Math.abs(i - 2) * 12} r="6" />
        ))}
      </g>
      <path
        className="body"
        d="M82 178c-9-35-2-63 15-82 11-12 18-25 16-39 19 13 19 34 3 48 19 8 26 31 14 57-10 22-29 35-48 16Z"
      />
      <path
        className="neck"
        d="M108 63c-8-8-7-19 3-25 9 3 14 10 13 20-4-4-9-5-16-2"
      />
      <circle className="eye" cx="116" cy="47" r="2.5" />
      <path className="crest" d="m113 38-4-15m7 15 3-16m-1 17 11-12" />
    </svg>
  );
}

function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div className="section-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{children}</h2>
      <span className="title-ornament">
        <i />
        <b>✦</b>
        <i />
      </span>
    </div>
  );
}

function Action({
  children,
  icon,
  href,
  onClick,
  variant = "primary",
  type = "button",
}: {
  children: ReactNode;
  icon?: IconName;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "light";
  type?: "button" | "submit";
}) {
  const className = `action action-${variant}`;
  if (href)
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {icon && <Icon name={icon} />}
        {children}
      </a>
    );
  return (
    <button className={className} onClick={onClick} type={type}>
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
}

function Countdown() {
  const wedding = useMemo(
    () => new Date("2026-10-03T08:00:00+07:00").getTime(),
    [],
  );
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const diff = Math.max(0, wedding - now);
  const values = [
    ["Hari", Math.floor(diff / 86400000)],
    ["Jam", Math.floor((diff / 3600000) % 24)],
    ["Menit", Math.floor((diff / 60000) % 60)],
    ["Detik", Math.floor((diff / 1000) % 60)],
  ];
  return (
    <div className="countdown">
      {values.map(([label, value]) => (
        <div className="time" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function EventCard({
  title,
  date,
  time,
  children,
}: {
  title: string;
  date: string;
  time?: string;
  children: ReactNode;
}) {
  return (
    <article className="event-card">
      <div className="card-flourish">❧</div>
      <h3>{title}</h3>
      <div className="event-detail">
        <Icon name="calendar" />
        <p>{date}</p>
      </div>
      {time && (
        <div className="event-detail">
          <Icon name="clock" />
          <p>{time}</p>
        </div>
      )}
      <div className="event-detail">
        <Icon name="location" />
        <p>{children}</p>
      </div>
      <Action href="https://maps.google.com" icon="location" variant="primary">
        Lihat Lokasi
      </Action>
    </article>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [music, setMusic] = useState(false);
  const [copied, setCopied] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Alya & Fikri",
      text: "MasyaAllah, semoga menjadi keluarga sakinah, mawaddah, warahmah.",
      attendance: "Hadir",
    },
  ]);
  const musicPlayer = useRef<HTMLAudioElement>(null);
  const guest =
    new URLSearchParams(window.location.search).get("to") ||
    "Bapak/Ibu/Saudara/i";

  const openInvitation = () => {
    setOpened(true);
    window.setTimeout(
      () =>
        document
          .querySelector("#opening")
          ?.scrollIntoView({ behavior: "smooth" }),
      950,
    );
  };
  const toggleMusic = () => {
    setMusic((current) => {
      if (current) {
        musicPlayer.current?.pause();
      } else {
        musicPlayer.current?.play();
      }
      return !current;
    });
  };
  const copy = (value: string) => {
    navigator.clipboard?.writeText(value);
    setCopied(value);
    window.setTimeout(() => setCopied(""), 1600);
  };
  const submitWish = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setMessages((items) => [
      {
        name: String(form.get("name")),
        text: String(form.get("wish")),
        attendance: String(form.get("attendance")),
      },
      ...items,
    ]);
    event.currentTarget.reset();
  };

  return (
    <main className="page-shell">
      <audio
        ref={musicPlayer}
        className="music-source"
        src="/audio/banda-neira-sampai-jadi-debu-peaceful-piano_x2cC3R1m.mp3"
        loop
      />
      <button
        className={`music-fab ${music ? "playing" : ""}`}
        onClick={toggleMusic}
        aria-label={
          music
            ? "Jeda Sampai Jadi Debu"
            : "Putar Sampai Jadi Debu oleh Banda Neira"
        }
      >
        <span className="vinyl">
          <Icon name={music ? "pause" : "music"} size={17} />
        </span>
      </button>

      <section className={`cover ${opened ? "cover-opened" : ""}`}>
        <img src={photos.waterfall} alt="" className="cover-bg" />
        <div className="cover-shade" />
        <div className="gate gate-left">
          <span />
          <span />
          <span />
        </div>
        <div className="gate gate-right">
          <span />
          <span />
          <span />
        </div>
        <BotanicalCorner gateSide="left" />
        <BotanicalCorner flip gateSide="right" />
        <div className="cover-content">
          <p className="eyebrow cover-kicker">The Wedding of</p>
          <h1>
            <span>Puji</span>
            <small>&</small>
            <span>Syauqi</span>
          </h1>
          <p className="cover-intro">
            Maha suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan.
          </p>
          <div className="cover-date">
            <i />
            03 · 10 · 2026
            <i />
          </div>
          <div className="guest">
            <p>Kepada Yth.</p>
            <strong>{guest}</strong>
            <small>Mohon maaf apabila ada kesalahan penulisan nama/gelar</small>
          </div>
          <Action onClick={openInvitation} icon="mail" variant="primary">
            Buka Undangan
          </Action>
        </div>
        <span className="scroll-note">
          Geser ke bawah <Icon name="arrow" size={15} />
        </span>
      </section>

      <section className="opening section-pad" id="opening">
        <BotanicalCorner flip />
        <div className="arch-window">
          <img
            src={photos.hero}
            alt="Slamet dan Sauqi dalam busana tradisional bernuansa marun"
          />
          <span className="arch-line" />
        </div>
        <div className="quote-mark">“</div>
        <blockquote>
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram
          kepadanya.”
        </blockquote>
        <p className="verse">Q.S. Ar-Rum · 21</p>
      </section>

      <section className="couple section-pad">
        <SectionTitle eyebrow="Assalamu'alaikum Warahmatullahi Wabarakatuh">
          Kedua Mempelai
        </SectionTitle>
        <p className="intro">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
          menyelenggarakan pernikahan putra-putri kami.
        </p>
        <div className="person">
          <div className="portrait">
            <img
              src={photos.portrait}
              alt="Mempelai pria dengan busana tradisional"
            />
          </div>
          <p className="script-name">Puji</p>
          <h3>Slamet Pujianto</h3>
          <p>
            Putra kedua dari
            <br />
            <strong>Bpk. Rumat & Ibu Miskanah</strong>
          </p>
          <a
            className="social"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="instagram" size={15} /> Instagram
          </a>
        </div>
        <div className="ampersand">&</div>
        <div className="person">
          <div className="portrait portrait-lower">
            <img
              src={photos.close}
              alt="Mempelai wanita dengan busana tradisional"
            />
          </div>
          <p className="script-name">Syauqi</p>
          <h3>Syauqi Indah Wahidiyawati</h3>
          <p>
            Putri pertama dari
            <br />
            <strong>Bpk. Purwanto (Alm) & Ibu Muslimah</strong>
          </p>
          <a
            className="social"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="instagram" size={15} /> Instagram
          </a>
        </div>
      </section>

      <section className="save-date section-pad">
        <Peacock />
        <div className="save-content">
          <p className="script-label">Save the Date</p>
          <h2>Sabtu, 03 Oktober 2026</h2>
          <p>
            Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir.
          </p>
          <Countdown />
          <Action
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Slamet+%26+Sauqi&dates=20261003T010000Z/20261003T080000Z"
            icon="calendar"
            variant="light"
          >
            Simpan Tanggal
          </Action>
        </div>
      </section>

      <section className="events section-pad">
        <SectionTitle eyebrow="Rangkaian Acara">Wedding Day</SectionTitle>
        <EventCard title="Akad Nikah" date="03 Oktober 2026" time="08:00 Wib">
          Jl. Sidomulyo Ngadilangkuung
          <br />
          RT. 01 RW. 03 Kepanjen
        </EventCard>
        <EventCard title="Resepsi Pernikahan" date="02 & 03 Oktober 2026">
          Jl. Jambu Jatisari
          <br />
          RT. 01 RW. 12 Ngajum
        </EventCard>
      </section>

      <section className="gift section-pad">
        <SectionTitle eyebrow="Tanda Kasih">Wedding Gift</SectionTitle>
        <p className="intro">
          Doa restu Anda adalah hadiah terindah. Namun jika ingin memberi tanda
          kasih, dapat melalui:
        </p>
        <div className="bank-card">
          <div className="bank-head">
            <span className="bank-logo">BCA</span>
            <Icon name="gift" size={22} />
          </div>
          <p>Nomor Rekening</p>
          <strong>123 085 2185</strong>
          <small>a.n. Sauqi Indah Wahidiyawati</small>
          <Action
            onClick={() => copy("12345678901")}
            icon="copy"
            variant="outline"
          >
            {copied === "12345678901" ? "Tersalin" : "Salin Nomor"}
          </Action>
        </div>
        <div className="address-card">
          <Icon name="gift" size={28} />
          <div>
            <h3>Kirim Hadiah</h3>
            <small>Penerima: Syauqi Indah Wahidiyah</small>
            <p>Jl. Sidomulyo Ngadilangkuung RT. 01 RW. 03 Kepanjen</p>
          </div>
        </div>
      </section>

      <section className="rsvp section-pad">
        <SectionTitle eyebrow="Konfirmasi Kehadiran">
          RSVP & Ucapan
        </SectionTitle>
        <p className="rsvp-opening">
          Dengan memohon limpahan Rahmat dan Ridho Allah SWT, kami bermaksud
          menyelenggarakan resepsi pernikahan putra-putri kami yang akan
          dilaksanakan pada tanggal tersebut.
        </p>
        <form onSubmit={submitWish}>
          <label>
            Nama
            <input name="name" placeholder="Nama lengkap" required />
          </label>
          <label>
            Ucapan
            <textarea
              name="wish"
              placeholder="Tuliskan doa dan ucapan terbaik"
              rows={4}
              required
            />
          </label>
          <fieldset>
            <legend>Konfirmasi Kehadiran</legend>
            <label className="radio">
              <input
                type="radio"
                name="attendance"
                value="Hadir"
                defaultChecked
              />{" "}
              Hadir
            </label>
            <label className="radio">
              <input type="radio" name="attendance" value="Tidak Hadir" /> Tidak
              Hadir
            </label>
          </fieldset>
          <Action type="submit" icon="send">
            Kirim Ucapan
          </Action>
        </form>
        <div className="wishes">
          <p className="wish-title">{messages.length} Ucapan</p>
          {messages.map((message, i) => (
            <article key={`${message.name}-${i}`}>
              <div className="avatar">{message.name.slice(0, 1)}</div>
              <div>
                <p>
                  <strong>{message.name}</strong>
                  <span>{message.attendance}</span>
                </p>
                <blockquote>{message.text}</blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <img src={photos.outdoor} alt="Slamet dan Sauqi berdiri bersama" />
        <div className="closing-shade" />
        <BotanicalCorner />
        <div className="closing-content">
          <p>
            Kami ungkapkan terima kasih dari hati yang tulus atas kehadiran dan
            doa restu Bapak/Ibu/Saudara/i.
          </p>
          <p className="script-label">Terima Kasih</p>
          <small>Kami yang berbahagia,</small>
          <h2>
            Puji<span className="fg-inline-italic">&</span>Syauqi
          </h2>
          <div className="monogram">
            P<span>&</span>S
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
