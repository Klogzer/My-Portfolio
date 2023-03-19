import { ReactNode } from 'react';


export interface CTA {
    color: string;
    name: string;
    url: string;
    icon: ReactNode;
}

export interface Technology {
    id: number;
    name: string;
    icon: JSX.Element;
}


export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: Technology[];
    link_target?: string;
    link_text?: string;
    link?: string;
    link_target2?: string;
    link_text2?: string;
    link2?: string;
}

export interface TimelineItem {
    id: number;
    title: string;
    location: string;
    description: string;
    description2?: string;
    technologies?: Technology[];
    buttonText: string | null;
    date: string;
    icon: JSX.Element;
}

export interface SidebarItem {
    title: string;
    path: string;
    icon: JSX.Element;
    cName: string;
}
export interface ArticleTeaserItem {
    title: string;
    author: string;
    date: string;
    description: string;
    url: string;
}

export interface Article {
    title: string;
    author: string;
    date: string;
    description: string;
    url: string;
    content: {
      title: string;
      paragraphs: string[];
    };
  }
  