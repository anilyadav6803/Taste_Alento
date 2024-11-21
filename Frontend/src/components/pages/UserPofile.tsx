import UserProfileForm, { UserFormData } from "@/form/user-profile-form/UserProfileForm";
import { useCreateMyUser, useGetMyUser } from "@/api/MyUserApi";
import { toast } from "sonner";

export default function UserProfile() {
  const { createUser, isLoading: isCreateUserLoading } = useCreateMyUser();
  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

  const handleSave = async (userProfileData: UserFormData) => {
    const apiRequest = {
      auth0Id: "mock-auth0-id", // Replace with dynamic value if available
      email: currentUser?.email || "mock-email@example.com", // Fallback to mock email
      name: userProfileData.name,
      addressLine1: userProfileData.addressLine1,
      city: userProfileData.city,
      country: userProfileData.country,
    };

    try {
      await createUser(apiRequest);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      {/* Pass handleSave, loading states, and currentUser as props */}
      <UserProfileForm
        onSave={handleSave}
        isLoading={isCreateUserLoading || isGetUserLoading}
        currentUser={currentUser}
        title="Edit Profile"
        buttonText="Save Changes"
      />
    </div>
  );
}
