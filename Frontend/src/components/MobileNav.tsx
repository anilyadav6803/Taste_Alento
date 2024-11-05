import { Separator } from "@radix-ui/react-separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./UI/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Button } from "./UI/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLink"



export default function MobileNav() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="test-orange-500" />
      </SheetTrigger>
      <SheetContent className="">
        <SheetTitle>
          {isAuthenticated ? (
            
            <span className="flex items-center font-bold gap-2">
            <CircleUserRound className="text-orange-500" size={20} />
            {user?.email}
          </span>
          ) : (
            <span> Welcome to Taste Alento</span>
           
           
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4 ">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              className="flex-1 font-bold bg-orange-500"
              onClick={async () => await loginWithRedirect({})}
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
