import CheckCircleIcon from "@/public/icons/CheckCircleIcon";

type StepsListItemProps = {
    label: string;
};

const StepsListItem = ({ label }: StepsListItemProps) => {
    return (
        <li className='flex justify-between items-center border-b-2 py-2 border-cvut-gray/30'>
            <span className='heading5'>{label}</span>
            <label>
                <input type="checkbox" className="hidden peer" />
                <div className="cursor-pointer text-cvut-gray/30 peer-checked:text-cvut-green transition-colors">
                    <CheckCircleIcon />
                </div>
            </label>
        </li>
    );
};

export default StepsListItem;