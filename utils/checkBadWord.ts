import wordList from "bad-words/lib/lang.json";

const badWords = [
  ...wordList.words,
  "gay",
  "gays",
  "pousay",
  "deek",
  "deeks",
  "penıs",
];

export default function checkBadWord(message: string): boolean {
  const words = badWords.filter((word) => {
    if (message.includes(word)) {
      return true;
    }
  });

  if (words.length) {
    return true;
  } else {
    return false;
  }
}
