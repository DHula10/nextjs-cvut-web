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


  const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

  const files = formData.getAll('files') as File[];

  // Backend file size validation
  const oversizedFiles = files.filter(file => file.size > MAX_FILE_SIZE_BYTES);
  if (oversizedFiles.length > 0) {
    return new Response(
      JSON.stringify({ error: `Některé soubory přesahují limit 5 MB a nebyly přidány.` }),
      { status: 400 }
    );
  }

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