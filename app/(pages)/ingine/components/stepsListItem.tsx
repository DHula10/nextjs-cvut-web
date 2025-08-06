import CheckCircleIcon from "@/public/icons/CheckCircleIcon";

type StepsListItemProps = {
    label: string;
    index: number;
    isChecked: boolean;
    onCheck: (isChecked: boolean) => void;
};

const StepsListItem = ({ label, index, isChecked, onCheck }: StepsListItemProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onCheck(e.target.checked);
    };

    return (
        <li className='flex justify-between items-center border-b-2 py-2 border-cvut-gray/30'>
            <span className='heading5'>{index}. {label}</span>
            <label>
                <input 
                    type="checkbox" 
                    className="hidden peer" 
                    checked={isChecked}
                    onChange={handleChange}
                />
                <div className={`cursor-pointer transition-colors ${
                    isChecked ? 'text-cvut-green' : 'text-cvut-gray/30'
                }`}>
                    <CheckCircleIcon />
                </div>
            </label>
        </li>
    );
};

export default StepsListItem;