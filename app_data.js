let appData = [
    // Data aplikasi Anda di sini (sudah ada pada kode sebelumnya)
];

// Fungsi untuk menampilkan data aplikasi berdasarkan hasil pencarian
function tampilkanDataAplikasi() {
    const appListContainer = document.getElementById('app-list');
    appListContainer.innerHTML = ''; // Bersihkan konten sebelumnya

    let searchQuery = document.getElementById('appName').value.toLowerCase();
    const filteredApps = appData.filter(app => app.nama.toLowerCase().includes(searchQuery));

    if (filteredApps.length > 0) {
        filteredApps.forEach((app, index) => {
            const appItem = document.createElement('div');
            appItem.classList.add('app-item');
            appItem.innerHTML = `
                <strong>Nama:</strong> ${app.nama}<br>
                <strong>Ukuran:</strong> ${app.ukuran}<br>
                <button id="downloadBtn-${index}" data-clicked="false">Download</button>
            `;
            appListContainer.appendChild(appItem);

            document.getElementById(`downloadBtn-${index}`).addEventListener('click', function() {
                handleDownloadButtonClick(app.linkDownload, this);
            });
        });
    } else {
        const noResultMessage = document.createElement('p');
        noResultMessage.textContent = 'Tidak ada hasil yang ditemukan.';
        appListContainer.appendChild(noResultMessage);
    }
}

// Fungsi untuk menangani klik button download
function handleDownloadButtonClick(linkDownload, buttonElement) {
    const isClicked = buttonElement.getAttribute('data-clicked') === 'true';
    
    if (!isClicked) {
        window.open('https://www.profitablegatecpm.com/s6770ua68?key=bf6ff40bdebcdd16a79ebc5cdfac15d2', '_blank');
        buttonElement.setAttribute('data-clicked', 'true');
    } else {
        window.location.href = linkDownload;
    }
}

// Anda bisa menambahkan data aplikasi Anda di bawah ini, contoh:
appData = [
    { nama: "JioSaavn_v9.1.1_mod", ukuran: "35.51 MB", linkDownload: "https://safefileku.com/download/Yi1Qk5i6rDKhyUI1" },
    { nama: "Parallel_Space_Pro_v4.0.9268_Android_9+_mod", ukuran: "15.80 MB", linkDownload: "https://safefileku.com/download/1M7snydGruw7rHkf" },
    { nama: "CCleaner_v6.8.0_b800009929_Mod", ukuran: "38.57 MB", linkDownload: "https://safefileku.com/download/1M7snydGruw7rHkf" },
    { nama: "Psiphon_Pro_376_376_774d5d", ukuran: "18.66 MB", linkDownload: "https://safefileku.com/download/ShXVMnU4ClnJgPOV" },
    { nama: "Mivo_v3.26.565_Premium", ukuran: "108.83 MB", linkDownload: "https://safefileku.com/download/Pqe1DoTnl1BTAboL" },
    { nama: "Puffin_Cloud_Browser_9.9.0.51519_51519200_ca2a67", ukuran: "32.43 MB", linkDownload: "https://safefileku.com/download/NupX4rwDXcPysFS7" },
    { nama: "Reface_3.33.0_348_789f73", ukuran: "57.95 MB", linkDownload: "https://safefileku.com/download/UjkGQruc9ZaTIMBs" },
    { nama: "ZEDGE v7.39.0 MOD", ukuran: "32.60 MB", linkDownload: "https://safefileku.com/download/j5LRHjjBgXnDYpp" },
    { nama: "WPS Office v16.3 MOD", ukuran: "106.13 MB", linkDownload: "https://safefileku.com/download/BVoRafirRN4S578" },
    { nama: "YouCut v1.516.1142 MOD", ukuran: "48 MB", linkDownload: "https://safefileku.com/download/k0BpSHZkm7m1Ikl" },
    { nama: "Wps Wpa Tester Premium v5.0.2", ukuran: "9.82 MB", linkDownload: "https://safefileku.com/download/ebRxI03w2TsxPF0" },
    { nama: "WhatsApp Messenger v2.22.13.6", ukuran: "38.69 MB", linkDownload: "https://safefileku.com/download/qYmRTErhvH8G7Rd" },
    { nama: "World History Atlas v3.38 PAID", ukuran: "10.59 MB", linkDownload: "https://safefileku.com/download/wzwNBbJoRt6EmA3" },
    { nama: "VSCO v272 MOD", ukuran: "83.93 MB", linkDownload: "https://safefileku.com/download/8n1qS1L6zMv2UoS" },
    { nama: "VivaCut v2.13.5 MOD", ukuran: "111.80 MB", linkDownload: "https://safefileku.com/download/VhoYCCSUDPTJ6qb" },
    { nama: "VMOS PRO v2.3.4 MOD", ukuran: "26.81 MB", linkDownload: "https://safefileku.com/download/4FlfCwM4IO8KOoh" },
    { nama: "VIU Premium v1.1.14 MOD", ukuran: "20.79 MB", linkDownload: "https://safefileku.com/download/QUEsqMt7tPuH6S2" },
    { nama: "Videoder v14.5 MOD", ukuran: "9.51 MB", linkDownload: "https://safefileku.com/download/BtglBCwzmN0yYuh" },
    { nama: "Vanced Manager v2.6.2", ukuran: "4.26 MB", linkDownload: "https://safefileku.com/download/AOVTI7NhImf7eU5" },
    { nama: "uTorrent Pro v6.8.6", ukuran: "17.01 MB", linkDownload: "https://safefileku.com/download/aAp9puJNOZ5bSt1" },
    { nama: "U Dictionary v6.1.0 MOD", ukuran: "29.56 MB", linkDownload: "https://safefileku.com/download/mfEH04QBVotUekS" },
    { nama: "Truecaller v12.25.8 MOD", ukuran: "68.45 MB", linkDownload: "https://safefileku.com/download/ESchQrUEE8pF1JW" },
    { nama: "Turbo VPN v3.7.4 MOD", ukuran: "18.36 MB", linkDownload: "https://safefileku.com/download/HihQltOGGpqlVju" },
    { nama: "TikTok v24.6.3 MOD", ukuran: "67.52 MB", linkDownload: "https://safefileku.com/download/PVaWysC7Oi8RLtY" },
    { nama: "SketchAR v6.22 play", ukuran: "182.59 MB", linkDownload: "https://safefileku.com/download/WbjyWayXOTSnDKU" },
    
    // dan seterusnya...
];
