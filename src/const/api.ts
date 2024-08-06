export const apiEndPoint = process.env.NEXT_PUBLIC_API_ENDPOINT
export const devEndPoint = process.env.NEXT_PUBLIC_DEV_API_ENDPOINT

export type ApiResponse = {
  statusCode: number;
  messageTH: string;
  messageEN: string;
  data?: any;
};