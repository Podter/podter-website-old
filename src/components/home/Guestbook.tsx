import type { PropsWithChildren } from "react";
import Message, { type MessageData } from "@/components/guestbook/Message";
import GuestbookSkeletons from "./GuestbookSkeletons";
import { TypographyP } from "@/components/ui/typography";
import type { UserData } from "@/lib/getUser";
import { httpFetch } from "@/lib/utils";
import useSWR from "swr";
import { TypographyHomeSection } from "@/components/ui/typography";
import Spinner from "@/components/ui/spinner";

type GuestbookResponse = {
  data: {
    messageData: MessageData;
    userData: UserData;
  }[];
};

function GuestbookTitle({ children }: PropsWithChildren) {
  return (
    <TypographyHomeSection id="guestbook" className="!mt-10 flex items-center">
      <a
        data-rehype-autolink-headings="true"
        href="#guestbook"
        className="rehype-autolink-headings mr-2"
      >
        Guestbook
      </a>
      {children}
    </TypographyHomeSection>
  );
}

export default function Guestbook() {
  const { data, isLoading, error } = useSWR<GuestbookResponse, unknown>(
    "/api/guestbook",
    httpFetch<GuestbookResponse>,
  );

  if (isLoading || !data) {
    return (
      <>
        <GuestbookTitle>
          <Spinner />
        </GuestbookTitle>
        <GuestbookSkeletons />
      </>
    );
  }
  if (error) {
    return (
      <>
        <GuestbookTitle />
        <TypographyP className="text-destructive mt-3 -mb-3">
          Oops, something went wrong
        </TypographyP>
      </>
    );
  }

  return (
    <>
      <GuestbookTitle />
      <div className="flex flex-col mt-6 gap-3">
        {data.data.map(({ messageData, userData }, i) => (
          <Message message={messageData} user={userData} key={i} />
        ))}
      </div>
    </>
  );
}
