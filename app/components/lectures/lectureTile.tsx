'use client';

import styles from './lectureTile.module.css'

type LectureProps = {
    title: string;
    contentText: string;
    imgHref: string;
};

export default function LectureTile({ title, contentText, imgHref }: LectureProps) {
    return (
        <article className={`${styles.lecture} bg-white shadow-md overflow-hidden flex flex-col min-w-[90%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[30%] 2xl:min-w-[20%]`}>
            <img src={imgHref} alt={title} className="w-full object-cover" />
            <div className="p-4 flex flex-col gap-2 flex-1 justify-between">
                <div>
                    <h6>{title}</h6>
                    <p className="body-s flex-1 mt-3">{contentText}</p>
                </div>
                <span className={`${styles.hoverBtn} text-[16px] leading-[16px] font-bold uppercase text-cvut-green mt-8`}>PUSTIT VIDEO →</span>
            </div>
        </article>
    );
}