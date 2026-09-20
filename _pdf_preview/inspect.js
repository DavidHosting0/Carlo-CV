const fs = require("fs");
const pdf = require("pdf-parse");
pdf(fs.readFileSync("c:/Users/ytmad/Downloads/bewerbungfalschformatiert.pdf"))
  .then((d) => {
    console.log("pages", d.numpages);
    console.log("---PAGE BREAKS via form feed---");
    const parts = d.text.split("\f");
    parts.forEach((p, i) => {
      console.log("\n===== PAGE", i + 1, "=====\n");
      console.log(p.trim().slice(0, 1500));
    });
  })
  .catch((e) => console.error(e));
