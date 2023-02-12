import { Icon } from "@iconify/react";
import icon90RingWithBg from "@iconify/icons-svg-spinners/90-ring-with-bg";
import { useState, useEffect } from "react";
import axios from "axios";
import LanguageProgress from "./LanguageProgress";
import Total from "./Total";

export default function WakaTime() {
  const [data, setData] = useState<WakaTimeData>();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/wakatime");
      const data = res.data.data as WakaTimeData;

      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-[34rem] md:h-[22rem] bg-base-100 shadow-xl p-8 rounded-2xl hover:scale-[1.025] transition-all duration-75 cursor-default">
      {data ? (
        <>
          <div className="flex flex-row items-center h-6 gap-4">
            <div className="flex flex-col">
              <p className="text-xl font-semibold">WakaTime stats</p>
              <p className="text-base">Last 7 days</p>
            </div>
          </div>
          <div className="divider" />
          <div className="flex flex-col md:flex-row items-center w-full md:h-full md:w-auto">
            <div className="flex flex-col justify-center items-center w-full md:h-full md:w-auto">
              <Total title="Total" time={data.total} />
              <div className="py-3 md:divider" />
              <Total title="Daily average" time={data.dailyAverage} />
            </div>
            <div className="divider md:divider-horizontal" />
            <div className="flex flex-col w-full gap-1">
              <p className="text-base font-semibold">Most used languages</p>
              {data.languages.map((language, index) => (
                <LanguageProgress key={index} {...language} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <Icon icon={icon90RingWithBg} className="h-8 w-8" scale={32} />
        </div>
      )}
    </div>
  );
}
