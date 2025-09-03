"use client";
import { useState, useEffect } from 'react';

import StepsListItem from './stepsListItem';

const checklistSteps = [
    "Mám jasně definovaný podnikatelský plán.",
    "Dokážu představit komerční potenciál svého nápadu.",
    "Mám realisticky zpracovaný finanční plán.",
    "Disponuji prototypem nebo důkazem konceptu.",
    "Vím, jakou částku potřebuji a jak ji efektivně využiji."
];

const ChecklistSection = () => {


    // State to track checked items
    const [checkedItems, setCheckedItems] = useState<boolean[]>(
        new Array(checklistSteps.length).fill(false)
    );

    // Handle checkbox change
    const handleCheckChange = (index: number, isChecked: boolean) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = isChecked;
        setCheckedItems(newCheckedItems);
    };

    // Check if all items are checked
    const allChecked = checkedItems.every(item => item);

    // Auto-scroll when all items are checked
    useEffect(() => {
        if (allChecked) {
            const timer = setTimeout(() => {
                const supportSection = document.getElementById('support');
                if (supportSection) {
                    supportSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [allChecked]);

    return (
        <section id="checklist" className='flex flex-col justify-center my-16 gap-10
                                           px-8 sm:px-14 md:px-20 lg:px-32'>

            <div className='flex flex-col gap-4'>
                <h3 className='text-cvut-black'>Checklist klíčových požadavků</h3>
                <p className='body-m'>
                    Odpovídáte „ano" na všech 5 bodů? Skvělé, můžeme pokračovat! <br />
                    Pokud ne, dejte nám vědět – rádi vám poradíme.
                </p>
            </div>

            <ol className="list-none space-y-2">
                {checklistSteps.map((step, index) => (
                    <StepsListItem
                        key={index}
                        label={step}
                        index={index + 1}
                        isChecked={checkedItems[index]}
                        onCheck={(isChecked) => handleCheckChange(index, isChecked)}
                    />
                ))}
            </ol>

            {allChecked && (
                <div className='bg-cvut-green/15 border border-cvut-green/50 text-[#565f01] px-4 py-3 rounded-lg'>
                    <p className='font-semibold'>🎉 Výborně! Všechny požadavky jsou splněny. Podívejte se níže, jak vás podpoříme.</p>
                </div>
            )}
        </section>
    )
}

export default ChecklistSection;