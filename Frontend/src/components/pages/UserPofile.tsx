import UserProfileForm, { UserFormData } from "@/form/user-profile-form/UserProfileForm";
import { useCreateMyUser } from "@/api/MyUserApi";
import { toast } from "sonner";

// Mock current user data or fetch it dynamically
const currentUser = {
  name: "",
  addressLine1: "",
  city: "",
  country: "",
  email: "",
};

export default function UserProfile() {
  const { createUser, isLoading } = useCreateMyUser();

  const handleSave = async (userProfileData: UserFormData) => {
    const apiRequest = {
      auth0Id: "mock-auth0-id", // Replace with dynamic value if available
      email: currentUser.email || "mock-email@example.com", // Replace with the current user's email
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
      {/* Pass handleSave, isLoading, and currentUser as props */}
      <UserProfileForm
        onSave={handleSave}
        isLoading={isLoading}
        currentUser={currentUser}
        title="Edit Profile"
        buttonText="Save Changes"
      />
    </div>
  );
}
