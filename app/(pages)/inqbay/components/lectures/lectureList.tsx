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
};

export default function LectureList({ lectures }: Props) {
    return (
        <div className={`flex gap-8 min-w-[100%] min-h-fit pl-[5%] pb-5 pt-5
                        h-[60vh] sm:h-[55vh] md:h-[55vh] xl:h-[55vh]`}>
            {lectures.map((lecture, index) => (
                <LectureTile key={index} {...lecture} />
            ))}
        </div>
    );
}