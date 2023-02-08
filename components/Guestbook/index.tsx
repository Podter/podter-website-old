import Container from "@/components/Container";
import GuestbookItem from "@/components/Guestbook/Item";
import Actions from "@/components/Guestbook/Actions";
import LoadingGuestbookItem from "./LoadingItem";
import Head from "next/head";

type GuestbookProps = {
  data?: GuestbookData[];
  userMessage?: GuestbookUser | null;
  loading?: boolean;
};

export default function Guestbook({
  data = [],
  userMessage = { message: "" },
  loading = false,
}: GuestbookProps) {
  return (
    <>
      <Head>
        <title>Guestbook | Podter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-ctp-red to-ctp-blue bg-clip-text text-transparent">
            Guestbook
          </span>
        </h1>
        <p className="pt-6">
          Sign my guestbook and leave your mark. Feel free to leave any message
          here.
        </p>
        <Actions userMessage={userMessage} parentLoading={loading} />
        <div className="divider" />
        <div>
          {loading ? (
            <>
              <LoadingGuestbookItem />
              <LoadingGuestbookItem />
              <LoadingGuestbookItem />
              <LoadingGuestbookItem />
              <LoadingGuestbookItem />
            </>
          ) : (
            data.map((item) => <GuestbookItem key={item.id} {...item} />)
          )}
        </div>
      </Container>
    </>
  );
}
