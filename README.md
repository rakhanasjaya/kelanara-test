# kelanara-test

Proyek ini adalah aplikasi video streaming sederhana dengan frontend yang dibuat menggunakan Next.js dan backend menggunakan Node.js (Express).

Tentu, ini adalah skrip README.md final yang menggabungkan semua informasi yang telah kita diskusikan, termasuk catatan rilis. Anda bisa langsung menyalin dan menggunakannya.

Markdown

# kelanara-test

Proyek ini adalah aplikasi video streaming sederhana dengan frontend yang dibuat menggunakan Next.js dan backend menggunakan Node.js (Express).

## Riwayat Rilis

### Rilis 1.0.0 (Versi Stabil)

Versi `1.0.0` menandai rilis stabil pertama dari aplikasi ini, di mana **Frontend telah terintegrasi sepenuhnya dengan API Backend**.

**Fitur Utama:**
-   **Data Dinamis**: Aplikasi tidak lagi menggunakan data statis. Semua data terkait video dan pengguna diambil dan dikelola secara langsung melalui panggilan API ke server.
-   **Fungsionalitas Penuh**: Fitur-fitur seperti registrasi pengguna, login, dan manajemen video oleh admin sekarang sepenuhnya fungsional dan berinteraksi langsung dengan database.
-   **Backend Solid**: Infrastruktur backend yang menangani logika bisnis, otentikasi, dan operasi database telah siap digunakan.

Rilis ini direkomendasikan untuk penggunaan umum karena mencerminkan fungsionalitas aplikasi yang sebenarnya.

### Rilis Beta (Versi Awal/Purwarupa)

Versi `Beta` adalah rilis awal yang berfokus pada pembangunan antarmuka (UI) dan pengalaman pengguna (UX). Pada tahap ini, **Frontend masih menggunakan data statis**.

**Karakteristik Utama:**
-   **Frontend Statis**: Data yang ditampilkan di halaman, seperti daftar video dan informasi pengguna untuk login, masih bersifat *hardcoded* dan diambil dari file lokal.
-   **Fokus pada UI/UX**: Tujuan utama dari rilis ini adalah untuk mendemonstrasikan alur kerja aplikasi dan desain antarmuka tanpa ketergantungan pada backend yang sudah jadi.
-   **Purwarupa Fungsional**: Meskipun datanya statis, semua komponen antarmuka sudah dibangun untuk memberikan gambaran lengkap tentang aplikasi.

---

## Penjelasan Fitur

### Frontend
-   **Otentikasi Pengguna**: Pengguna dapat mendaftar dan masuk ke dalam sistem.
-   **Halaman Utama**: Menampilkan daftar video yang sedang tren, video orisinal, dan video berdasarkan kategori.
-   **Halaman Detail Video**: Menampilkan detail video yang dipilih, termasuk judul, deskripsi, dan pemutar video.
-   **Dasbor Admin**: Panel khusus untuk admin di mana mereka dapat mengelola video, termasuk membuat video baru dan mengubah status video (draft/published).

### Backend
-   **Registrasi dan Login Pengguna**: Menyediakan endpoint untuk registrasi dan login pengguna dengan otentikasi berbasis JWT (JSON Web Token).
-   **Manajemen Video**: API untuk operasi CRUD (Create, Read, Update, Delete) pada data video.
-   **Kontrol Akses Berbasis Peran**: Membedakan antara pengguna biasa dan admin, di mana hanya admin yang dapat mengakses endpoint tertentu (misalnya, untuk mengelola video).

---

## Cara Menjalankan Proyek Secara Lokal

### Prasyarat
-   Node.js
-   npm atau yarn

### Backend
1.  Buka direktori `backend`.
2.  Instal dependensi:
    ```bash
    npm install
    ```
3.  Jalankan migrasi database Prisma untuk membuat tabel yang diperlukan:
    ```bash
    npx prisma migrate dev --name init
    ```
4.  Jalankan seeder untuk menambahkan data admin awal:
    ```bash
    npm run seed
    ```
5.  Jalankan server backend:
    ```bash
    npm run dev
    ```
    Server akan berjalan di `http://localhost:4000`.

### Frontend
1.  Buka direktori `frontend/kelanara-test`.
2.  Instal dependensi:
    ```bash
    npm install
    ```
3.  Jalankan server pengembangan:
    ```bash
    npm run dev
    ```
4.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## Link Deploy Frontend

https://kelanara-test-teal.vercel.app/

---

## Penjelasan Asumsi

-   **Data Statis**: Sebagian besar data, seperti daftar video dan data pengguna awal untuk login, masih menggunakan data statis yang disimpan dalam file JavaScript (`staticData/videos.js` dan `staticData/user.js`), bukan dari database dinamis.
-   **Otentikasi Sederhana**: Proses login di frontend masih menggunakan data statis untuk verifikasi, bukan memanggil API backend secara penuh.
-   **Lingkungan Pengembangan**: Proyek ini diatur untuk berjalan di lingkungan lokal dengan port backend di `4000` dan frontend di `3000`.

---

## Dokumentasi API Backend

Berikut adalah daftar endpoint API yang tersedia di sisi backend.

### 🔑 Otentikasi (`/auth`)

Endpoint yang berhubungan dengan registrasi dan login pengguna.

---

#### **1. Registrasi Pengguna Baru**

-   **Endpoint**: `POST /auth/register`
-   **Deskripsi**: Mendaftarkan pengguna baru ke dalam sistem.
-   **Request Body**:
    ```json
    {
      "name": "Nama Pengguna",
      "email": "email@example.com",
      "password": "password123"
    }
    ```
-   **Response Sukses (201 Created)**: Mengembalikan data pengguna yang baru dibuat.

---

#### **2. Login Pengguna**

-   **Endpoint**: `POST /auth/login`
-   **Deskripsi**: Memvalidasi kredensial pengguna dan mengembalikan token JWT jika berhasil.
-   **Request Body**:
    ```json
    {
      "email": "email@example.com",
      "password": "password123"
    }
    ```
-   **Response Sukses (200 OK)**:
    ```json
    {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

---

### 🎬 Video (`/videos`)

Endpoint untuk mengelola data video. **Seluruh endpoint ini memerlukan otentikasi sebagai Admin.**

---

#### **1. Membuat Video Baru**

-   **Endpoint**: `POST /videos/`
-   **Deskripsi**: Menambahkan video baru ke dalam database.
-   **Request Body**:
    ```json
    {
      "title": "Judul Video Baru",
      "description": "Deskripsi singkat video.",
      "videoUrl": "[https://example.com/video.mp4](https://example.com/video.mp4)",
      "status": "DRAFT" // atau "PUBLISHED"
    }
    ```
-   **Response Sukses (201 Created)**: Mengembalikan objek video yang baru dibuat.

---

#### **2. Mendapatkan Semua Video**

-   **Endpoint**: `GET /videos/`
-   **Deskripsi**: Mengambil daftar semua video yang ada di database.
-   **Response Sukses (200 OK)**: Mengembalikan array objek video.

---

#### **3. Mendapatkan Video Berdasarkan ID**

-   **Endpoint**: `GET /videos/:id`
-   **Deskripsi**: Mengambil detail satu video berdasarkan ID uniknya.
-   **Response Sukses (200 OK)**: Mengembalikan objek video yang dicari.

---

#### **4. Memperbarui Video**

-   **Endpoint**: `PATCH /videos/:id`
-   **Deskripsi**: Memperbarui data video berdasarkan ID. Anda bisa mengirim hanya field yang ingin diubah.
-   **Response Sukses (200 OK)**: Mengembalikan objek video yang telah diperbarui.

---

#### **5. Menghapus Video**

-   **Endpoint**: `DELETE /videos/:id`
-   **Deskripsi**: Menghapus video dari database berdasarkan ID.
-   **Response Sukses (200 OK)**:
    ```json
    {
      "message": "Video deleted successfully"
    }
    ```

---
