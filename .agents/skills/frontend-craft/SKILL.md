---
name: frontend-craft
description: >-
  Panduan standar tinggi untuk desain dan implementasi frontend modern, elegan,
  presisi, dan anti-slop. Gunakan setiap kali merancang komponen UI, halaman web,
  dashboard, atau styling aplikasi.
---

# Frontend Craft & Anti-Slop Design Guidelines

Tujuan dari skill ini adalah memastikan setiap antarmuka yang dibuat memiliki standar kualitas tinggi setara produk seperti Linear, Vercel, Stripe, dan Raycast — menghindari tampilan template AI generik (*AI slop*).

---

## 🚫 Manifest Anti-Slop (Dilarang Keras)

AI slop pada UI memiliki pola klise yang wajib dihindari:

1. **Gradient Mesh Neon Tanpa Tujuan**: Latar belakang ungu/pink/indigo neon dengan blur lingkaran besar acak.
2. **Emoji di Heading & Label**: Menaruh emoji di judul/subjudul (contoh: `🚀 Fitur Unggulan`, `✨ Solusi Kami`, `💡 Insight`). Gunakan icon SVG monokromatis/minimalis.
3. **Card-in-Card Syndrome**: Membungkus setiap elemen kecil ke dalam kotak putih/abu-abu terpisah dengan `rounded-2xl shadow-xl` berlebihan hingga layout terasa berantakan dan kaku.
4. **Tipografi Mengambang & Monoton**: Ukuran font yang tidak memiliki skala hierarki tegas, line-height terlalu sempit atau terlalu longgar, serta font generik tanpa penyesuaian letter-spacing.
5. **Animasi Berlebihan / Norak**: Animasi membal (`animate-bounce`), berputar tanpa henti, atau transisi lambat (>300ms) untuk interaksi klik dasar.
6. **Kontras Rendah**: Teks abu-abu terang di atas background putih yang melanggar standar aksesibilitas (WCAG).

---

## 📋 The Rules: DOs and DON'Ts

### 1. Tipografi & Hierarki Teks

- **DO**:
  - Gunakan font modern: `Inter`, `Geist Sans`, `Plus Jakarta Sans`, atau font sistem (`system-ui`).
  - Gunakan `tracking-tight` (letter-spacing negatif sekitar `-0.02em` s/d `-0.03em`) pada headline besar (h1, h2) agar terlihat tajam dan menyatu.
  - Gunakan `tabular-nums` atau font monospace (`Geist Mono`, `JetBrains Mono`) untuk data angka, tabel, dan statistik agar angka tidak melompat saat nilainya berubah.
  - Batasi bobot font: utamakan `font-normal` (400), `font-medium` (500), dan `font-semibold` (600). Hindari overuse ultra-bold (800/900).
  - Batasi panjang teks paragraf maksimal 65–75 karakter (`max-w-prose` atau `max-w-xl`) agar nyaman dibaca.

- **DON'T**:
  - Jangan gunakan emoji sebagai pengganti icon UI.
  - Jangan buat judul dan deskripsi memiliki kontras warna yang sama; deskripsi/metadata harus lebih teredam (`text-zinc-500` / `text-zinc-400`).

---

### 2. Warna, Permukaan & Border (Surfaces & Depth)

- **DO**:
  - Gunakan palet netral berbasis `zinc`, `neutral`, atau `slate` daripada abu-abu kusam.
  - Untuk Dark Mode, gunakan warna dasar gelap pekat (misal: `#09090b` / `zinc-950`), bukan abu-abu pudar.
  - Gunakan **subtle borders** berpresisi 1px (`border border-zinc-200 dark:border-zinc-800/80`) sebagai pemisah utama alih-alih drop shadow tebal.
  - Jika memerlukan shadow, gunakan soft ambient shadow atau kombinasi border dengan ring halus: `shadow-xs` atau `shadow-sm ring-1 ring-black/5`.
  - Tentukan satu warna aksen utama yang konsisten (misal: International Klein Blue, Emerald, atau Amber).

- **DON'T**:
  - Jangan gunakan pure black (`#000000`) di atas pure white (`#ffffff`). Gunakan `zinc-900` untuk kontras yang lebih nyaman di mata.
  - Jangan buat border tebal berwarna mencolok kecuali untuk state fokus aktif (`focus-visible:ring-2`).

---

### 3. Layout & Ritme Spasial (Spatial Rhythm)

- **DO**:
  - Terapkan skala spasi berbasis kelipatan 4px/8px (`gap-2`, `gap-3`, `gap-4`, `gap-6`, `p-4`, `p-6`).
  - Sediakan ruang bernapas (*whitespace*) yang memadai; ruang kosong yang terencana menunjukkan kedewasaan desain.
  - Variasikan layout berdasarkan jenis data: gabungkan card, inline table, timeline, dan bordered list — jangan paksakan semuanya menjadi grid card 3 kolom identik.
  - Desain responsif secara elegan: pastikan navigasi, padding, dan ukuran font mengecil secara proporsional di layar mobile.

- **DON'T**:
  - Jangan letakkan elemen menempel rapat ke pinggir container tanpa padding yang seimbang.
  - Jangan penuhi layar dengan elemen dekoratif yang tidak memiliki nilai fungsional.

---

### 4. Interaktivitas & State (Micro-interactions)

- **DO**:
  - Sediakan seluruh state interaktif:
    - **Hover**: perubahan halus pada background atau border (`hover:border-zinc-300 dark:hover:border-zinc-700`).
    - **Active**: feedback sentuhan taktil (`active:scale-[0.98]`).
    - **Focus-visible**: ring fokus yang jelas untuk navigasi keyboard accessibility (`focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300`).
    - **Disabled**: opacity turun (`disabled:opacity-50 disabled:pointer-events-none`).
  - Gunakan durasi transisi cepat dan responsif: `transition-all duration-150 ease-out`.
  - Sediakan skeleton loading state dan empty state yang dirancang dengan visual yang informatif.

- **DON'T**:
  - Jangan hilangkan outline fokus tanpa menyediakan pengganti `focus-visible`.
  - Jangan buat animasi dekoratif yang berjalan terus-menerus tanpa henti.

---

## 💻 Contoh Kode: Bad vs Good

### 1. Metric / Stat Card

#### ❌ AI Slop (Klise, Norak, Tidak Rapi)
```html
<div class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-2xl shadow-2xl">
  <div class="bg-white dark:bg-gray-900 p-6 rounded-2xl">
    <div class="flex items-center space-x-2">
      <span class="text-2xl">🔥</span>
      <h3 class="text-lg font-bold text-gray-800 dark:text-white">Total Pendapatan!</h3>
    </div>
    <p class="text-4xl font-extrabold text-purple-600 mt-2">$128,430</p>
    <p class="text-sm text-green-500 mt-1">🚀 Naik 24% dari bulan lalu!</p>
  </div>
</div>
```

#### ✅ Modern & Anti-Slop (Minimalis, Presisi, Linear-tier)
```html
<div class="group relative overflow-hidden rounded-lg border border-zinc-200/80 bg-white p-5 shadow-xs transition-colors hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-950 dark:hover:border-zinc-700">
  <div class="flex items-center justify-between">
    <span class="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Total Pendapatan</span>
    <div class="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-200/60 bg-zinc-50 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
      <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  </div>

  <div class="mt-4 flex items-baseline justify-between gap-2">
    <span class="font-mono text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 tabular-nums">
      $128,430.00
    </span>
    <span class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 dark:ring-1 dark:ring-emerald-800/40">
      <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
      </svg>
      +24.0%
    </span>
  </div>

  <div class="mt-3 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
    <span>vs. periode sebelumnya</span>
    <span class="text-zinc-400 dark:text-zinc-600">·</span>
    <span class="font-medium text-zinc-700 dark:text-zinc-300">Bulan lalu</span>
  </div>
</div>
```

---

### 2. Form Input & Button

#### ❌ AI Slop
```html
<div class="space-y-4">
  <label class="block font-bold">✨ Masukkan Email Anda:</label>
  <input type="text" placeholder="Ketik email..." class="w-full p-4 border-2 border-purple-400 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-200" />
  <button class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:opacity-90">
    🚀 Submit Sekarang!
  </button>
</div>
```

#### ✅ Modern & Anti-Slop
```html
<div class="space-y-4">
  <div class="space-y-1.5">
    <label for="email" class="block text-xs font-medium text-zinc-700 dark:text-zinc-300">
      Alamat Email
    </label>
    <div class="relative">
      <input
        id="email"
        type="email"
        placeholder="nama@perusahaan.com"
        class="h-9 w-full rounded-md border border-zinc-300 bg-white px-3 py-1 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-300 dark:focus:ring-zinc-300"
      />
    </div>
    <p class="text-xs text-zinc-500 dark:text-zinc-400">Kami tidak akan pernah mengirimkan spam.</p>
  </div>

  <button
    type="submit"
    class="inline-flex h-9 w-full items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow-xs transition-all hover:bg-zinc-800 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-zinc-300"
  >
    Lanjutkan
  </button>
</div>
```

---

## 🛠️ Stack & Library Standar

- **CSS Engine**: Tailwind CSS (v3 / v4).
- **Icons**: Lucide Icons (`lucide-react` / `@lucide/lab`), Radix Icons, atau Tabler Icons.
- **Komponen Primitif**: Radix UI / Headless UI / Ark UI (untuk aksesibilitas keyboard dan focus management).
- **Tipografi**: Geist, Inter, Plus Jakarta Sans (UI) & JetBrains Mono / Geist Mono (Data/Code).

---

## ✅ Checklist Kualitas Sebelum Menyerahkan Kode

Sebelum menyelesaikan implementasi, pastikan agent mengecek:
- [ ] Tidak ada emoji di heading, button label, atau nama fitur.
- [ ] Tidak ada background gradient neon/ungu yang tidak relevan.
- [ ] Semua angka dan nilai metrik menggunakan `tabular-nums` atau font mono.
- [ ] Border dan separator menggunakan warna netral subtil (bukan garis tebal gelap).
- [ ] Terdapat visual state yang jelas untuk: `hover`, `active`, `focus-visible`, dan `disabled`.
- [ ] Padding dan margin konsisten mengikuti kelipatan 4px/8px.
- [ ] Kontras warna teks memenuhi standar keterbacaan pada mode terang maupun gelap.