// Simpan data aplikasi dalam file JSON
const appData = [
    { nama: "Aplikasi 1", ukuran: "10 MB", linkDownload: "https://example.com/download/app1" },
    { nama: "Aplikasi 2", ukuran: "15 MB", linkDownload: "https://example.com/download/app2" },
    { nama: "anu", ukuran: "10 mb MB", linkDownload: "http" },
    // Tambahkan data aplikasi lainnya sesuai kebutuhan
];

// Fungsi untuk menampilkan data aplikasi berdasarkan hasil pencarian
function tampilkanDataAplikasi() {
    const appListContainer = document.getElementById('app-list');
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    // Reset konten sebelumnya
    appListContainer.innerHTML = '';

    // Tampilkan data aplikasi sesuai hasil pencarian
    let searchQuery = document.getElementById('appName').value.toLowerCase();

    const filteredApps = appData.filter(app => app.nama.toLowerCase().includes(searchQuery));

    if (filteredApps.length > 0) {
        for (let i = startIdx; i < Math.min(endIdx, filteredApps.length); i++) {
            const appItem = document.createElement('div');
            appItem.classList.add('app-item');
            appItem.innerHTML = `
                <strong>Nama:</strong> ${filteredApps[i].nama}<br>
                <strong>Ukuran:</strong> ${filteredApps[i].ukuran}<br>
                <button onclick="downloadApp('${filteredApps[i].linkDownload}')">Download</button>
            `;
            appListContainer.appendChild(appItem);
        }
    } else {
        const noResultMessage = document.createElement('p');
        noResultMessage.textContent = 'Tidak ada hasil yang ditemukan.';
        appListContainer.appendChild(noResultMessage);
    }
}

// Fungsi untuk mengakses tautan unduhan
function downloadApp(linkDownload) {
    // Redirect atau lakukan aksi yang sesuai dengan kebutuhan aplikasi
    window.location.href = linkDownload;
}
