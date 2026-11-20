# Tugas 4 - REST API Dasar

## Identitas
- Nama : Anji Sohib Alawi
- NIM  : F1D02310105

## Deskripsi Tugas
Topik data yang sy pilih adalah Destinasi Wisata di Lombok sy memilih itu karna menurut sy itu hal yang menarik di lombok

## Cara Menjalankan
1. npm install
2. npm run dev
3. Buka http://localhost:3000

## Daftar Endpoint
| Method | URL | Fungsi | Status |
|--------|-----|--------|--------|
| GET    | /WisataLombok     | Semua Wisata | 200 |
| GET    | /WisataLombok/:id | Satu buku  | 200 / 404 |
| DELETE | /WisataLombok/:id | (opsional) Hapus buku | 204 / 404 |

## Bentuk Data
```json
{
  "id": 1,
  "nama": "Pantai Kuta",
  "lokasi": "Kuta, Lombok",
  "deskripsi": "Pantai yang terkenal dengan pasir putihnya dan ombak yang cocok untuk berselancar."
}
```

| Field | Tipe | Keterangan |
|-------|------|------------|
| `id` | Number | Identitas unik setiap destinasi wisata. |
| `nama` | String | Nama destinasi wisata. |
| `lokasi` | String | Lokasi atau wilayah destinasi wisata. |
| `deskripsi` | String | Penjelasan singkat mengenai daya tarik destinasi wisata. |

## Pengujian
### GET Semua Wisata
Screenshot: (screenshoot/GetSemuaData.png)
### GET detail (id ada)
Screenshot: (screenshoot/GetIDada.png)
### GET detail (id tidak ada)
Screenshot: (screenshoot/GetIDtidakada.png)
### DELETE 200
Screenshot:(screenshoot/DeleteBerhasil.png)
### DELETE 404
Screenshot: (screenshoot/Delete404.png)

## Deklarasi Penggunaan AI
| Bagian | Alat AI | Dipakai untuk apa | Bagaimana saya memeriksa hasilnya |
|--------|---------|-------------------|-----------------------------------|
| Data (`src/data/WisataLombok.js`) | ChatGPT | Membantu membuat contoh data destinasi wisata di Lombok | Saya memeriksa kembali nama, lokasi, dan deskripsi destinasi melalui internet. |
| Route DELETE `/WisataLombok/:id` | GitHub Copilot | Membantu memahami contoh implementasi route DELETE | Saya membaca ulang kode dan mengujinya menggunakan Postman untuk kondisi data ditemukan dan tidak ditemukan. |
| Ide data | ChatGPT | Memberikan rekomendasi jenis destinasi wisata yang dapat digunakan dalam tugas | Saya memilih dan menyesuaikan data yang relevan dengan topik tugas. |
| Readme | Github Copilot | Membantu menjelaskan apa yang sy perlajari dibagian kesimpulan dan kendala | Saya menyesuaikan dengan apa yang sy kerjakan |

Pernyataan: [Saya menggunakan AI pada bagian yang tertulis di tabel. Bagian lain saya kerjakan sendiri.]
## Kesimpulan & Kendala
Dari tugas ini, saya mempelajari cara membuat REST API sederhana menggunakan Express.js. Saya memahami cara menggunakan method GET untuk menampilkan semua data wisata dan menampilkan data wisata berdasarkan ID tertentu. Selain itu, saya juga mempelajari cara menggunakan method DELETE untuk menghapus data berdasarkan ID serta memberikan respons yang sesuai ketika data ditemukan atau tidak ditemukan.
Kendala yang saya temui adalah memahami cara mencari data berdasarkan ID dan menangani kondisi ketika ID yang dimasukkan tidak tersedia. Kendala tersebut saya atasi dengan menggunakan method `find()` dan `findIndex()`, kemudian menguji setiap endpoint menggunakan Postman.
