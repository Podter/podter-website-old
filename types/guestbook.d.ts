type GuestbookData = {
  id: string;
  providerAccountId: string | null;
  name: string;
  avatar: string | null;
  message: string;
};

type GuestbookUser = {
  message: string;
};
