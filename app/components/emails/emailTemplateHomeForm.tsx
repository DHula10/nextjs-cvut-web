import * as React from 'react';

interface EmailTemplateHomeFormProps {
    name: string;
    email: string;
    telephone?: string;
    availableTime?: string;
    message: string;
}

export const EmailTemplateHomeForm: React.FC<Readonly<EmailTemplateHomeFormProps>> = ({
    name,
    email,
    telephone = 'nevyplněno',
    availableTime = 'nevyplněno',
    message,
}) => (
    <div>
        <h1 className="heading2">Nový klient - Žádost o kontakt</h1>
        <p className="body-m">Přišla nová žádost o konzultaci ze sekce Home.</p>
        <p className="body-m">Kontaktní údaje:</p>
        <ul className="list-disc pl-6">
            <li><strong>Jméno:</strong> {name}</li>
            <li><strong>Email:</strong> {email}</li>
            <li><strong>Telefon:</strong> {telephone}</li>
            <li><strong>Dostupný čas:</strong> {availableTime}</li>
        </ul>
        <strong> Obsah schůzky:</strong>
        <p className="body-m">
            {message}
        </p>

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