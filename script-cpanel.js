document.getElementById('generateBtn').addEventListener('click', function() {
    // 1. Ambil semua nilai dari input
    const judul = document.getElementById('judul').value;
    const thumbnail = document.getElementById('thumbnail').value;
    const youtubeId = document.getElementById('youtube').value;
    const sinopsis = document.getElementById('sinopsis').value.replace(/\n/g, '</p>\n<p>'); // Mengubah baris baru menjadi paragraf
    const tagsInput = document.getElementById('tags').value;
    const dl_hd = document.getElementById('dl_hd').value;
    const dl_720 = document.getElementById('dl_720').value;
    const dl_1080 = document.getElementById('dl_1080').value;

    // 2. Proses input
    const tagsArray = tagsInput.split(',').map(tag => tag.trim());
    const tagsHTML = tagsArray.map(tag => `<span>${tag}</span>`).join('\n                ');

    const filename = judul.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.html';

    // 3. Buat template HTML menggunakan template literal (backticks ``)
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Sinopsis dan link download film ${judul} kualitas HD.">
    <title>Download ${judul} - Nice Movie</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>

    <header>
        <nav>
            <a href="../index.html" class="logo">Nice Movie</a>
        </nav>
    </header>

    <main>
        <div class="post-container">
            <div class="post-header">
                <h1>${judul}</h1>
            </div>

            <div class="youtube-embed">
                <iframe src="https://www.youtube.com/embed/${youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <article class="article-content">
                <h2>Sinopsis</h2>
                <p>${sinopsis}</p>
            </article>

            <div class="tags">
                ${tagsHTML}
            </div>

            <div class="download-buttons">
                ${dl_hd ? `<a href="${dl_hd}" class="btn-download" target="_blank" rel="noopener noreferrer">Download HD</a>` : ''}
                ${dl_720 ? `<a href="${dl_720}" class="btn-download" target="_blank" rel="noopener noreferrer">Download 720p</a>` : ''}
                ${dl_1080 ? `<a href="${dl_1080}" class="btn-download" target="_blank" rel="noopener noreferrer">Download 1080p</a>` : ''}
            </div>

            <section class="related-posts">
                <h2>Film Terkait</h2>
                <div class="grid-container">
                    <a href="#" class="movie-card">
                        <div class="thumbnail-container">
                            <img src="https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg" alt="Godzilla x Kong">
                        </div>
                        <h3>Godzilla x Kong</h3>
                    </a>
                </div>
            </section>
        </div>
    </main>

    <footer>
        <p>&copy; 2025 Nice Movie. All rights reserved.</p>
    </footer>

</body>
</html>
`;

    // 4. Tampilkan hasilnya
    document.getElementById('outputCode').value = htmlTemplate.trim();
    document.getElementById('filename-suggestion').textContent = filename;
});
