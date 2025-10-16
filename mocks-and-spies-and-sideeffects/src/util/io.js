import path from "path";
import { promises as fs } from "fs";

export default function writeData(data, filename) {
  if (!data || !filename) {
    throw new Error("No Data or File Name provided");
  }
  const storagePath = path.join(process.cwd(), "data", filename);
  return fs.writeFile(storagePath, data);
}
