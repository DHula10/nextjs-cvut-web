'use client';

import styles from './articleTile.module.css'

type ArticleProps = {
    title: string;
    contentText: string;
    imgHref: string;
    category: string;
};

export default function ArticleTile({ title, contentText, imgHref, category }: ArticleProps) {
    return (
        <article className={`${styles.article} bg-white shadow-md overflow-hidden flex flex-col`}>
            <img src={imgHref} alt={title} className="w-full object-cover" />
            <div className="p-4 flex flex-col gap-2 flex-1">
                <span className={`${styles.category} bg-black text-white text-xs font-semibold px-3 py-1 w-fit`}>
                    {category}
                </span>
                <h6>{title}</h6>
                <p className="body-s flex-1 mt-3">{contentText}</p>
                <span className={`${styles.hoverBtn} text-[16px] leading-[16px] font-bold uppercase text-cvut-green mt-8`}>ČÍST ČLÁNEK →</span>
            </div>
        </article>
    );
}