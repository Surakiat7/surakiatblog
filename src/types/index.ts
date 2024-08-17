import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: () => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

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
