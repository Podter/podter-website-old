type WakaTimeData = {
  human_readable_total_including_other_language: string;
  human_readable_daily_average_including_other_language: string;
  languages: {
    name: string;
    text: string;
    percent: number;
  }[];
};
