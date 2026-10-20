'use client';

import styles from './lectureTile.module.css';
import WysiwygContent from '../wysiwygContent';
import { getDirectusAssetUrl } from '@/app/lib/directusAssets';
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
                                                min-w-[60%] max-w-[60%] 
                                                md:min-w-[50%] md:max-w-[50%] 
                                                lg:min-w-[40%] lg:max-w-[40%]
                                                xl:min-w-[30%] xl:max-w-[30%]
                                                2xl:min-w-[20%] 2xl:max-w-[20%]`}>
            <article className='flex flex-col h-[100%]'>
                <img src={getDirectusAssetUrl(img)} alt={title} className="object-cover w-full 
                                                                                        h-[50%] md:h-[55%] lg:h-[55%] xl:h-[55%] 2xl:h-[50%]"/>
                <div className="p-4 flex flex-col gap-2 justify-between 
                                h-[50%] md:h-[45%] lg:h-[45%] xl:h-[45%] 2xl:h-[50%]">
                    <div>
                        <h6 className='mb-1'>{title}</h6>
                        <WysiwygContent html={content} asPlainText maxLength={75}></WysiwygContent>
                    </div>
                    <span className={`${styles.hoverBtn} text-[16px] leading-[16px] font-bold uppercase text-cvut-green`}>PUSTIT VIDEO →</span>
                </div>
            </article>
        </Link>
    );
}