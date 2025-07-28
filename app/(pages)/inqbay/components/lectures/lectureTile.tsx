'use client';

import styles from './lectureTile.module.css';
import WysiwygContent from '../wysiwygContent';
import Link from 'next/link';

type LectureProps = {
    title: string;
    content: string;
    img: string;
    slug: string;
    link: string;
};

export default function LectureTile({ title, content, img, slug }: LectureProps) {
    return (
        <Link href={`/inqbay/lecture/${slug}`} className={`${styles.lecture} bg-white shadow-md overflow-hidden flex flex-col
                                                min-w-[90%] max-w-[90%] 
                                                md:min-w-[50%] md:max-w-[50%] 
                                                lg:min-w-[40%] lg:max-w-[40%]
                                                xl:min-w-[30%] xl:max-w-[30%]
                                                2xl:min-w-[20%] 2xl:max-w-[20%]`}>
            <article>
                <img src={`http://localhost:8055/assets/${img}`} alt={title} className="object-cover w-full h-[25vh]" />
                <div className="p-4 flex flex-col gap-2 justify-between">
                    <div>
                        <h6 className='mb-1'>{title}</h6>
                        <WysiwygContent html={content} asPlainText maxLength={75}></WysiwygContent>
                    </div>
                    <span className={`${styles.hoverBtn} text-[16px] leading-[16px] font-bold uppercase text-cvut-green mt-8`}>PUSTIT VIDEO →</span>
                </div>
            </article>
        </Link>
    );
}