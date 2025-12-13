"use client";

import { useFormStatus } from "react-dom";
import Button from "./Button";
import SpinnerMini from "../SpinnerMini";

export default function SubmitButton({ children, ...props }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      {...props}
    >
      {pending ?<div className="flex justify-center"> <SpinnerMini /></div> : children}
    </Button>
  );
}
