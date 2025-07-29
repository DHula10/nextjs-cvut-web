'use client';

import LectureTile from './lectureTile';
import styles from './lectureList.module.css'

type Lecture = {
    title: string;
    content: string;
    img: string;
    slug: string;
    link: string;
};

type Props = {
    lectures: Lecture[];
    onLoadMore: () => void;
};

export default function LectureList({ lectures, onLoadMore }: Props) {
    return (
        <section className={`${styles.lectureList} min-w-[100%] mt-10`}>
            <h4 className='absolute'>Přednášky</h4>
            <div className="mt-15 flex gap-8 min-w-[100%]">
                {lectures.map((lecture, index) => (
                    <LectureTile key={index} {...lecture} />
                ))}
            </div>
            <div className='w-full flex justify-end mt-10 right-5 absolute'>
                <button onClick={onLoadMore}
                        className='px-6 py-2 bg-cvut-green text-white font-bold
                                   rounded-lg hover:bg-[#8EA700] transition'>
                    Načíst další přednášky
                </button>
            </div>
        </section>
    );
}