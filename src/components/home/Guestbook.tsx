import Message, { type MessageData } from "@/components/guestbook/Message";
import { TypographyP } from "@/components/ui/typography";
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
  const { data, isLoading, error } = useSWR<GuestbookResponse, unknown>(
    "/api/guestbook",
    httpFetch<GuestbookResponse>,
  );

  if (isLoading || !data) return <div>Loading...</div>;
  if (error) {
    return (
      <TypographyP className="text-destructive mt-3 -mb-3">
        Oops, something went wrong
      </TypographyP>
    );
  }

  return (
    <div className="flex flex-col mt-6 gap-3">
      {data.data.map(({ messageData, userData }, i) => (
        <Message message={messageData} user={userData} key={i} />
      ))}
    </div>
  );
}
