
import express from 'express';
import { WisataLombok } from './src/data/WisataLombok.js';

const app = express();

app.use(express.json());

app.get('/WisataLombok/:id', (req, res) => {
    const w = WisataLombok.find(
        (x) => x.id === Number(req.params.id)
    );

    if (!w) {
        return res.status(404).json({
            pesan: 'Destinasi wisata tidak ditemukan'
        });
    }

    res.json(w);
});

app.delete('/WisataLombok/:id', (req, res) => {
    const index = WisataLombok.findIndex(
        (x) => x.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            pesan: 'Destinasi wisata tidak ditemukan'
        });
    }

    WisataLombok.splice(index, 1);

    res.json({
        pesan: 'Destinasi wisata berhasil dihapus'
    });
});

app.get('/', (req, res) => {
  res.send('Selamat Datang di Destinasi Wisata Lombok!');
});

app.get('/WisataLombok', (req, res) => {
  res.json(WisataLombok);                                      
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.error('Gagal Menjalankan Server:', err.message);
    process.exit(1);
  }

  console.log(`Server jalan di http://localhost:${PORT}`);
});