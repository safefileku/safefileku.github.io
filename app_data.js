// Simpan data aplikasi dalam file JSON
const appData = [
    { nama: "Aplikasi 1", ukuran: "10 MB", linkDownload: "https://example.com/download/app1" },
    { nama: "Aplikasi 2", ukuran: "15 MB", linkDownload: "https://example.com/download/app2" },
    // Tambahkan data aplikasi lainnya sesuai kebutuhan
];

// Fungsi untuk menampilkan data aplikasi di halaman web
function tampilkanDataAplikasi() {
    const appListContainer = document.getElementById('app-list');

    appData.forEach(app => {
        const appItem = document.createElement('div');
        appItem.classList.add('app-item');
        appItem.innerHTML = `
            <strong>Nama:</strong> ${app.nama}<br>
            <strong>Ukuran:</strong> ${app.ukuran}<br>
            <button onclick="downloadApp('${app.linkDownload}')">Tombol Download</button>
        `;
        appListContainer.appendChild(appItem);
    });
}

// Fungsi untuk mengakses tautan unduhan
function downloadApp(linkDownload) {
    // Redirect atau lakukan aksi yang sesuai dengan kebutuhan aplikasi
    window.location.href = linkDownload;
}

// Panggil fungsi untuk menampilkan data aplikasi
tampilkanDataAplikasi();
