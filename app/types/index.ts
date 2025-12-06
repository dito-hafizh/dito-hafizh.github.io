export type Me = {
  name: string;
  profession: string;
  description: string;
  email: string;
  phone: string;
  city: string;
  country: string;
};

export type Work = {
  company: string;
  positions: WorkPosition[];
  city: string;
  country: string;
  link?: string;
};

export type WorkPosition = {
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  city: string;
  country: string;
  startDate: string;
  endDate: string;
  description: string;
};
