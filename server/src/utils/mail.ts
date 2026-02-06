import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";

configDotenv();
const { AUTH_EMAIL, AUTH_PASS } = process.env;
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS,
  },
  port: 587,
  secure: false,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});
export const verifyUserEmail = async (receiver: string, verifyLink: string) => {
  await transport.sendMail({
    from: `"Food Delivery" ${AUTH_EMAIL}`,
    to: receiver,
    subject: "Verify user",
    html: `
   <div style="
    width: 300px;
    height: 250px;
    border-radius: 8px;
    background-color: aquamarine;
  "
>
  <a href="${verifyLink}" style="font-size: 18px; color: red">Verify user</a>
</div>
`,
  });
};
