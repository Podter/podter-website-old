import badWords from "@/constants/badWords";
import Filter from "bad-words";

const filter = new Filter();
filter.addWords(...badWords);

export default filter;
