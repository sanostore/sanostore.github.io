document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. SIDEBAR MENU (Header Button Toggle) ---
    const menuToggle = document.getElementById('menuToggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('overlay');

    if (menuToggle && sidebarMenu && overlay) {
        // Buka/Tutup Sidebar
        menuToggle.addEventListener('click', function() {
            sidebarMenu.classList.toggle('open');
            overlay.style.display = sidebarMenu.classList.contains('open') ? 'block' : 'none';
        });

        // Tutup Sidebar saat klik di luar area
        overlay.addEventListener('click', function() {
            sidebarMenu.classList.remove('open');
            overlay.style.display = 'none';
        });
    }


    // --- 2. SLIDER BANNER OTOMATIS (slide1.jpg & slide2.jpg) ---
    const sliderContainer = document.getElementById('mainSlider');
    const slides = sliderContainer ? sliderContainer.querySelectorAll('.slide') : [];
    let currentIndex = 0;
    const slideInterval = 5000; // Geser setiap 5 detik

    if (slides.length > 1) {
        function showSlide(index) {
            // Sembunyikan semua slide
            slides.forEach(slide => slide.style.display = 'none');
            // Tampilkan slide yang sesuai
            slides[index].style.display = 'block';
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        // Mulai interval geser otomatis
        setInterval(nextSlide, slideInterval);

        // Tampilkan slide pertama saat loading
        showSlide(currentIndex);
    }
    
    // Catatan: Produk Slider (6 gambar) hanya menggunakan CSS overflow-x: scroll, tidak perlu JS.

});
