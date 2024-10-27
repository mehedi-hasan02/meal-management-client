import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal"
            >
                <Link to='/' className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );
    return (
        <div>
            <div className=" max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
                <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-1 bg-[#217b7e] ">
                    <div className="flex items-center justify-between text-white">
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            Material Tailwind
                        </Typography>
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block"
                        >
                            <span>
                                <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="rounded"/>
                            </span>
                        </Button>
                        <IconButton
                            variant="text"
                            className="lg:hidden"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                            )}
                        </IconButton>
                    </div>
                    <Collapse open={openNav}>
                        {navList}
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>
                                <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                            </span>
                        </Button>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Navigation;