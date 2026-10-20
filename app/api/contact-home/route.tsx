import { Resend } from 'resend';
import { EmailTemplateHomeForm } from '@/app/components/emails/emailTemplateHomeForm';
import { NextRequest } from 'next/server';
import { getRealIP, isRateLimited } from '@/app/lib/rateLimiter';

const resend = new Resend(process.env.RESEND_API_KEY);

const resendEmail = process.env.RESEND_EMAIL || 'vojtech.muller@cvut.cz';

export async function POST(request: NextRequest) {
  // Rate limiting check
  const clientIP = getRealIP(request);
  
  if (isRateLimited(clientIP)) {
    return new Response(
      JSON.stringify({ error: 'Příliš mnoho požadavků. Zkuste to znovu za 15 minut.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }
  const body = await request.json();
  const { name, email, telephone, availableTime, message } = body;

  const { data, error } = await resend.emails.send({
    from: 'Web - Transfer Technologií <onboarding@resend.dev>',
    to: [resendEmail],
    subject: 'Nový klient - Žádost o kontakt',
    react: await EmailTemplateHomeForm({ name, email, telephone, availableTime, message }),
  });

  if (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}