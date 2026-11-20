# SIPANTI Backend

Backend dari SIPANTI (Sistem Informasi Pengelolaan Panti Asuhan Amal Mulia Qurani), aplikasi untuk mengelola data anak asuh. Dibuat dengan NestJS dan TypeScript, menyediakan endpoint untuk melihat, menambah, mengubah, dan menghapus data anak asuh. Project ini melanjutkan aplikasi frontend SIPANTI yang sebelumnya masih memakai mock API.

## Week 9 - NestJS Dasar + Struktur MVC

Pada week 9 dibuat fondasi backend untuk data utama Anak Asuh dengan pola MVC di NestJS. Data yang dikelola mencakup identitas anak, data pendidikan, data kesehatan, dan data wali. Bagian-bagian yang dibuat:

- Entity mendefinisikan bentuk data anak asuh, seperti nama, jenis kelamin, tempat dan tanggal lahir, status, pendidikan, golongan darah, alamat asal, wali, dan dokumen. Beberapa field memakai union type, misalnya jenis kelamin dan golongan darah.
- Module mengelompokkan controller dan service dalam AnakAsuhModule, lalu didaftarkan di AppModule.
- Controller menangani request GET, POST, PATCH, dan DELETE. Semua pekerjaan diteruskan ke service lewat dependency injection, bukan membuat instance sendiri.
- Service menyimpan data sementara di array memori dan berisi logika CRUD. ID dibuat otomatis dengan format AA-YYYY-NNN, misalnya AA-2026-001.
- DTO memisahkan bentuk data untuk create dan update. DTO update dibuat dari DTO create dengan PartialType, sehingga semua field jadi opsional.
- Validasi memakai class-validator dan ValidationPipe global. Aturannya antara lain IsString, MinLength, IsIn, IsDateString, IsInt, Min, Max, Matches, IsOptional, dan IsArray.
- Error ditangani dengan NotFoundException saat data tidak ditemukan dan ConflictException saat data dengan nama dan tanggal lahir yang sama sudah ada.
- CORS diaktifkan agar frontend bisa mengakses backend.
- Usia dihitung otomatis dari tanggal lahir saat data dikembalikan, dan dokumen serta riwayat kegiatan dikembalikan sebagai array kosong jika belum diisi.

Endpoint yang tersedia:

- GET /anak-asuh untuk menampilkan semua data
- GET /anak-asuh/:id untuk menampilkan satu data
- POST /anak-asuh untuk menambah data
- PATCH /anak-asuh/:id untuk mengubah sebagian data
- DELETE /anak-asuh/:id untuk menghapus data

## Menjalankan

Prasyarat: Node.js 24 atau lebih baru.

npm install
npm run start:dev

Server berjalan di http://localhost:3000.

## Pengujian

Endpoint diuji memakai REST Client di VS Code melalui file anak-asuh.http, mulai dari GET, POST, PATCH, DELETE, sampai pengujian error 404 dan 409. Screenshot hasil pengujian ada di docs/ss/week 9/.
