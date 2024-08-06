import { apiEndPoint } from "@/const/api";
import axios, { AxiosResponse } from "axios";
import { ApiResponse } from "@/const/api";

export const SendContact = async (
  body: SendContactRequest
): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(
      `${apiEndPoint}/api/v1/contact`,
      body
    );
    return response.data;
  } catch (error: any) {
    console.error("Error sending contact:", error);
    throw error.response?.data || error;
  }
};

export type SendContactRequest = {
    title: string;
    firstName?: string;
    lastName?: string;
    phoneNumber: string;
    email: string;
    message: string;
  };
