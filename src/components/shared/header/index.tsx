import { Link } from "react-router-dom";
import Menu from "./menu";
import { APP_NAME } from "@/lib/constants";

export default function Header() {
    return (
        <div className="w-full border-b">
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link to={'/home'} className="flex-start">
                        <img src={'/images/logo.svg'} alt={`${APP_NAME}`} height={48} width={48} />
                        <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
                    </Link>
                </div>
                <Menu />
            </div>
        </div>
    );
};