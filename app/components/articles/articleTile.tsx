'use client';

type ArticleProps = {
    title: string;
    contentText: string;
    imgHref: string;
    category: string;
};

export default function ArticleTile({ title, contentText, imgHref, category }: ArticleProps) {
    return (
        <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="relative">
                <img src={imgHref} alt={title} className="w-full h-48 object-cover" />
                <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded">
                    {category}
                </span>
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="text-sm text-gray-600 flex-1">{contentText}</p>
                <span className="text-sm font-bold text-lime-500 mt-auto">ČÍST ČLÁNEK →</span>
            </div>
        </article>
    );
}