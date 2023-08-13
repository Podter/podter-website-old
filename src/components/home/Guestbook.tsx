import Message from "@/components/guestbook/Message";

export default function Guestbook() {
  return (
    <div className="flex flex-col mt-6 gap-3">
      {[...Array(3)].map((_, i) => (
        <Message key={i} />
      ))}
    </div>
  );
}
