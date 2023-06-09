"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  acceptTerms: z.literal(true, {
    invalid_type_error: "You must accept the terms and conditions",
  }),
});

export default function Create() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "all",
  });

  const [step, setStep] = useState(0);

  const handleSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    data
  ) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log(data);
        resolve(null);
      }, 1000)
    );
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form
          className="w-full max-w-sm"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          {step === 0 && (
            <>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                  Username
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Username"
                  disabled={form.formState.isSubmitting}
                  {...form.register("username")}
                />
                {form.formState.errors.username && (
                  <p className="text-xs italic text-red-500">
                    {form.formState.errors.username.message}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    disabled={form.formState.isSubmitting}
                    {...form.register("acceptTerms")}
                  />
                  <span className="text-sm">
                    I accept the terms and conditions
                  </span>
                  {form.formState.errors.acceptTerms && (
                    <p className="text-xs italic text-red-500">
                      {form.formState.errors.acceptTerms.message}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
          {step === 1 && (
            <div className="w-full px-3 md:w-1/2">
              <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                Email
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                disabled={form.formState.isSubmitting}
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-xs italic text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          )}
          <div className="flex items-center justify-between">
            {step > 0 && (
              <Button
                type="button"
                onClick={() => {
                  setStep((prev) => prev - 1);
                }}
                disabled={form.formState.isLoading}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Back
              </Button>
            )}
            <Button
              type="button"
              onClick={() => {
                form.trigger(["username", "acceptTerms"]).then((isValid) => {
                  console.log(isValid);
                  isValid && setStep((prev) => prev + 1);
                });
              }}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:opacity-20"
            >
              Next
            </Button>
          </div>
        </form>
        <pre>{JSON.stringify(form.watch())}</pre>
      </div>
    </>
  );
}
