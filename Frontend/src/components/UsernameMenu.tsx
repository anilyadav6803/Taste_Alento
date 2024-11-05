import { Separator } from "@radix-ui/react-separator";
import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./UI/dropdown-menu";
import { Button } from "./UI/button";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 from Auth0

export default function UsernameMenu() {
  const { user, logout } = useAuth0(); // Correctly destructuring user from useAuth0

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-orange-500 hover:text-orange-400 flex items-center px-3 font-bold gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.email} {/* Display user's email */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem className="my-2">
          <Link to="/user-profile" className="hover:text-orange-500 font-bold">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator className="bg-gray-200 h-[1.5px]" />

        <DropdownMenuItem className="my-2 ">
          <Button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="text-orange-500 hover:text-orange-400 font-bold flex flex-1"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
