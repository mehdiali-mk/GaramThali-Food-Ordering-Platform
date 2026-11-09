import { Link } from "react-router-dom";
import MobileNav from "./MobileNav.tsx";
import MainNav from "./MainNav.tsx";

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-4">
      <div className="md:container md:mx-auto mx-3 flex justify-between items-center">
        <Link
          to={"/"}
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          garam
          <span className="uppercase">
            Thal<span className="inline-block lowercase">i</span>
          </span>
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
}
