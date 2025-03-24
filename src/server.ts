import express from "express";
import cors from "cors";
import noteRoutes from "./routes/note.routes";
import { errorHandler } from "./middleware/errorHandler";

// Inisialisasi aplikasi Express
const app = express();

// Middleware untuk mengizinkan request dari frontend
app.use(cors());

// Middleware untuk parsing request body ke JSON
app.use(express.json());

// Gunakan routes untuk endpoint /api/notes
app.use("/api/notes", noteRoutes);

// Middleware untuk error handling (harus dipanggil setelah semua route)
app.use(errorHandler);

// Jalankan server di port tertentu
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
