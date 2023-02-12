import Container from "@/components/Container";
import Actions from "@/components/Guestbook/Actions";
import LoadingGuestbookItem from "@/components/Guestbook/LoadingItem";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import GuestbookItem from "@/components/Guestbook/Item";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { XCircle } from "lucide-react";

export default function Guestbook() {
  const router = useRouter();

  const [data, setData] = useState<GuestbookData[]>();
  const [error, setError] = useState(true);

  if (data) {
    NProgress.done(true);
  }

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/guestbook");
      setData(res.data.data);
      NProgress.done(true);
    }

    fetchData();
  }, []);

  if (router.query.unauthorized) {
    setTimeout(() => setError(false), 5000);
  }

  return (
    <>
      <Head>
        <title>Guestbook | Podter</title>
        <meta
          name="description"
          content="Sign my guestbook and leave your mark. Feel free to leave any message here."
        />
        <meta property="og:title" content="Guestbook" />
        <meta
          property="og:description"
          content="Sign my guestbook and leave your mark. Feel free to leave any message here."
        />
        <meta
          property="og:image:url"
          content="http://preview.podter.xyz/api/og?title=Guestbook"
        />
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
      {error && router.query.unauthorized ? (
        <div className="toast">
          <div className="alert alert-error">
            <div>
              <XCircle size={24} className="h-6 w-6" />
              <span>Account already exists. Please try again later.</span>
            </div>
          </div>
        </div>
      ) : undefined}
    </>
  );
}
