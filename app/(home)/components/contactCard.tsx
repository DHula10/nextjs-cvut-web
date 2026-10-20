import PhoneIcon from "@/public/icons/PhoneIcon";
import EnvelopeIcon from "@/public/icons/EnvelopeIcon";

const ContactCard = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-row gap-8 w-fit">
                <div className="bg-gray-200 rounded-full w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px]"></div>
                <div className="flex flex-col gap-4 justify-center">
                    <a href="tel:+420123456789" className="flex flex-row items-center gap-2 text-cvut-blue hover:text-cvut-blue-light transition-colors duration-300">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
                            <PhoneIcon />
                        </div>
                        <span className="body-l">+420 123 456 789</span>
                    </a>

                    <a href="mailto:test@example.com" className="flex flex-row items-center gap-2 text-cvut-blue hover:text-cvut-blue-light transition-colors duration-300">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center">
                            <EnvelopeIcon />
                        </div>
                        <span className="body-l">test@example.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;