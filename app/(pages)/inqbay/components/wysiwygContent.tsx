import DOMPurify from 'dompurify';

type Props = {
    html: string;
    asPlainText?: boolean;
    maxLength?: number;
    wordLimit?: number;
};

export default function WysiwygContent({ 
    html, 
    asPlainText = false, 
    maxLength,  
}: Props) {
    
    if (asPlainText) {
        // Use DOMPurify's RETURN_DOM to get a DOM node, then extract textContent
        const cleanDOM = DOMPurify.sanitize(html, { RETURN_DOM: true });
        let plainText = cleanDOM.textContent || '';
        
        if (maxLength && plainText.length > maxLength) {
            plainText = plainText.substring(0, maxLength).trim() + '...';
        }
        
        return <div className="prose">{plainText}</div>;
    }

    // Return sanitized HTML for full content
    const cleanHTML = DOMPurify.sanitize(html);
    
    return (
        <div className='prose'
             dangerouslySetInnerHTML={{ __html: cleanHTML }}
        />
    );
}