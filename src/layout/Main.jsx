import { Outlet } from "react-router-dom";
import Navigation from "../component/shared/navbar/Navbar";

const Main = () => {
    return (
        <div className="container mx-auto">
            <Navigation/>
            <Outlet/>
        </div>
    );
};

export default Main;