export type NavLinkType = {
  id: string;
  title: string;
};

export type ServicesIconType = {
  title: string;
  model: () => JSX.Element;
  skillGroups: string[];
};

export type TechnologiesIconType = {
  name: string;
  icon: string;
};

export type ExperienceType = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type TestimonialType = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

export type ProjectType = {
  name: string;
  description: string[];
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  video_iframe_links?: { name: string; url: string }[];
  figma_links?: { name: string; url: string }[];
};
