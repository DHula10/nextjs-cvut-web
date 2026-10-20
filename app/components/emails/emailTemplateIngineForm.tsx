import * as React from 'react';

interface EmailTemplateIngineFormProps {
    fullName: string;
    email: string;
    projectName: string;
    investmentAmountRequested: number;
    projectSummary: string;
    note: string;
    fileCount: number;
}

export const EmailTemplateIngineForm: React.FC<Readonly<EmailTemplateIngineFormProps>> = ({
    fullName,
    email,
    projectName,
    investmentAmountRequested,
    projectSummary,
    note,
    fileCount,
}) => (
    <div>
        <h1 className="heading2">Nová žádost o investici </h1>
        <p className="body-m">Přišla nová žádost o konzultaci ze sekce Ingine.</p>
        <p className="body-m">Kontaktní údaje:</p>
        <ul className="list-disc pl-6">
            <li><strong>Jméno:</strong> {fullName}</li>
            <li><strong>Email:</strong> {email}</li>
        </ul>

        <ul className="list-disc pl-6">
            <li><strong>Název projektu:</strong> {projectName}</li>
            <li><strong>Žádaná investice:</strong> {investmentAmountRequested} Kč</li>
            <li><strong>Stručný popis projektu:</strong> {projectSummary}</li>
            <li><strong>Poznámka:</strong> {note}</li>
            <li><strong>Počet souborů v příloze:</strong> {fileCount > 0 ? fileCount : 'Žádné soubory nebyly přiloženy'}</li>
        </ul>
        
        <table className='mt-6' style={{ width: '75%', borderCollapse: 'collapse' }}>
            <tr>
                <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>
                    <a href='https://www.transfer.cvut.cz/' target='_blank' className='body-s'>
                        Transfer technologií ČVUT
                    </a>
                </td>
                <td style={{ textAlign: 'right', verticalAlign: 'middle' }}>
                    <p className='body-s'>Odesláno automaticky v {new Date().toLocaleString()}</p>
                </td>
            </tr>
        </table>
    </div>
);