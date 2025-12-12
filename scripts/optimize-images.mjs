import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const srcDir = path.join(process.cwd(), "public");
const outDir = path.join(srcDir, "optimized");
await fs.mkdir(outDir, { recursive: true });

const files = await fs.readdir(srcDir);
const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!exts.has(ext)) continue;
  const srcPath = path.join(srcDir, file);
  const base = path.parse(file).name;
  try {
    const { size } = await fs.stat(srcPath);
    const kb = (size / 1024).toFixed(2);
    const outPath = path.join(outDir, `${base}.webp`);

    await sharp(srcPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);

    const outStat = await fs.stat(outPath);
    const outKb = (outStat.size / 1024).toFixed(2);
    console.log(`${file}: ${kb} KB -> optimized ${outKb} KB -> ${path.relative(process.cwd(), outPath)}`);
  } catch (err) {
    console.error(`Failed to process ${file}:`, err.message);
  }
}

console.log("Optimization complete. Optimized images are in public/optimized/");
