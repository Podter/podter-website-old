type WakaTimeLanguage = {
  name: string;
  time: string;
  percent: number;
};

type WakaTimeData = {
  total: string;
  dailyAverage: string;
  languages: WakaTimeLanguage[];
};
