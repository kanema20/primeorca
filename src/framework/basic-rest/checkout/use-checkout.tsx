// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { useMutation } from "react-query";

export interface CheckoutInputType {
  name: string;
  // lastName: string;
  // phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  save: boolean;
  note: string;
}


async function checkout(input: CheckoutInputType) {
  // return http.post(API_ENDPOINTS.ChangeEmail, input);
  return input;
}
export const useCheckoutMutation = () => {
  return useMutation((input: CheckoutInputType) => checkout(input), {
    onSuccess: (data) => {
      console.log(data, "Checkout success response");
    },
    onError: (data) => {
      console.log(data, "Checkout error response");
    },
  });
};
