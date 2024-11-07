import "dotenv/config";
import fs from "fs";

const fileName = process.env.FILENAME;

fs.writeFile(fileName, "Hello Node.js", "utf-8", (err) => {
  if (err) {
    console.error("Error:", err);
  }
});

fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.error("Error:", err);
  }
  console.log(data);
});
