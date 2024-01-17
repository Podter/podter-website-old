import { H1, P } from "~/components/ui/typography";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <H1>Podter</H1>
        <P className="mt-3">
          A student and self-taught developer from Thailand.
        </P>
      </div>
    </>
  );
}
