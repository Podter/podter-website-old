import githubIcon from "@iconify/icons-fa6-brands/github";
import discordIcon from "@iconify/icons-fa6-brands/discord";
import { Icon } from "@iconify/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Send, LogOut } from "lucide-react";
import { useState } from "react";

export default function Actions() {
  const session = useSession();

  const [message, setMessage] = useState("");

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
          <div className="input-group">
            <input
              type="text"
              placeholder="your message"
              className="input input-bordered"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn btn-square">
              <Send className="h-6 w-6" size={24} />
            </button>
          </div>
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
    </div>
  );
}
