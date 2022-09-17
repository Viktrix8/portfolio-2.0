interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo {
  _type: "pageInfo";
  backgroundInformation: string;
  email: string;
  role: string;
  name: string;
  heroImage: Image;
  profilePic: Image;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Technology extends SanityBody {
  _type: "technology";
  title: string;
  progress: number;
  image: Image;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
  progress: number;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
  image: Image;
}

export interface Experience extends SanityBody {
  _type: "experience";
  companyName: string;
  companyImage: Image;
  dateStarted?: string;
  dateEnded?: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}
