import type { UserPresenceType } from "noblox.js";

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
    userPresenceType: UserPresenceType;
    location: string;
    placeThumbnail: string;
  };
};
