export type Me = {
  name: string;
  profession: string;
  description: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  github: string;
  linkedin: string;
};

export type Work = {
  company: string;
  positions: WorkPosition[];
  city?: string;
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

export type Project = {
  name: string;
  stacks: string[];
  description: string;
  link: string;
  logo?: string;
};

export type Publication = {
  title: string;
  publisher: string;
  date: string;
  description: string;
  link: string;
};

export type Certification = {
  name: string;
  issuer: string;
  startDate: string;
  endDate: string;
  link: string;
};
