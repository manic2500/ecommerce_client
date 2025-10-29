import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";


export default function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'ghost'} className="focus-visible:ring-0 focus-visible:ring-offset-0">
                        {(theme === 'system')
                            ? <SunMoon />
                            : theme === 'dark' ?
                                <MoonIcon />
                                : <SunIcon />
                        }
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
                        System
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
                        Dark
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>
                        Light
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};