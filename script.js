document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Ambil elemen tombol dan menu dropdown
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.category-dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
        // Fungsi saat tombol dropdown diklik
        dropdownToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Penting: mencegah event klik menyebar
            // Tambah/Hapus class 'active' untuk menampilkan/menyembunyikan konten
            dropdownMenu.classList.toggle('active'); 
        });

        // Fungsi saat user klik di mana saja di luar dropdown
        window.addEventListener('click', function(e) {
            // Jika elemen yang diklik BUKAN bagian dari dropdown, tutup menunya
            if (!dropdownMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
    }

    // 2. Placeholder untuk fungsi Hamburger Menu
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            console.log("Menu Mobile diklik!");
            // Di sini nanti lo bisa tambahkan logika untuk menampilkan sidebar mobile
        });
    }
});
