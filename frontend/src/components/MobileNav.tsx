import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet.tsx";
import { Separator } from "./ui/separator.tsx";
import { Button } from "./ui/button.tsx";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="mt-8 mx-3 mb-2">
          <span className="text-lg">Welcome to Garam Thali!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 mx-3 font-bold bg-orange-500">
            {" "}
            Login In{" "}
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
