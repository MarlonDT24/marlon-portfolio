import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (data.gotcha && data.gotcha.length > 0) {
        console.log("🚫 Bot detectado y bloqueado (Honeypot trap).");
        // Devolvemos éxito falso para engañar al bot
        return NextResponse.json({ success: true }); 
    }

    // Validación básica en servidor
    if (!data.username || !data.email || !data.message) {
        return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    // Envío del email
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Remitente por defecto si no tienes dominio propio
      to: ["torresmarlon40@gmail.com"],
      subject: `Nuevo mensaje de ${data.username} - Portfolio`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
            <h2>👋 Nuevo contacto desde el Portfolio</h2>
            <p><strong>Nombre:</strong> ${data.username}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <hr />
            <p><strong>Mensaje:</strong></p>
            <p style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">${data.message}</p>
        </div>
      `,
    });

    return NextResponse.json({ data: emailResponse });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}