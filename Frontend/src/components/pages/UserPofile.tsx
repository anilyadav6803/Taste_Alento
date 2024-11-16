import UserProfileForm, { UserFormData } from "@/form/user-profile-form/UserProfileForm";
import { useCreateMyUser, useGetMyUser } from "@/api/MyUserApi";
import { toast } from "sonner";

export default function UserProfile() {
  // Fetch current user data dynamically
  const { currentUser, isLoading: userLoading } = useGetMyUser();

  // Get the mutation hook for creating/updating the user
  const { createUser, isLoading: saveLoading } = useCreateMyUser();

  const handleSave = async (userProfileData: UserFormData) => {
    const apiRequest = {
      name: userProfileData.name,
      addressLine1: userProfileData.addressLine1,
      city: userProfileData.city,
      country: userProfileData.country,
    };

    try {
      await createUser(apiRequest); // Create or update the user via API
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  // If the current user is still loading, return a loading state
  if (userLoading) {
    return <div>Loading current user...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      {/* Pass handleSave, isLoading, and currentUser as props */}
      <UserProfileForm
        onSave={handleSave}
        isLoading={saveLoading}
        currentUser={currentUser}
        title="Edit Profile"
        buttonText="Save Changes"
      />
    </div>
  );
}
