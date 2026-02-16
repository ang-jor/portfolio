export type Project = {
  id: string;
  thumbnail?: string;
  title: string;
  info: string;
  role?: string;
  timeline?: string;
  tags: string[];
  withAlert?: boolean;
  twoColumns?: boolean;
  description?: string[];
  images?: string[];
  link?: string;
};
