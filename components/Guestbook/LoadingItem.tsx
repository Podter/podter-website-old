import { useState, useEffect } from "react";

export default function LoadingGuestbookItem() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let characters = "";
    for (let i = 0; i <= Math.floor(Math.random() * 151); i++) {
      characters += "A";
    }

    setMessage(characters);
  }, []);

  return (
    <div className="flex flex-col space-y-1 mb-4">
      <div className="flex w-full text-sm items-center gap-2">
        <div className="w-6 h-6">
          <div className="avatar">
            <div className="flex justify-center items-center w-6 h-6 rounded-full bg-neutral animate-pulse" />
          </div>
        </div>
        <p className="bg-neutral rounded text-neutral select-none animate-pulse md:max-w-none max-w-[75ch] overflow-hidden text-ellipsis whitespace-nowrap">
          <span>Someone: </span>
          {message}
        </p>
      </div>
    </div>
  );
}
