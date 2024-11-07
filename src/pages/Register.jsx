import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { setToken } from "@/slices/userSlice";

import axios from "axios";
import { useToast } from "@/hooks/use-toast";

const nameFields = [
  {
    name: "fname",
    placeholder: "First Name",
    type: "text",
    label: "First Name",
  },
  {
    name: "lname",
    placeholder: "Last Name",
    type: "text",
    label: "Last Name",
  },
];
const formFields = [
  //   {
  //     name: "phone",
  //     placeholder: "01234567890",
  //     type: "text",
  //     label: "Phone Number",
  //   },
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

const registerSchema = z.object({
  fname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  //   phone: z
  //     .string()
  //     .min(11, { message: "please add a valid phone number" })
  //     .max(11, { message: "please add a valid phone number" }),
  email: z.string().email("please enter a valid email").min(1, {
    message: "Email is required",
  }),
  password: z.string().describe("password").min(8, {
    message: "Password must be atleast 8 characters long",
  }),
});

function Register() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const dispatch = useDispatch();

  const registerFrom = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      fname: "",
      lname: "",
      //   phone: "",
      password: "",
    },
  });

  const handleSubmit = (data) => {
    axios
      .post("http://localhost:5000/users/register", data)
      .then((res) => {
        if (res.status === 201) {
          const token = res.headers["authorization"].split(" ")[1];
          dispatch(setToken(token));
          toast({
            description: res.data.message,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response.status == 409) {
          toast({
            variant: "destructive",
            title: error.response.data.message,
          });
        } else {
          console.error("Error creating account:", error);
          toast({
            title: "Error",
            description: "Failed to create account. Please try again.",
            variant: "destructive",
          });
        }
      });
  };

  return (
    <>
      <section className="flex justify-center items-center h-[calc(100vh-80px)] mx-4 py-4">
        <div className="w-full max-w-lg">
          <h1 className="text-2xl tracking-[.25em] uppercase font-semibold text-center mb-6">
            Sign Up
          </h1>

          <Form {...registerFrom}>
            <form
              onSubmit={registerFrom.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-center">
                {nameFields.map((nameField, i) => (
                  <>
                    <FormField
                      control={registerFrom.control}
                      name={nameField.name}
                      key={i}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{nameField.label}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={nameField.placeholder}
                              type={nameField.type}
                              className="placeholder:text-neutral-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                ))}
              </div>
              {formFields.map((formField, i) => (
                <FormField
                  control={registerFrom.control}
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
                Sign Up
              </Button>
            </form>
          </Form>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mt-4">
            already have an account?{" "}
            <Link to="/login" className="hover:underline text-foreground">
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Register;
