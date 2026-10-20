type CarouselItemProps = {
    companyName: string;
    companyMessage: string;
    imageUrl: string;
    logoUrl?: string; // Optional field for logo URL
};

const CarouselItem = ({ companyName, companyMessage, imageUrl, logoUrl }: CarouselItemProps) => {


    return (
        <div className="embla__slide bg-cvut-blue-lighter p-2 md:p-8 lg:p-12 rounded-[40px] flex flex-col md:flex-row md:gap-10 lg:justify-between items-center">

            <div className="flex flex-col gap-10 p-4 w-full lg:w-[50%]">
                <img className="w-full object-cover lg:hidden rounded-[40px]" src={imageUrl} alt="alt text" />

                <div className="flex flex-col gap-4">
                    {logoUrl && (
                        <div className="logo w-16 h-16">
                            <img src={logoUrl} alt={"logo " + companyName} />
                        </div>
                    )}
                    <h3>{companyName}</h3>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="body-m">{companyMessage}</p>

                </div>
            </div>

            <img className="hidden lg:block md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-[40px] object-cover" src={imageUrl} alt="alt text" />
        </div>
    )
}

export default CarouselItem;