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

export type JSONAwardsData = {
  year: number;
  items: string[];
};

export type JSONFAQData = {
  question: string;
  answer: string;
};

export type JSONCurriculumData = {
  name: string;
  description: string;
}