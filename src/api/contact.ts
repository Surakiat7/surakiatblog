import { apiEndPoint } from '@/@core/const/api';
import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '@/types';
import { SendContactRequest } from '@/types';

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
    console.error('Error sending contact:', error);
    throw error.response?.data || error;
  }
};