import { Resend } from 'resend';
import { EmailTemplateIngineForm } from '@/app/components/emails/emailTemplateIngineForm';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();

  const fullName = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const projectName = formData.get('projectName') as string;
  const investmentAmountRequested = Number(formData.get('investmentAmountRequested'));
  const projectSummary = formData.get('projectSummary') as string;
  const note = formData.get('note') as string;

  const files = formData.getAll('files') as File[];

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
    }))
  );

  const { data, error } = await resend.emails.send({
    from: 'Web - Transfer Technologií <onboarding@resend.dev>',
    to: ['martin.pastvinsky@gmail.com'],
    subject: 'Nový klient - Žádost o kontakt',
    react: await EmailTemplateIngineForm({
      fullName,
      email,
      projectName,
      investmentAmountRequested,
      projectSummary,
      note,
      fileCount: files.length,
    }),
    attachments,
  });

  if (error) {
    return new Response(JSON.stringify(error), { status: 400 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}