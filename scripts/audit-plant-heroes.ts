import fs from "node:fs";
import path from "node:path";
import { listings } from "../data/listings";
import { plants } from "../data/plants";

type Entry = {
  identity: { slug: string };
  images: { hero?: string };
};

const root = process.cwd();
const issues: string[] = [];

function checkEntry(kind: string, entry: Entry) {
  const expectedPath = `/plants/${entry.identity.slug}/hero.jpg`;
  const publicPath = path.join(root, "public", expectedPath);

  if (entry.images.hero !== expectedPath) {
    issues.push(
      `${kind} ${entry.identity.slug}: expected images.hero to be "${expectedPath}", received "${entry.images.hero ?? "undefined"}"`,
    );
  }

  if (!fs.existsSync(publicPath)) {
    issues.push(`${kind} ${entry.identity.slug}: missing ${publicPath}`);
  }
}

for (const plant of plants) {
  checkEntry("plant", plant);
}

for (const listing of listings) {
  checkEntry("listing", listing);
}

if (issues.length > 0) {
  console.error("Plant hero audit failed:\n");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log(`Plant hero audit passed for ${plants.length} plants and ${listings.length} listings.`);
