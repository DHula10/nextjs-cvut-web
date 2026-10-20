'use client';

import { useEffect, useState } from 'react';
import createDOMPurify from 'dompurify';

type Props = {
    html: string;
    asPlainText?: boolean;
    maxLength?: number;
};

export default function WysiwygContent({ 
    html, 
    asPlainText = false, 
    maxLength 
}: Props) {
    const [sanitizedContent, setSanitizedContent] = useState('');

    useEffect(() => {
        // Použijeme DOMPurify jen na klientovi
        const DOMPurify = createDOMPurify(window);

        if (asPlainText) {
            const cleanDOM = DOMPurify.sanitize(html, { RETURN_DOM: true }) as unknown as HTMLElement;
            let plainText = cleanDOM.textContent || '';

            if (maxLength && plainText.length > maxLength) {
                plainText = plainText.substring(0, maxLength).trim() + '...';
            }

            setSanitizedContent(plainText);
        } else {
            const clean = DOMPurify.sanitize(html);
            setSanitizedContent(clean);
        }
    }, [html, asPlainText, maxLength]);

    if (asPlainText) {
        return <div className="prose">{sanitizedContent}</div>;
    }

    return (
        <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
    );
}
