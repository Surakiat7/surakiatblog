// export const apiEndPoint = process.env.NEXT_PUBLIC_API_ENDPOINT
// export const devEndPoint = process.env.NEXT_PUBLIC_DEV_API_ENDPOINT

export type ApiResponse = {
   status: number,
   success: boolean,
   message_EN: string,
   message_TH: string,
   data: any
 }