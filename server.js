import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3005;

app.use(express.static(path.join(__dirname, "dist")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
