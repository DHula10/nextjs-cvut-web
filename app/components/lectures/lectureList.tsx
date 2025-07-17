import LectureTile from './lectureTile';
import styles from './lectureList.module.css'

type Lecture = {
    id: number;
    title: string;
    contentText: string;
    imgHref: string;
};

type Props = {
    lectures: Lecture[];
};

export default function LectureList({ lectures }: Props){
    return (
        <section className={`${styles.lectureList} p-16`}>
            <h4>Přednášky</h4>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
                {lectures.map(lecture => (
                    <LectureTile key={lecture.id} {...lecture} />
                ))}
            </div>
        </section>
    );
}