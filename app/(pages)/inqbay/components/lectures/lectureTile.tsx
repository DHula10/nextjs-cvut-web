'use client';

import styles from './lectureTile.module.css';
import WysiwygContent from '../wysiwygContent';

type LectureProps = {
    title: string;
    content: string;
    img: string;
    slug: string;
};

export default function LectureTile({ title, content, img }: LectureProps) {
    return (
        <article className={`${styles.lecture} bg-white shadow-md overflow-hidden flex flex-col 
                                                min-w-[90%] max-w-[90%]
                                                md:min-w-[50%] md:max-w-[50%]
                                                lg:min-w-[40%] lg:max-w-[40%]
                                                xl:min-w-[30%] xl:max-w-[30%]
                                                2xl:min-w-[20%] 2xl:max-w-[20%]`}>

            <img src={`http://localhost:8055/assets/${img}`} alt={title} className="h-[57.5%] w-full" />
            <div className="p-4 flex flex-col gap-2 flex-1 justify-between">
                <div>
                    <h6>{title}</h6>
                    <WysiwygContent html={content} asPlainText maxLength={100}></WysiwygContent>
                </div>
                <span className={`${styles.hoverBtn} text-[16px] leading-[16px] font-bold uppercase text-cvut-green mt-8`}>PUSTIT VIDEO →</span>
            </div>
        </article>
    );
}