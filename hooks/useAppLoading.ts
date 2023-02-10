import Router from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";

export default function useAppLoading() {
  useEffect(() => {
    function start() {
      NProgress.start();
    }

    function end() {
      NProgress.done(true);
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

  return {};
}
