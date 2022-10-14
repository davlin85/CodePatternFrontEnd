export interface NavigationProps {
  navigation: any;
  navigate: any;
  getParam: any;
}

export interface NavigationStackProps {
  navigation: any;
}

export interface ISignUpStatus {
  email: string;
  password: string;
  userConfirmed: boolean;
}

export interface IConfirmRegistrationStatus {
  confirmed: boolean;
}

export interface IAuthTokens {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

export interface IAuthError {
  code: ErrorCodes;
  message: string;
}

export interface Props {
  children: React.ReactNode;
}

export interface ISignInData {
  email: string;
  password: string;
}

export enum ErrorCodes {
  userNotConfirmed = 1,
  badRequest = 2,
  invalidToken = 3,
  tokenExpired = 4,
  invalidCode = 5,
  expiredCode = 6,
  userAlreadyConfirmed = 7,
  sentTooManyConfirmationCodes = 8,
  badPassword = 9,
  userAlreadyExists = 10,
  badEmail = 11,
}
