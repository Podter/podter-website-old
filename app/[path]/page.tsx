import { pages } from "~/constants/pages";

export function generateStaticParams() {
  return Object.entries(pages).map(([name]) => ({
    path: name,
  }));
}

export default function Page() {
  return <div>page</div>;
}
