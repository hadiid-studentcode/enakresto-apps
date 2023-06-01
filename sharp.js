const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  const imageFormat = image.split('.').pop().toLowerCase();

  // Cek apakah format file didukung
  if (['jpg', 'jpeg', 'png', 'webp'].includes(imageFormat)) {
    // Mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-large.png`,
        ),
      )
      .then(() => {
        console.log(`Berhasil mengubah ukuran gambar: ${image}`);
      })
      .catch((err) => {
        console.error(`Gagal mengubah ukuran gambar: ${image}`, err);
      });

    // Mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-small.png`,
        ),
      )
      .then(() => {
        console.log(`Berhasil mengubah ukuran gambar: ${image}`);
      })
      .catch((err) => {
        console.error(`Gagal mengubah ukuran gambar: ${image}`, err);
      });
  } else {
    console.error(
      `Gagal mengubah ukuran gambar: ${image} - Format file tidak didukung`,
    );
  }
});
