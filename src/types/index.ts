import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type BreadcrumbsComponentProps = {
  items: { name: string; href?: string }[];
};

export interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

export interface SearchButtonProps {
  onSearch: (query: string) => void;
}

export interface EducationData {
  logo: string;
  program: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Post {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
  content: Array<{
    imagesrc?: string;
    subtitle: string;
    snippet: string;
    paragraph: string;
  }>;
  views: number;
  createdAt: string;
}

export type FallbackImageProps = {
  src: string;
  alt: string;
  fallbackSrc: string;
  [key: string]: any;
};

export interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export interface ModalNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  title: string;
}

export interface ShiftingDropDownMenuProps {
  onScrollTo: (ref: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  blogRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
  exprienceRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export interface CardEducationsProps {
  data: EducationData[];
}

export interface GradientButtonProps {
  title: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export type ApiResponse = {
  statusCode: number;
  messageTH: string;
  messageEN: string;
  data?: any;
};

export type ChildrenProps = {
  children: ReactNode;
};

export type SendContactRequest = {
  title: string;
  firstName?: string;
  lastName?: string;
  phoneNumber: string;
  email: string;
  message: string;
};

export type MobileScreenContextValue = {
  mobileScreen: boolean;
};
