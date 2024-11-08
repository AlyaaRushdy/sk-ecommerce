import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import axios from "axios";
import { setToken } from "@/slices/userSlice";
import { useToast } from "@/hooks/use-toast";
import { getCart } from "@/slices/cartSlice";

const formFields = [
  {
    name: "email",
    placeholder: "abc@example.com",
    type: "email",
    label: "Email Address",
  },
  {
    name: "password",
    placeholder: "password",
    type: "password",
    label: "Password",
  },
];

function Login() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const loginSchema = z.object({
    email: z.string().email("please enter a valid email").min(1, {
      message: "email is required",
    }),
    password: z.string().min(8, {
      message: "password must be atleast 8 characters long",
    }),
  });

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data) => {
    axios
      .post(`http://localhost:5000/users/login`, data)
      .then((res) => {
        if (res.status == 200) {
          const token = res.headers["authorization"].split(" ")[1];
          dispatch(setToken(token));
          dispatch(getCart(token));
          toast({
            title: res.data.message,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response.status == 400 || err.response.status == 403) {
          toast({
            variant: "destructive",
            title: err.response.data.message,
          });
        } else if (err.response.status == 404) {
          toast({
            title:
              "Looks like you don't have an account, try signing up instead!",
          });
        } else {
          console.log("err", err);
        }
      });
  };

  return (
    <section className="flex justify-center items-center h-[calc(100vh-80px)]">
      <div className="w-full max-w-md ">
        <h1 className="text-2xl tracking-[.25em] uppercase font-semibold text-center mb-6">
          Login
        </h1>
        {/* <p className="text-xs py-2">
          Enter your email below to login to your account.
        </p> */}

        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {formFields.map((formField, i) => (
              <FormField
                control={loginForm.control}
                name={formField.name}
                key={i}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{formField.label}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={formField.placeholder}
                        type={formField.type}
                        className="placeholder:text-neutral-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mt-4">
          don&apos;t have an account?{" "}
          <Link to="/register" className="hover:underline text-foreground">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
