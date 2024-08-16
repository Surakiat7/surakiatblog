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
  