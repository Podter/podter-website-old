import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiOutlineArrowCircleLeft, HiOutlineHome } from "react-icons/hi";

export default function NotFound() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Podter - 404 Not found</title>
        <meta name="description" content="Podter's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="home"
        className="w-full h-screen text-center transition-colors-transform duration-300"
      >
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <h1 className="py-4 text-ctp-red">Oops!</h1>
            <h1 className="py-4">404 Not found!</h1>
            <p className="py-4 text-ctp-subtext1 max-w-[70%] m-auto">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              You are looking for something that doesn't actually exist.
            </p>
            <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
              <button
                onClick={() => router.back()}
                className="px-8 py-2 m-auto shadow-ctp-overlay2 dark:shadow-ctp-crust hover:scale-105 duration-100 flex"
              >
                <HiOutlineArrowCircleLeft
                  size={24}
                  className="mr-[6px] justify-center items-center"
                />
                Back
              </button>
              <Link href="/">
                <button className="px-8 py-2 m-auto shadow-ctp-overlay2 dark:shadow-ctp-crust hover:scale-105 duration-100 flex">
                  <HiOutlineHome
                    size={24}
                    className="mr-[6px] justify-center items-center"
                  />
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
