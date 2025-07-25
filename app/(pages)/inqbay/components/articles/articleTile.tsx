'use client';

import styles from './articleTile.module.css'

type ArticleProps = {
    title: string;
    slug: string;
    content: string;
    img: string;
    category: string;
};

export default function ArticleTile({ title, content, img, category }: ArticleProps) {
    return (
        <article className={`${styles.article} bg-white shadow-md overflow-hidden flex-col 
                                                min-w-[90%] max-w-[90%] 
                                                md:min-w-[50%] md:max-w-[50%] 
                                                lg:min-w-[40%] lg:max-w-[40%]
                                                xl:min-w-[30%] xl:max-w-[30%]
                                                2xl:min-w-[20%] 2xl:max-w-[20%]`}>

            <img src={img} alt={title} className="w-full object-cover"/>
            <div className="p-4 flex flex-col gap-2 flex-1">
                <span className={`${styles.category} bg-black text-white text-xs font-semibold px-3 py-1 w-fit`}>
                    {category}
                </span>
                <h6>{title}</h6>
                <p className="body-s flex-1 mt-3">{content}</p>
                <span className={`${styles.hoverBtn} text-[16px] leading-[16px] font-bold uppercase text-cvut-green mt-8`}>ČÍST ČLÁNEK →</span>
            </div>
        </article>
    );
}