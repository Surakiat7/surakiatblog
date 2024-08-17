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

export type SplashButtonProps = {
  children: ReactNode;
  className?: string;
  scrollToAbout: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface MediaQueryRange {
  min: string;
  max?: string;
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

export interface BeamType {
  top: number;
  left: number;
  transition?: any;
}

export type BlockProps = {
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

export interface AboutHeroProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

export interface HeaderBlockProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

export interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string;
}

type TurnstileStatus = 'success' | 'error' | 'expired' | 'required';

export interface TurnstileWidgetProps {
  isFormComplete: boolean;
  setTurnstileStatus: React.Dispatch<React.SetStateAction<TurnstileStatus>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ConfettiOptions extends confetti.Options {
  useWorker?: boolean;
}

export interface TabProps extends ShiftingDropDownMenuProps {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
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

export interface GradientGridProps {
  theme: 'light' | 'dark';
  strokeColor: string;
}

export interface DarkGridHeroElementProps {
  scrollToAbout: () => void;
}

export interface HeaderBlockProps {
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

