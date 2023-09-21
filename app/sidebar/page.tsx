import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MyDrawer } from "./_components/MyDrawer";

const MENU_ITEMS = Array.from({ length: 10 }).map((_, i) => `item ${i}`);

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">menu</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>mobile sidebar</SheetTitle>
          <SheetDescription>
            <ul>
              {MENU_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default function page() {
  return (
    <div className="flex h-screen">
      <div className="hidden w-60 bg-gray-800 p-4 sm:block">
        <p>desktop sidebar</p>
        <ul>
          {MENU_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex-1 space-y-4 bg-gray-700 p-4">
        <div className="flex gap-4">
          <MobileMenu />
          <MyDrawer />
        </div>
        <p>main content</p>
      </div>
    </div>
  );
}
