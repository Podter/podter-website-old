type RobloxData = {
  thumbnails: {
    headshot: string;
    body: string;
  };
  info: {
    username: string;
    displayName: string;
    friendCount: string;
    followerCount: string;
  };
  presences: {
    userPresenceType: "offline" | "online" | "inGame" | "studio" | "unknown";
    location: string;
    placeThumbnail: string;
    lastOnline: string;
  };
};
