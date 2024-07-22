import { LoginRequest, LoginResponse } from "./types";
import axiosInstance from "../../config/axios";

export const loginUser = async (user: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post(`/auth/login`, user);
    return await response.data
}