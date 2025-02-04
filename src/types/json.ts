export type JSONActivityData = {
  name: string;
  imageName: string;
};

export type JSONClubInfoData = {
  startedYear: number;
  totalAwards: number;
  totalMembers: number;
};

export type JSONContactInfoData = {
  name: string;
  [key: string]: string;
};
