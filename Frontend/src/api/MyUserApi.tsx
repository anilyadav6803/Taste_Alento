import { useMutation, useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";
import { User } from "@auth0/auth0-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:7000";

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};



// Hook for creating a user
export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(
    createMyUserRequest
  );

  return { createUser, isLoading, isError, isSuccess };
};

// Hook for getting the current user's information
export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUserRequest = async (): Promise<User> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    return response.json();
  };

  const { data: currentUser, isLoading, error } = useQuery(
    "fetchCurrentUser",
    getMyUserRequest
  );

  if (error) {
    toast.error(error.toString());
  }

  return { currentUser, isLoading };
};
