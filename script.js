document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle Menu Navigasi (Hamburger Menu)
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
            // Pastikan keranjang tertutup saat menu navigasi dibuka
            document.getElementById('cartMenu').classList.remove('show');
        });
    }

    // 2. Toggle Keranjang Dropdown (Marketplace)
    const cartToggle = document.getElementById('cartToggle');
    const cartMenu = document.getElementById('cartMenu');

    if (cartToggle && cartMenu) {
        cartToggle.addEventListener('click', () => {
            cartMenu.classList.toggle('show');
            // Pastikan menu navigasi tertutup saat keranjang dibuka
            document.getElementById('mainNav').classList.remove('show');
        });
        
        // Tutup menu jika klik di luar
        document.addEventListener('click', (event) => {
            const isClickInsideCart = cartToggle.contains(event.target) || cartMenu.contains(event.target);
            if (!isClickInsideCart) {
                cartMenu.classList.remove('show');
            }
        });
    }

    // 3. Slider Banner Otomatis (2 Slide)
    const imageSlider = document.getElementById('imageSlider');
    const slides = document.querySelectorAll('#imageSlider .slide');
    let currentSlide = 0;

    if (imageSlider && slides.length > 1) {
        function showSlide(index) {
            imageSlider.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Ganti slide setiap 5 detik
        setInterval(nextSlide, 5000); 
    }
    
    // 4. Implementasi Pencarian Sederhana (Berdasarkan Kata Kunci Warna)
    const searchInput = document.getElementById('searchInput');
    const productLinks = document.querySelectorAll('.product-image-slider .product-link');

    if (searchInput && productLinks.length > 0) {
        searchInput.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase().trim();
            
            productLinks.forEach(link => {
                // Alt text di HTML diisi dengan nama warna: "black", "grey", dst.
                const altText = link.querySelector('img').alt.toLowerCase();
                
                // Cek apakah alt text mengandung kata kunci yang dicari
                if (altText.includes(query) || query === '') {
                    link.style.display = 'block'; // Tampilkan jika cocok atau input kosong
                } else {
                    link.style.display = 'none'; // Sembunyikan jika tidak cocok
                }
            });
            // Atur agar slider produk bisa di-scroll meskipun ada yang disembunyikan
            document.getElementById('productSlider').style.justifyContent = (query === '' ? 'flex-start' : 'center');
        });
    }
});
