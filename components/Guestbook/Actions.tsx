import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import icon90RingWithBg from "@iconify/icons-svg-spinners/90-ring-with-bg";
import { Icon } from "@iconify/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { LogOut, XCircle, Edit3, Trash2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import getUsername, { UserData } from "@/utils/getUsername";

export default function Actions() {
  const session = useSession();
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<UserData>({
    text: "Loading...",
    url: "",
  });
  const [blacklisted, setBlacklisted] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    try {
      if (editing) {
        await axios.put("/api/guestbook", {
          message: message,
        });
      } else {
        await axios.post("/api/guestbook", {
          message: message,
        });
      }

      router.reload();
    } catch (e) {
      const error = e as AxiosError<any, any>;

      if (error.response?.status === 403) {
        setError(
          `${
            error.response.data?.data.reason || "Something went wrong."
          }. Please try again later.`
        );
      } else {
        setError("Something went wrong. Please try again later.");
      }
      setLoading(false);
    }
  }

  async function deleteMessage() {
    setLoading(true);
    try {
      await axios.delete("/api/guestbook");

      router.reload();
    } catch {
      setError("Something went wrong. Please try again later.");
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => setError(""), 5000);
  }, [error]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        if (session.status === "authenticated") {
          const blacklistedRes = await axios.get(
            "/api/guestbook/isblacklisted"
          );
          const blacklistedData = blacklistedRes.data.data as boolean;

          setBlacklisted(blacklistedData);

          const res = await axios.get("/api/guestbook/getcurrentuser");
          const data = res.data.data as GuestbookData | undefined;

          setMessage(data?.message || "");
          setEditing(!data ? false : true);
          setLoading(false);
        }
      } catch {
        setEditing(false);
        setLoading(false);
      }
    }

    fetchData();
  }, [session.status]);

  return (
    <>
      <div
        className={`flex flex-col md:flex-row md:items-center gap-2 pt-3 w-full ${
          session.status === "authenticated" ? "md:w-72" : "md:w-60"
        }`}
      >
        {session.status === "unauthenticated" ? (
          <>
            <button
              className="btn w-full gap-3 duration-75 transition-colors"
              onClick={() => signIn("github")}
            >
              Sign in with GitHub
              <Icon icon={githubIcon} className="h-6 w-6" scale={24} />
            </button>
            <button
              className="btn w-full gap-3 duration-75 transition-colors"
              onClick={() => signIn("discord")}
            >
              Sign in with Discord
              <Icon icon={discordIcon} className="h-6 w-6" scale={24} />
            </button>
          </>
        ) : session.status === "authenticated" ? (
          <div className="form-control">
            <label className="label">
              <span className="label-text-alt">
                Signed in as{" "}
                <a
                  className="tooltip tooltip-top cursor-pointer"
                  data-tip={userData.text}
                  onMouseEnter={() => {
                    if (!userData.url) {
                      getUsername(
                        session?.data?.user.providerAccountId || "",
                        setUserData
                      );
                    }
                  }}
                  href={userData.url || undefined}
                >
                  <span className="font-semibold">
                    {session.data?.user?.name}
                  </span>
                </a>
              </span>
            </label>
            <form className="input-group" onSubmit={submit}>
              <input
                type="text"
                placeholder={
                  blacklisted ? "You are blacklisted" : "your message"
                }
                className={`input input-bordered w-full ${
                  error ? "input-error" : ""
                }`}
                value={blacklisted ? "" : message}
                onChange={(e) => setMessage(e.target.value)}
                required={true}
                disabled={loading || blacklisted}
              />
              <button
                className="btn btn-square tooltip tooltip-top inline-flex font-normal normal-case duration-100"
                data-tip={editing ? "Edit" : "Sign"}
                type="submit"
                disabled={loading || blacklisted}
                aria-label={editing ? "Edit" : "Sign"}
              >
                {loading ? (
                  <Icon
                    icon={icon90RingWithBg}
                    className="h-6 w-6"
                    scale={24}
                  />
                ) : (
                  <Edit3 className="h-6 w-6" size={24} />
                )}
              </button>
            </form>
            <label className="label">
              <span
                className="label-text-alt link link-hover"
                onClick={() => {
                  setLoading(true);
                  signOut();
                }}
              >
                <LogOut
                  className="inline mr-1 align-[-0.125em] h-3 w-3"
                  size={12}
                />
                Sign out
              </span>
              {editing ? (
                <span
                  className="label-text-alt link link-hover link-error"
                  onClick={deleteMessage}
                >
                  <Trash2
                    className="inline mr-1 align-[-0.125em] h-3 w-3"
                    size={12}
                  />
                  Delete
                </span>
              ) : undefined}
            </label>
          </div>
        ) : (
          <>
            <div className="btn btn-active no-animation w-full gap-3 duration-75 transition-colors animate-pulse cursor-not-allowed" />
            <div className="btn btn-active no-animation w-full gap-3 duration-75 transition-colors animate-pulse cursor-not-allowed" />
            <div className="hidden md:block">
              <Icon icon={icon90RingWithBg} className="h-6 w-6" scale={24} />
            </div>
          </>
        )}
      </div>
      {error ? (
        <div className="toast">
          <div className="alert alert-error">
            <div>
              <XCircle size={24} className="h-6 w-6" />
              <span>{error}</span>
            </div>
          </div>
        </div>
      ) : undefined}
    </>
  );
}
