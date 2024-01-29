import { createOpenGraph } from "~/lib/create-opengraph";
import { metadata } from "./page";

export const dynamic = "force-static";

export const alt = `${metadata.title} - ${metadata.description}`;

export default createOpenGraph(metadata.title, metadata.description);
