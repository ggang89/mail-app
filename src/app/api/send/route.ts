import WelcomeEmail from "@/emails/welcome-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { weather, name, mood } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["ggang89@gmail.com"],
      subject: "test",
      react: WelcomeEmail({ weather, name, mood }),
    });
    //console.log("이메일 전송 응답", data); //여기 결과가 왜 id 이지?

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
