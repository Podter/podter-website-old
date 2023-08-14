import Message, { type MessageData } from "@/components/guestbook/Message";
import type { UserData } from "@/lib/getUser";
import { httpFetch } from "@/lib/utils";
import useSWR from "swr";

type GuestbookResponse = {
  data: {
    messageData: MessageData;
    userData: UserData;
  }[];
};

export default function Guestbook() {
  const { data, isLoading, error } = useSWR(
    "/api/guestbook",
    httpFetch<GuestbookResponse>,
  );

  if (isLoading || !data) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col mt-6 gap-3">
      {data.data.map(({ messageData, userData }, i) => (
        <Message message={messageData} user={userData} key={i} />
      ))}
    </div>
  );
}
