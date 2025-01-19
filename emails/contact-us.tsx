import * as React from "react";
import { Html } from "@react-email/components";

export function ContactUs({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Html lang="en">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </Html>
  );
}

export default ContactUs;
