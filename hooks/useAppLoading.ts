import Router from "next/router";
import { useState, useEffect } from "react";

export default function useAppLoading(
  onLoadStart?: () => void,
  onLoadEnd?: () => void
) {
  const [loadingGuestbook, setLoadingGuestbook] = useState(false);

  useEffect(() => {
    function start(e: any) {
      if (typeof e === "string" && e === "/guestbook" ? true : false) {
        setLoadingGuestbook(true);
      } else {
        setLoadingGuestbook(false);
      }

      if (onLoadStart) {
        onLoadStart();
      }
    }

    function end() {
      setLoadingGuestbook(false);

      if (onLoadEnd) {
        onLoadEnd();
      }
    }

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return { loadingGuestbook };
}
