import { useMutation, useQueryClient } from "@tanstack/react-query";
// API base
import API from "./Api";
// Toastify
import { toast } from "react-toastify";
// Api
import { fetchNumbers } from "./useShowNumbersApi";

export const useAddNumberApi = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (phoneNumber) => {
      const res = await API.post("api/numbers", { number: phoneNumber });
      return res.data;
    },

    // onSuccess: () => {
    //   qc.prefetchQuery({
    //     queryKey: ["numbers"],
    //     queryFn: () => fetchNumbers(),
    //   });
    // },

    onError: (err) => {
      console.error(err);
      const errorMessage =
        err?.response?.data?.message || err?.message || "An error occurred";
      // Toastify
      // toast.error(errorMessage);
    },
  });
};
