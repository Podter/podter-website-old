type ThumbnailsResponse = {
  data: {
    imageUrl: string;
  }[];
};

type UserCount = {
  count: number;
};

type RobloxData = {
  id: string;
  playerHeadshot: string;
  playerBody: string;
  name: string;
  displayName: string;
  friendCount: number;
  followerCount: number;
  lastOnline: string;
  userPresenceType: "online" | "inGame" | "studio" | "offline";
  lastLocation: string;
  placeThumbnail: string | undefined;
};
