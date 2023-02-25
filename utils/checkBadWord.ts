import axios from "axios";

export default async function checkBadWord(
  message: string
): Promise<boolean | undefined> {
  try {
    const res = await axios.post(
      "https://neutrinoapi.net/bad-word-filter",
      {
        content: message,
        catalog: "strict",
      },
      {
        headers: {
          "User-ID": process.env.NEUTRINO_API_USER_ID,
          "API-Key": process.env.NEUTRINO_API_KEY,
        },
      }
    );

    if (res.data["is-bad"] === true) {
      return true;
    }
    return false;
  } catch {
    return undefined;
  }
}
