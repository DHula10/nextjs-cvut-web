'use client';

import styles from './articleTile.module.css';
import WysiwygContent from '@/app/(pages)/inqbay/components/wysiwygContent';
import Link from 'next/link';

type ArticleProps = {
    title: string;
    slug: string;
    content: string;
    img: string;
    categoryId?: { name: string } | null;
};

export default function ArticleTile({ title, slug, content, img, categoryId }: ArticleProps) {
    return (
        <Link href={`/inqbay/article/${slug}`} className={`${styles.article} bg-white shadow-md overflow-hidden flex flex-col
                                                min-w-[90%] max-w-[90%] 
                                                md:min-w-[50%] md:max-w-[50%] 
                                                lg:min-w-[40%] lg:max-w-[40%]
                                                xl:min-w-[30%] xl:max-w-[30%]
                                                2xl:min-w-[20%] 2xl:max-w-[20%]`}>
            <article className='flex flex-col h-[100%]'>
                <img src={`http://localhost:8055/assets/${img}`} alt={title} className='object-cover w-full h-[50%] 2xl:h-[60%]' />
                <div className='p-4 flex flex-col gap-2 h-[50%] 2xl:h-[40%]'>
                    <span className={`${styles.category} bg-black text-white text-xs font-semibold px-3 py-1 w-fit`}>
                        {categoryId?.name || 'Nezařazeno'}
                    </span>
                    <div className='flex flex-col justify-between h-[100%]'>
                        <div>
                            <h6>{title}</h6>
                            <WysiwygContent html={content} asPlainText maxLength={75}></WysiwygContent>
                        </div>
                        <span className={`${styles.hoverBtn} text-[16px] leading-[16px] font-bold uppercase text-cvut-green`}>ČÍST ČLÁNEK →</span>
                    </div>
                </div>
            </article>
        </Link>
    );
}