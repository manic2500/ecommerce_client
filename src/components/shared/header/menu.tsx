import { Button } from "@/components/ui/button";


import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import ModeToggle from "./mode-toggle";
import { useLogoutMutation } from "@/redux/api/authApi";

export default function Menu() {
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        // clear redux state if needed
    };

    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <ModeToggle />
                <Button asChild variant={'ghost'}>
                    <Link to={'/cart'}>
                        <ShoppingCart /> Cart
                    </Link>
                </Button>
                <Button onClick={async () => {
                    await handleLogout();
                    navigate('/login'); // from `const navigate = useNavigate();`
                }}>
                    <UserIcon /> Sign Out
                </Button>

            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start">
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle />
                        <Button asChild variant={'ghost'}>
                            <Link to={'/cart'}>
                                <ShoppingCart /> Cart
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link to={'/login'}>
                                <UserIcon /> Sign Out
                            </Link>
                        </Button>
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
};