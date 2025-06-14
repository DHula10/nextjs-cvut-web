import PhoneIcon from "@/public/icons/PhoneIcon";
import EnvelopeIcon from "@/public/icons/EnvelopeIcon";

const ContactCard = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-row gap-8 w-fit mr-20">
                <div className="bg-gray-200 rounded-full w-[120px] h-[120px] lg:w-[180px] lg:h-[180px]"></div>
                <div className="flex flex-col gap-4 justify-center">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center text-cvut-blue">
                            <PhoneIcon />
                        </div>
                        <a href="tel:+420123456789" className="body-l link text-cvut-blue">+420 123 456 789</a>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center text-cvut-blue">
                            <EnvelopeIcon />
                        </div>
                        <a href="mailto:test@example.com" className="body-l link text-cvut-blue">test@example.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;