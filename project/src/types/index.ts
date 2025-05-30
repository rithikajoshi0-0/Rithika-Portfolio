export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: {
    name: string;
    color: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Thought {
  title: string;
  content: string;
  tag: string;
  icon?: string;
}