// Menjalankan skrip setelah seluruh konten halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Menargetkan elemen div mana yang akan diisi dengan kartu film
    const movieGridContainer = document.querySelector('.grid-container');

    // Jika elemen grid tidak ditemukan, hentikan skrip untuk menghindari error
    if (!movieGridContainer) {
        console.error('Elemen .grid-container tidak ditemukan!');
        return;
    }

    // Menggunakan Fetch API untuk mengambil data dari file posts.json
    // Fetch adalah cara modern di JavaScript untuk membuat permintaan jaringan (misalnya, memuat file)
    fetch('posts.json')
        .then(response => {
            // Memeriksa apakah permintaan berhasil (status kode 200-299)
            if (!response.ok) {
                // Jika gagal (misal file tidak ditemukan), lemparkan error
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Jika berhasil, ubah respons menjadi format JSON
            return response.json();
        })
        .then(movies => {
            // 'movies' sekarang berisi array of objects dari file posts.json

            // Kosongkan container terlebih dahulu untuk memastikan tidak ada konten sisa
            movieGridContainer.innerHTML = '';
            
            // Periksa apakah ada film di dalam data
            if (movies.length === 0) {
                movieGridContainer.innerHTML = '<p>Belum ada film yang ditambahkan.</p>';
                return;
            }

            // Lakukan perulangan (looping) untuk setiap film dalam data
            movies.forEach(movie => {
                // Untuk setiap film, buat elemen kartu film dalam bentuk string HTML
                const movieCardHTML = `
                    <a href="${movie.url}" class="movie-card">
                        <div class="thumbnail-container">
                            <img src="${movie.thumbnail}" alt="${movie.title}" loading="lazy">
                        </div>
                        <h3>${movie.title}</h3>
                    </a>
                `;
                
                // Tambahkan HTML kartu film yang baru dibuat ke dalam grid container
                movieGridContainer.insertAdjacentHTML('beforeend', movieCardHTML);
            });
        })
        .catch(error => {
            // Menangkap dan menampilkan error jika terjadi masalah selama proses fetch
            console.error('Gagal memuat data film:', error);
            movieGridContainer.innerHTML = '<p>Maaf, terjadi kesalahan saat memuat daftar film.</p>';
        });
});
