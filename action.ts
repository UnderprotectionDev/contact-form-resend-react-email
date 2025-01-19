"use server";

import { actionClient } from "@/lib/safe-action";
import { contactSchema } from "./lib/validations";
import { flattenValidationErrors } from "next-safe-action";
import ContactUs from "./emails/contact-us";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactUs = actionClient
  .metadata({ actionName: "contactUs" })
  .schema(contactSchema, {
    handleValidationErrorsShape: async (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .stateAction(async ({ parsedInput }) => {
    const { name, email, message } = parsedInput;
    await resend.emails.send({
      from: "Underprotection Dev <noreply@underprotection.dev>",
      to: ["...@outlook.com"],
      subject: "Contact Us",
      react: ContactUs({ name, email, message }),
    });
  });
