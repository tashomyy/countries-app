import { AxiosError } from "axios";
import { apiClient } from "./apiClient";
import { toast } from "react-toastify";

interface ApiResponse {
  error: boolean;
  msg: string;
  data: {};
}

interface ApiError {
  message: string;
}

export const fetchSingleCityWithPopulation = async (
  city: string
): Promise<ApiResponse> => {
  try {
    const res = await apiClient.post<ApiResponse>(
      "countries/population/cities",
      { city }
    );
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    const errorMessage =
      axiosError.response?.data?.message ||
      axiosError.message ||
      "Failed to fetch city population";

    toast.error(`Error fetching city population: ${errorMessage}`);
    throw new Error(errorMessage);
  }
};
