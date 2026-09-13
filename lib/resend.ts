import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey && process.env.NODE_ENV === "production") {
  console.warn("RESEND_API_KEY is not defined in the environment variables.");
}

export const resend = new Resend(apiKey || "re_mock_key_for_dev");
