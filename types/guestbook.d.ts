type GuestbookForm = {
  message: string;
};

type GuestbookMessageData = {
  created: Date;
  updatedAt: Date;
  updated: boolean;
  user: UserData;
  message: string;
};

type UserData = {
  name: string;
  username: string;
  url: string;
  provider: string;
  avatar: string;
};
