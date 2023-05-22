import makeMetadata from "@/lib/makeMetadata";

export const metadata = makeMetadata(
  "Guestbook",
  "Sign my guestbook and leave your mark. Feel free to leave any message here."
);

export default function Page() {
  return <div>guestbook</div>;
}
