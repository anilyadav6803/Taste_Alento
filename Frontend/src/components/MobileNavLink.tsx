import { Link } from "react-router-dom";
import { Button } from "./UI/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLink() {
    const {logout} = useAuth0()
  return (
    <>
    <Link className="text-orange-00 hover:text-orange-400 font-bold flex flex-1"
     to="/user-profile"
     >
        User Profile
     </Link>
     <Button  onClick={() => logout()} className="text-orange-500 hover:text-orange-400 font-bold flex flex-1 px-3">
      Log Out
     </Button>
    </>
  )
}
