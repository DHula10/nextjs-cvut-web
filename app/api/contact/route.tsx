import { Resend } from 'resend';
import { EmailTemplateHomeForm } from '@/app/components/emails/emailTemplateHomeForm';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, telephone, availableTime, message } = body;

  const { data, error } = await resend.emails.send({
    from: 'Web - Transfer Technologií <onboarding@resend.dev>',
    to: ['martin.pastvinsky@gmail.com'],
    subject: 'Nový klient - Žádost o kontakt',
    react: await EmailTemplateHomeForm({ name, email, telephone, availableTime, message }),
  });

  if (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}