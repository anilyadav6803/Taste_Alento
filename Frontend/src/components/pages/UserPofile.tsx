import UserProfileForm from "@/form/user-profile-form/UserProfileForm";
import { useUpdateMyUser } from "@/api/MyUserApi";

export default function UserProfile() {
  const { updateUser, isLoading } = useUpdateMyUser();

  const handleSave = (userProfileData: {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
    email?: string;
  }) => {
    // Transform userProfileData to match UpdateMyUserRequest
    const apiRequest = {
      name: userProfileData.name,
      addline1: userProfileData.addressLine1, // Map addressLine1 to addline1
      city: userProfileData.city,
      country: userProfileData.country,
    };

    updateUser(apiRequest); // Pass the transformed data to updateUser
  };

  return (
    <div>
      <UserProfileForm onSave={handleSave} isLoading={isLoading} />
    </div>
  );
}
