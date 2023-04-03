export default function getUserPresenceType(
  presenceNumber: 0 | 1 | 2 | 3
): "offline" | "online" | "inGame" | "studio" {
  switch (presenceNumber) {
    case 1:
      return "online";
    case 2:
      return "inGame";
    case 3:
      return "studio";
    default:
      return "offline";
  }
}
