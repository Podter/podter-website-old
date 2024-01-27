import { createOpenGraph } from "~/lib/create-opengraph";

export const dynamic = "force-static";

const title = "About";
const description = "Get to know me a little better.";

export const alt = `${title} - ${description}`;

export default createOpenGraph(title, description);
