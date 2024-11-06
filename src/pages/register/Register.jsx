import { useForm } from "react-hook-form";
import loginImg from '../../assets/authentication2.png'
import loginBgImg from '../../assets/authentication.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";



const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        console.log(email, password);

        reset();
    }

    return (
        <div style={{ height: `calc(100vh - 58px)` }} className=" lg:p-20 lg:bg-blue-gray-300" >
            <div style={{ backgroundImage: `url(${loginBgImg})` }} className="flex-col md:flex lg:flex-row-reverse flex p-10 lg:p-32 md:justify-center md:items-center">
                <div className="text-left ">
                    <img src={loginImg} alt="" />
                </div>
                <div>
                    <Card color="transparent" shadow={false}>
                        <Typography variant="h4" color="blue-gray">
                            Sign Up
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Nice to meet you! Enter your details to Sign Up.
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-6">
                                <div>
                                    <Typography variant="h6" color="blue-gray" className="mb-3">
                                        Your Name
                                    </Typography>
                                    <Input
                                        type="text"
                                        name="name"
                                        size="lg"
                                        placeholder="Your Name"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray" className="mb-3">
                                        Your Email
                                    </Typography>
                                    <Input
                                        type="email"
                                        name="email"
                                        size="lg"
                                        placeholder="name@mail.com"
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="text-red-500">This field is required</span>}
                                </div>

                                <div>
                                    <Typography variant="h6" color="blue-gray" className="mb-3">
                                        Password
                                    </Typography>
                                    <div className="flex items-center w-full relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            size="lg"
                                            placeholder="********"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            {...register("password", { required: true })}
                                        />
                                        <span onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FaEyeSlash className="absolute top-4 right-2 cursor-pointer"></FaEyeSlash> : <FaEye className="absolute top-4 right-2 cursor-pointer" />}
                                        </span>
                                    </div>
                                    {errors.password && <span className="text-red-500">This field is required</span>}
                                </div>
                            </div>
                            <Button type="submit" className="mt-6" fullWidth>
                                Sign Up
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Already have an account?{" "}
                                <Link to='/login' className="font-medium text-gray-900">
                                    Sign In
                                </Link>
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Register;