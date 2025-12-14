// Fungsi untuk menjalankan semua interaksi
function setupInteractions() {
    // 1. Toggle Menu Navigasi (Hamburger Menu)
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
            document.getElementById('cartMenu').classList.remove('show');
        });
    }

    // 2. Toggle Keranjang Dropdown (Marketplace)
    const cartToggle = document.getElementById('cartToggle');
    const cartMenu = document.getElementById('cartMenu');

    if (cartToggle && cartMenu) {
        cartToggle.addEventListener('click', () => {
            cartMenu.classList.toggle('show');
            document.getElementById('mainNav').classList.remove('show');
        });
        
        document.addEventListener('click', (event) => {
            const isClickInsideCart = cartToggle.contains(event.target) || cartMenu.contains(event.target);
            if (!isClickInsideCart) {
                cartMenu.classList.remove('show');
            }
        });
    }

    // 3. Slider Banner Otomatis (Hanya berjalan di index.html)
    const imageSlider = document.getElementById('imageSlider');
    const slides = document.querySelectorAll('#imageSlider .slide');
    
    if (imageSlider && slides.length > 1) {
        let currentSlide = 0;
        function showSlide(index) {
            imageSlider.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        setInterval(nextSlide, 5000); 
    }
    
    // 4. Implementasi Pencarian Sederhana (Berdasarkan Kata Kunci Warna)
    const searchInput = document.getElementById('searchInput');
    const productSlider = document.getElementById('productSlider');
    const productLinks = productSlider ? productSlider.querySelectorAll('.product-link') : [];

    if (searchInput && productLinks.length > 0) {
        searchInput.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase().trim();
            let foundCount = 0;
            
            productLinks.forEach(link => {
                const altText = link.querySelector('img').alt.toLowerCase();
                
                if (altText.includes(query) || query === '') {
                    link.style.display = 'block'; 
                    foundCount++;
                } else {
                    link.style.display = 'none'; 
                }
            });
            // Jika hanya satu yang ditemukan, geser ke tengah (visualisasi pencarian)
            productSlider.style.justifyContent = (foundCount === 1 && query !== '') ? 'center' : 'flex-start';
        });
    }
}
 
document.addEventListener('DOMContentLoaded', setupInteractions);
