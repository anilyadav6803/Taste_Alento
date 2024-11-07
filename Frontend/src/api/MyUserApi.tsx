import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: string;
    email: string;
};

export const useCreateMyUser = () => {
    // Define the mutation function
    const createMyUserRequest = async (data: CreateUserRequest) => {
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to create user");
        }

        return response.json(); // Return the response JSON if needed
    };

    // Use the mutation function with useMutation
    const {
        mutateAsync: createUser,
        isLoading: isUserCreating,
        isError: userCreateError,
        isSuccess: userCreateSuccess
    } = useMutation(createMyUserRequest);

    // Return the necessary properties for use in components
    return {
        createUser,
        isUserCreating,
        userCreateError,
        userCreateSuccess
    };
};
