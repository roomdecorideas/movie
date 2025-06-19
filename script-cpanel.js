document.getElementById('generateBtn').addEventListener('click', function() {
    // 1. Ambil semua nilai dari input
    const judul = document.getElementById('judul').value;
    const thumbnail = document.getElementById('thumbnail').value;
    const youtubeId = document.getElementById('youtube').value;
    const sinopsis = document.getElementById('sinopsis').value.replace(/\n/g, '</p>\n<p>');
    const tagsInput = document.getElementById('tags').value;
    const dl_hd = document.getElementById('dl_hd').value;
    const dl_720 = document.getElementById('dl_720').value;
    const dl_1080 = document.getElementById('dl_1080').value;

    // 2. Proses input
    const tagsArray = tagsInput.split(',').map(tag => tag.trim());
    const tagsHTML = tagsArray.map(tag => `<span>${tag}</span>`).join('\n                ');
    const filename = judul.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.html';
    const fileUrl = `posts/${filename}`;

    // 3. Generate Kode HTML (Sama seperti sebelumnya)
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
    </body>
</html>
`; // Pastikan template lengkap Anda ada di sini

    // 4. ✨ BARU: Generate Kode JSON untuk file posts.json
    const jsonTemplate = `{
    "title": "${judul}",
    "thumbnail": "${thumbnail}",
    "url": "${fileUrl}"
}`;

    // 5. Tampilkan semua hasilnya
    document.getElementById('outputCode').value = htmlTemplate.trim(); // Anda perlu memasukkan kembali template HTML lengkap di sini
    document.getElementById('filename-suggestion').textContent = filename;
    document.getElementById('outputJson').value = jsonTemplate;
});
