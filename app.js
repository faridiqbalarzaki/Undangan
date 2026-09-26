const iconPaths = {
  arrow: '<path d="m6 9 6 6 6-6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  copy: '<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  gift: '<rect x="3" y="9" width="18" height="12" rx="1"/><path d="M12 9v12M3 13h18M7.5 9C4 9 4 4 7 4c2 0 5 5 5 5M16.5 9C20 9 20 4 17 4c-2 0-5 5-5 5"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
  location: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  music: '<path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
  musicOff: '<path d="M9 15.5V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/><path d="m3 3 18 18"/>',
  pause: '<path d="M9 7v10M15 7v10"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
};

function renderIcon(svg, name = svg.dataset.icon) {
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.7");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  svg.innerHTML = iconPaths[name] || "";
}

document.querySelectorAll("svg[data-icon]").forEach((svg) => renderIcon(svg));

document.querySelectorAll("[data-botanical]").forEach((host, index) => {
  const gradientId = `botanical-gold-${index}`;
  const flip = host.dataset.flip === "true" ? " botanical-flip" : "";
  const extraClass = host.className ? ` ${host.className}` : "";
  host.outerHTML = `
    <svg class="botanical line-art-leaf${flip}${extraClass}" viewBox="0 0 100 150" aria-hidden="true">
      <defs>
        <linearGradient id="${gradientId}" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#dfc787" offset="0%"></stop>
          <stop stop-color="#b38a3e" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path d="M10 140 C 20 80, 50 40, 90 10" fill="none" stroke="url(#${gradientId})" stroke-width="2" stroke-linecap="round"></path>
      <path d="M25 110 C 35 100, 45 95, 55 90" fill="none" stroke="url(#${gradientId})" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M40 80 C 55 70, 65 60, 75 50" fill="none" stroke="url(#${gradientId})" stroke-width="1.5" stroke-linecap="round"></path>
      <path d="M60 45 C 70 35, 75 25, 80 15" fill="none" stroke="url(#${gradientId})" stroke-width="1.5" stroke-linecap="round"></path>
      
      <!-- Leaflets -->
      <path d="M55 90 C 65 95, 70 105, 60 115 C 50 105, 45 95, 55 90 Z" fill="none" stroke="url(#${gradientId})" stroke-width="1"></path>
      <path d="M75 50 C 85 55, 90 65, 80 75 C 70 65, 65 55, 75 50 Z" fill="none" stroke="url(#${gradientId})" stroke-width="1"></path>
      <path d="M25 110 C 15 105, 10 95, 20 85 C 30 95, 35 105, 25 110 Z" fill="none" stroke="url(#${gradientId})" stroke-width="1"></path>
      <path d="M40 80 C 30 75, 25 65, 35 55 C 45 65, 50 75, 40 80 Z" fill="none" stroke="url(#${gradientId})" stroke-width="1"></path>
      <path d="M60 45 C 50 40, 45 30, 55 20 C 65 30, 70 40, 60 45 Z" fill="none" stroke="url(#${gradientId})" stroke-width="1"></path>
    </svg>`;
});

document.querySelector("#peacock-host").outerHTML = `
  <svg class="peacock" viewBox="0 0 180 220" aria-hidden="true">
    <g class="tail">
      <ellipse cx="38" cy="116" rx="25" ry="68" transform="rotate(-34 38 116)"></ellipse>
      <ellipse cx="64" cy="103" rx="25" ry="68" transform="rotate(-17 64 103)"></ellipse>
      <ellipse cx="90" cy="90" rx="25" ry="68"></ellipse>
      <ellipse cx="116" cy="103" rx="25" ry="68" transform="rotate(17 116 103)"></ellipse>
      <ellipse cx="142" cy="116" rx="25" ry="68" transform="rotate(34 142 116)"></ellipse>
    </g>
    <g class="eyes"><circle cx="38" cy="82" r="6"></circle><circle cx="64" cy="70" r="6"></circle><circle cx="90" cy="58" r="6"></circle><circle cx="116" cy="70" r="6"></circle><circle cx="142" cy="82" r="6"></circle></g>
    <path class="body" d="M82 178c-9-35-2-63 15-82 11-12 18-25 16-39 19 13 19 34 3 48 19 8 26 31 14 57-10 22-29 35-48 16Z"></path>
    <path class="neck" d="M108 63c-8-8-7-19 3-25 9 3 14 10 13 20-4-4-9-5-16-2"></path>
    <circle class="eye" cx="116" cy="47" r="2.5"></circle>
    <path class="crest" d="m113 38-4-15m7 15 3-16m-1 17 11-12"></path>
  </svg>`;

const guest = new URLSearchParams(window.location.search).get("to");
if (guest) document.querySelector("#guest-name").textContent = guest;

const cover = document.querySelector("#cover");
document.querySelector("#open-invitation").addEventListener("click", () => {
  setMusicPlaying(true);
  cover.classList.add("cover-opened");
  window.setTimeout(() => {
    document.querySelector("#opening").scrollIntoView({ behavior: "smooth" });
  }, 1200);
});

const musicButton = document.querySelector("#music-button");
const musicPlayer = document.querySelector("#music-player");
let musicDesired = false;

async function setMusicPlaying(playing) {
  musicDesired = playing;
  if (playing) {
    try {
      await musicPlayer.play();
    } catch (e) {
      console.error("Music play failed:", e);
      musicDesired = false;
    }
  } else {
    musicPlayer.pause();
  }
  playing = musicDesired;
  musicButton.classList.toggle("playing", playing);
  musicButton.setAttribute("aria-label", playing ? "Jeda Sampai Jadi Debu" : "Putar Sampai Jadi Debu oleh Banda Neira");
  const icon = musicButton.querySelector("svg");
  icon.dataset.icon = playing ? "music" : "musicOff";
  renderIcon(icon);
}

musicButton.addEventListener("click", () => {
  setMusicPlaying(!musicDesired);
});

const weddingTime = new Date("2026-10-03T08:00:00+07:00").getTime();
function updateCountdown() {
  const difference = Math.max(0, weddingTime - Date.now());
  const values = {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
  Object.entries(values).forEach(([key, value]) => {
    const el = document.querySelector(`[data-count="${key}"]`);
    const strValue = String(value).padStart(2, "0");
    if (el.textContent !== strValue) {
      el.textContent = strValue;
      el.classList.remove("pulse-anim");
      void el.offsetWidth;
      el.classList.add("pulse-anim");
    }
  });
}
updateCountdown();
window.setInterval(updateCountdown, 1000);

document.querySelectorAll(".copy-account").forEach((copyButton) => {
  copyButton.addEventListener("click", async () => {
    await navigator.clipboard?.writeText(copyButton.dataset.copy);
    const label = copyButton.querySelector("span");
    label.textContent = "Tersalin";
    window.setTimeout(() => {
      label.textContent = "Salin Nomor";
    }, 1600);
  });
});

const rsvpForm = document.querySelector("#rsvp-form");
const rsvpSubmit = document.querySelector("#rsvp-submit");
const rsvpSubmitLabel = rsvpSubmit.querySelector("span");
const rsvpStatus = document.querySelector("#rsvp-status");
const wishFeed = document.querySelector("#wish-feed");
const wishCount = document.querySelector("#wish-count");
const sheetDbEndpoint = "https://sheetdb.io/api/v1/sx05v80ir8wb3";
const sheetDbTimeout = 15000;
const sheetDbColumns = ["timestamp", "nama", "ucapan", "kehadiran"];
let totalWishes = 0;

function setRsvpStatus(message, type = "") {
  rsvpStatus.textContent = message;
  rsvpStatus.className = `rsvp-status${type ? ` is-${type}` : ""}`;
}

function createWishElement({ nama, ucapan, kehadiran }) {
  const article = document.createElement("article");
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = String(nama || "?").trim().slice(0, 1).toUpperCase();
  const content = document.createElement("div");
  const meta = document.createElement("p");
  const author = document.createElement("strong");
  author.textContent = nama || "Tamu";
  const badge = document.createElement("span");
  badge.textContent = kehadiran || "Belum dikonfirmasi";
  const message = document.createElement("blockquote");
  message.textContent = ucapan || "";
  meta.append(author, badge);
  content.append(meta, message);
  article.append(avatar, content);
  return article;
}

function renderWishes(records) {
  wishFeed.replaceChildren();
  const validRecords = records.filter((record) => record.nama || record.ucapan);
  validRecords
    .slice()
    .reverse()
    .forEach((record) => wishFeed.append(createWishElement(record)));
  totalWishes = validRecords.length;
  wishCount.textContent = String(totalWishes);
  if (!totalWishes) {
    const empty = document.createElement("p");
    empty.className = "wish-empty";
    empty.textContent = "Belum ada ucapan. Jadilah yang pertama memberikan doa.";
    wishFeed.append(empty);
  }
}

async function fetchSheetDb(options = {}) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), sheetDbTimeout);
  try {
    return await fetch(sheetDbEndpoint, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        ...options.headers,
      },
    });
  } finally {
    window.clearTimeout(timeout);
  }
}

async function assertSheetDbResponse(response) {
  if (response.ok) return;
  const detail = await response.text();
  if (response.status === 520 && detail.includes("Origin is disallowed")) {
    throw new Error("SHEETDB_ORIGIN_DISALLOWED");
  }
  throw new Error(`SheetDB HTTP ${response.status}${detail ? `: ${detail}` : ""}`);
}

async function loadWishes({ silent = false } = {}) {
  try {
    const response = await fetchSheetDb({
      method: "GET",
    });
    await assertSheetDbResponse(response);
    const records = await response.json();
    if (!Array.isArray(records)) throw new Error("Format respons SheetDB tidak valid");
    if (records.length) {
      const missingColumns = sheetDbColumns.filter(
        (column) => !Object.prototype.hasOwnProperty.call(records[0], column),
      );
      if (missingColumns.length) {
        throw new Error(`Header spreadsheet tidak sesuai: ${missingColumns.join(", ")}`);
      }
    }
    renderWishes(Array.isArray(records) ? records : []);
    return true;
  } catch (error) {
    console.error("SheetDB GET gagal:", error);
    if (!silent) {
      renderWishes([]);
      const isCors = error instanceof TypeError && error.message === "Failed to fetch";
      setRsvpStatus(isCors ? "Gagal memuat ucapan karena kendala CORS. Pastikan 'Allowed Origins' di SheetDB diset ke '*'." : "Ucapan belum dapat dimuat. Silakan coba lagi nanti.", "error");
    }
    return false;
  }
}

rsvpForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(rsvpForm);
  const payload = {
    timestamp: new Date().toISOString(),
    nama: String(formData.get("nama") || "").trim(),
    ucapan: String(formData.get("ucapan") || "").trim(),
    kehadiran: String(formData.get("kehadiran") || ""),
  };

  if (!payload.nama || !payload.ucapan || !payload.kehadiran) {
    setRsvpStatus("Mohon lengkapi nama, ucapan, dan konfirmasi kehadiran.", "error");
    return;
  }

  rsvpSubmit.disabled = true;
  rsvpSubmitLabel.textContent = "Mengirim...";
  rsvpForm.setAttribute("aria-busy", "true");
  setRsvpStatus("Menyimpan ucapan Anda...");

  try {
    const response = await fetchSheetDb({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // SheetDB menerima satu atau beberapa baris di dalam pembungkus `data`.
      body: JSON.stringify({ data: [payload] }),
    });
    await assertSheetDbResponse(response);
    const result = await response.json();
    if (typeof result?.created === "number" && result.created < 1) {
      throw new Error("SheetDB tidak membuat baris baru");
    }

    const synchronized = await loadWishes({ silent: true });
    if (!synchronized) {
      const empty = wishFeed.querySelector(".wish-empty");
      if (empty) empty.remove();
      const newWish = createWishElement(payload);
      newWish.classList.add("is-new");
      wishFeed.prepend(newWish);
      totalWishes += 1;
      wishCount.textContent = String(totalWishes);
    }
    rsvpForm.reset();
    setRsvpStatus("Terima kasih, ucapan Anda berhasil dikirim.", "success");
    window.setTimeout(() => setRsvpStatus(""), 4000);
  } catch (error) {
    console.error("SheetDB POST gagal:", error);
    const originBlocked = error.message === "SHEETDB_ORIGIN_DISALLOWED" || (error instanceof TypeError && error.message === "Failed to fetch");
    setRsvpStatus(
      originBlocked
        ? "Pengiriman diblokir (CORS). Pastikan 'Allowed Origins' di SheetDB sudah diatur ke '*' atau URL domain ini."
        : "Ucapan gagal dikirim. Periksa koneksi dan coba kembali.",
      "error",
    );
  } finally {
    rsvpSubmit.disabled = false;
    rsvpSubmitLabel.textContent = "Kirim Ucapan";
    rsvpForm.removeAttribute("aria-busy");
  }
});

loadWishes();
window.setInterval(() => {
  if (document.visibilityState === "visible") loadWishes({ silent: true });
}, 30000);

const galleryPhotos = document.querySelectorAll(".gallery-photo");
if ("IntersectionObserver" in window) {
  const galleryObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 },
  );
  galleryPhotos.forEach((photo) => galleryObserver.observe(photo));
} else {
  galleryPhotos.forEach((photo) => photo.classList.add("is-visible"));
}

if ("IntersectionObserver" in window) {
  const animObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".arch-window, .opening blockquote, .portrait, .event-card, .bank-card").forEach((el, i) => {
    el.classList.add("anim-fade-blur");
    el.style.setProperty("--stagger-idx", String(i % 3));
    animObserver.observe(el);
  });
}

// Birds Animation Setup
const birdSvg = `
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M2.5 15.5c2-3 5-4.5 8-4.5 3 0 6 1.5 8 4.5-2.5-1-5.5-1-8-1-2.5 0-5.5 0-8 1z"/>
</svg>`;

const createBirds = (count, className) => {
  const container = document.createElement('div');
  container.className = `birds-container ${className}`;
  for(let i=0; i<count; i++) {
    const bird = document.createElement('div');
    bird.className = 'bird';
    bird.innerHTML = birdSvg;
    bird.style.setProperty('--b-idx', i);
    container.appendChild(bird);
  }
  return container;
};

document.querySelector('#cover').appendChild(createBirds(4, 'birds-cover'));
document.querySelector('#cover').appendChild(createBirds(6, 'birds-opening'));

// Add floating birds to specific sections
const addFloatingBirds = (selector, count) => {
  const section = document.querySelector(selector);
  if(section) section.appendChild(createBirds(count, 'birds-floating'));
};
addFloatingBirds('.opening', 3);
addFloatingBirds('.gallery', 3);
addFloatingBirds('.events', 2);
