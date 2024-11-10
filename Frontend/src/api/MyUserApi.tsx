import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    try {
      const accessToken = await getAccessTokenSilently();
      console.log("AccessToken:", accessToken);  // Debug
      const response = await fetch(`${API_BASE_URL}/api/my/user`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Response status:", response.status);  // Debug
  
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };
  

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};
