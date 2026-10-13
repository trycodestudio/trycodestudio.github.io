# trycode_ studio

Website statis untuk trycode_ studio. Dibuat dengan HTML, CSS, dan JavaScript tanpa framework atau proses build, sehingga bisa langsung dipublikasikan lewat GitHub Pages.

## Halaman

- `index.html` — beranda dan pilihan karya.
- `layanan.html` — layanan dan alur pengerjaan.
- `portfolio.html` — katalog karya dengan filter kategori.
- `studio.html` — tentang studio, cara pandang, dan FAQ.
- `kontak.html` — kanal untuk memulai percakapan.

## Menambah karya

Edit daftar `window.TRYCODE_PROJECTS` di `projects.js`. Salin satu objek yang sudah ada, tempelkan sebagai item baru di dalam array, lalu ganti datanya.

Contoh bentuk entri:

```js
{
  name: "Nama proyek",
  category: "website",
  categoryLabel: "Website & landing page",
  type: "WEBSITE / LANDING PAGE",
  description: "Ringkasan singkat proyek.",
  technologies: ["HTML", "CSS", "JavaScript"],
  demo: "https://contoh.github.io/proyek/",
  repository: "https://github.com/akun/proyek",
  status: "Live",
  featured: false,
  visual: "generic"
}
```

Field yang perlu diisi:

| Field | Isi |
| --- | --- |
| `name` | Nama proyek |
| `category` | Kunci kategori filter: `website`, `apps`, `automation`, `tools`, `maintenance`, atau `consulting` |
| `categoryLabel` | Nama kategori untuk keterangan visual |
| `type` | Label tipe proyek, misalnya `WEBSITE / E-COMMERCE` |
| `description` | Ringkasan proyek |
| `technologies` | Array teknologi atau integrasi, misalnya `["HTML", "CSS"]` |
| `demo` | URL demo yang memakai HTTPS |
| `repository` | URL repository yang memakai HTTPS |

Field opsional:

- `status`: status yang tampil di kartu. Pakai `Live` jika proyek sudah terbit.
- `featured`: set ke `true` untuk menampilkan proyek di beranda. Beranda menampilkan maksimal dua proyek featured.
- `visual`: `apparel`, `food`, atau `generic` untuk memilih ilustrasi kartu.
- `previewLabel`, `previewTitle`, `previewText`: teks pada mockup visual.

Jumlah proyek, jumlah kategori terisi, filter, dan kartu di beranda dibuat dari daftar ini. Menambah kategori layanan baru juga perlu menambahkan tombol filter di `portfolio.html` dan kunci kategori tersebut pada `projects.js`.

## Tampilan dan identitas

- `studio-pages.css` — gaya halaman layanan, studio, kontak, dan katalog.
- `home.css` — layout khusus beranda.
- `site-shell.css` — navbar, footer, dan CTA bersama di semua halaman.
- `favicon/` — ikon situs.

Google Fonts memuat Space Grotesk dan JetBrains Mono. Halaman menyediakan fallback sistem jika font eksternal tidak tersedia.

## GitHub Pages

Tidak ada dependensi npm atau langkah build. Publikasikan isi repository dari branch dan folder yang dipilih di pengaturan GitHub Pages; file `index.html` berada di root repository.
