import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export type UserData = {
  text: string;
  url: string;
};

export default async function getUsername(
  id: string,
  setState?: Dispatch<SetStateAction<UserData>>
): Promise<UserData> {
  try {
    const res = await axios.get(`/api/getusername?id=${id}`);
    const data = res.data.data;

    const userData = {
      text: `${data.username} on ${data.provider}`,
      url: data.url,
    };

    if (setState) {
      setState(userData);
    }

    return userData;
  } catch {
    const userData = {
      text: "Failed to load.",
      url: "",
    };

    if (setState) {
      setState(userData);
    }

    return userData;
  }
}
