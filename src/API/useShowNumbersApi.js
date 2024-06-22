import { useQuery } from "@tanstack/react-query";
// API
import API from "./Api";

export const fetchNumbers = async () => {
  const res = await API.get("api/numbers");
  return res.data;
};

export default function useShowNumbersApi() {
  return useQuery({
    queryKey: ["numbers"],
    queryFn: () => fetchNumbers(),
  });
}
