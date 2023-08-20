import Message, { type MessageData } from "@/components/guestbook/Message";
import GuestbookSkeletons from "./GuestbookSkeletons";
import { TypographyP } from "@/components/ui/typography";
import type { UserData } from "@/lib/getUser";
import { httpFetch } from "@/lib/utils";
import useSWR from "swr";
import { useEffect } from "react";

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

  useEffect(() => {
    if (error) {
      window.plausible("Error", {
        props: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-base-to-string
          error: `${error}`,
          path: location.pathname,
          action: "Fetch messages",
        },
      });
    }
  }, [error]);

  if (isLoading || !data) return <GuestbookSkeletons />;
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
