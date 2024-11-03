import axiosInstance from "@/lib/axiosInstance";

export const fetcher = async (url: string) => {
  let res = await axiosInstance.get(url);
  if (!res.data) {
    throw Error(res.data.message);
  }
  return res.data;
};
