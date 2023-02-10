import Container from "@/components/Container";
import Actions from "@/components/Guestbook/Actions";
import LoadingGuestbookItem from "@/components/Guestbook/LoadingItem";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import GuestbookItem from "@/components/Guestbook/Item";

export default function Guestbook() {
  const [data, setData] = useState<GuestbookData[]>();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/guestbook");
      setData(res.data.data);
    }

    fetchData();
  }, []);

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
        <Actions />
        <div className="divider" />
        <div>
          {data ? (
            data.map((item) => <GuestbookItem {...item} key={item.id} />)
          ) : (
            <>
              <LoadingGuestbookItem />
              <LoadingGuestbookItem />
              <LoadingGuestbookItem />
              <LoadingGuestbookItem />
              <LoadingGuestbookItem />
            </>
          )}
        </div>
      </Container>
    </>
  );
}
