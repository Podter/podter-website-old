import { createOpenGraph } from "~/lib/create-opengraph";

export const dynamic = "force-static";

const title = "About";
const description = "A little bit about me.";

export const alt = `${title} - ${description}`;

export default createOpenGraph(title, description);
