import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to: ["fernandaleitefelix@gmail.com"],
      replyTo: email,
      subject: `Novo contato de ${name}`,
      html: `
        <h2>Novo contato vindo do portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
