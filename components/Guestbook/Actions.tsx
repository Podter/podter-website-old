import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import { Icon } from "@iconify/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Send, LogOut, XCircle } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Actions() {
  const session = useSession();
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function create(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await axios.post("/api/guestbook", {
        message: message,
      });

      router.reload();
    } catch {
      setError("Something went wrong. Please try again later.");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  return (
    <div className="flex flex-col md:flex-row gap-2 w-60 pt-3">
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
      ) : (
        <div className="form-control">
          <label className="label">
            <span className="label-text-alt">
              Signed in as{" "}
              <span className="font-semibold">{session.data?.user?.name}</span>
            </span>
          </label>
          <form className="input-group" onSubmit={create}>
            <input
              type="text"
              placeholder="your message"
              className={`input input-bordered ${error ? "input-error" : ""}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required={true}
            />
            <button
              className="btn btn-square tooltip tooltip-top inline-flex font-normal normal-case duration-100"
              data-tip="Send"
              type="submit"
            >
              <Send className="h-6 w-6" size={24} />
            </button>
          </form>
          <label className="label">
            <span
              className="label-text-alt link link-hover"
              onClick={() => signOut()}
            >
              <LogOut
                className="inline mr-1 align-[-0.125em] h-3 w-3"
                size={12}
              />
              Sign out
            </span>
          </label>
        </div>
      )}
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
    </div>
  );
}
