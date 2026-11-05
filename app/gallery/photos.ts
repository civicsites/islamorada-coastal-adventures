import { readdir } from "node:fs/promises";
import path from "node:path";
import photoCategories from "./categories.json";

export type GalleryPhoto = { src: string; title: string; category: string };

const starterPhotos: GalleryPhoto[] = [
  { src: "/sandbar-family.jpg", title: "Family time at the sandbar", category: "Sandbar" },
  { src: "/backcountryfishing.webp", title: "Fishing the Florida Keys", category: "Fishing" },
  { src: "/snorkeling-reef-with-fish.jpg", title: "Life on the reef", category: "Snorkeling" },
  { src: "/eco-gator-sun-bathing.jpg", title: "Wildlife along the way", category: "Eco Tours" },
  { src: "/hero-boat.webp", title: "A day on the water", category: "On the Water" },
  { src: "/sandbar1.webp", title: "Islamorada sandbar blues", category: "Sandbar" },
  { src: "/backcountry-fishing1a.webp", title: "Backcountry adventures", category: "Fishing" },
  { src: "/snorkeling-4.webp", title: "Explore beneath the surface", category: "Snorkeling" },
  { src: "/eco-tour.jpg", title: "Explore the Florida Keys", category: "Eco Tours" },
];

const categories: Record<string, string> = {
  fishing: "Fishing", snorkeling: "Snorkeling", sandbar: "Sandbar",
  "eco-tours": "Eco Tours", "on-the-water": "On the Water",
};

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  const root = path.join(process.cwd(), "public", "gallery");
  async function readFolder(parts: string[] = []): Promise<GalleryPhoto[]> {
    const entries = await readdir(path.join(root, ...parts), { withFileTypes: true });
    const groups = await Promise.all(entries.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })).map(async (entry, index) => {
      const segments = [...parts, entry.name];
      if (entry.name.startsWith(".")) return [];
      if (entry.isDirectory()) return readFolder(segments);
      if (!entry.isFile() || !/\.(jpe?g|png|webp|avif)$/i.test(entry.name)) return [];
      return [{
        src: `/gallery/${segments.map(encodeURIComponent).join("/")}`,
        title: `Florida Keys adventure ${index + 1}`,
        category: categories[parts[0]] ?? parts[0] ?? "On the Water",
      }];
    }));
    return groups.flat();
  }
  const photos = await readFolder();
  return (photos.length ? photos : starterPhotos).map((photo, index) => ({
    ...photo,
    title: `Florida Keys Adventure ${index + 1}`,
    category: (photoCategories as Record<string, string>)[photo.src] ?? "On the Water",
  }));
}
