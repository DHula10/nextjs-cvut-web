import DOMPurify from 'dompurify';

type Props = {
    html: string;
};

export default function WysiwygContent({ html }: Props) {
    const cleanHTML = DOMPurify.sanitize(html);

    return(
        <div className='prose'
             dangerouslySetInnerHTML={{ __html: cleanHTML }}
        />
    );
}