import Button from "@/app/components/button";

const ProcessSection = () => {
  const steps = [
    {
      id: "inqbay",
      tag: "#INQBAY",
      title: "Připravujte",
      description: "Získejte přístup do free online knihovny, která vám poskytne všechny potřebné podklady, díky kterým budete vědět, jak nápad připravit na další kroky. Navíc máte kdykoliv k dispozici odborníky, kteří vám rádi poradí a poskytnou zpětnou vazbu na vaše projekty.",
      color: "cvut-green",
      bgColor: 'g' as const,
      href: "/inqbay",
      mobilePosition: "0%"
    },
    {
      id: "transfer",
      tag: "#TRANSFER",
      title: "Validujte",
      description: "Nechte si poradit, jak transformovat nápad do funkční formy a pomoct s právními náležitostmi, jako je ochrana duševního vlastnictví, registrace ochranné známky nebo smluvní zajištění s partnery.",
      color: "cvut-yellow",
      bgColor: 'y' as const,
      href: "/transfer",
      mobilePosition: "33%"
    },
    {
      id: "ingine",
      tag: "#INGINE",
      title: "Vydělávejte",
      description: "Získejte vstupní investici 25 000 EUR, mentory a poradce, kteří vám ukážou, jak projekt otestovat a získat první zákazníky. Taky vás připraví na další kola financování s napojením na investory.",
      color: "cvut-red",
      bgColor: 'r' as const,
      href: "/ingine",
      mobilePosition: "66%"
    }
  ];

  const desktopSteps = [
    { text: "Mám nápad!", color: "cvut-green" },
    { text: "Chci mu dát\nformu", color: "cvut-yellow" },
    { text: "Potřebuju ho\nochránit", color: "cvut-orange" },
    { text: "Jdu vydělávat", color: "cvut-red" }
  ];

  return (
    <section id="process" className="flex mb-0 md:mb-32 mx-4 sm:mx-8 md:mx-16 lg:mx-32 2xl:mx-64 flex-col gap-5 md:gap-20 items-center">
      <h2>Jak začít s péčí o nápad</h2>

      {/* Mobile Layout */}
      <div className="w-full flex flex-row md:hidden gap-4 sm:gap-10">
        <div className="relative">
          <svg
            className="h-[1000px] w-[48px]"
            viewBox="0 0 24 1112"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0012 1111.5L0.454215 1091.5H23.5482L12.0012 1111.5ZM12.0012 0.5H14.0012V1093.5H12.0012H10.0012V0.5H12.0012Z"
              fill="url(#paint0_linear_vertical)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_vertical"
                x1="0.5"
                y1="0"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop stopColor="#A0B102" />
                <stop offset="0.5" stopColor="#F9B002" />
                <stop offset="1" stopColor="#D70929" />
              </linearGradient>
            </defs>
          </svg>

          {/* Position spans along the SVG line */}
          {steps.map((step, index) => (
            <span 
              key={step.id}
              className={`absolute top-[${step.mobilePosition}] left-1/2 -translate-x-1/2 rounded-full z-50 bg-${step.color} w-10 h-10`}
            />
          ))}
        </div>

        <div className="flex flex-col">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col gap-4 h-[340px] justify-center">
              <h6 className={`text-${step.color}`}>{step.tag}</h6>
              <h3 className="text-cvut-black">{step.title}</h3>
              <p className="text-cvut-black body-m">{step.description}</p>
              <Button isLink label="více info" bgColor={step.bgColor} inverse href={step.href} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="w-full flex-col hidden md:flex gap-20">
        {/* Step indicators */}
        <div className="w-full h-0 flex flex-row">
          {desktopSteps.map((step, index) => (
            <div key={index} className="w-1/4 h-full">
              <h6 className="absolute text-cvut-black whitespace-pre-line">{step.text}</h6>
              <span className={`absolute translate-y-[152px] rounded-full z-50 bg-${step.color} w-10 h-10`} />
            </div>
          ))}
        </div>

        {/* Horizontal SVG Arrow */}
        <svg
          className="w-full h-[24px] mt-20"
          viewBox="0 0 1112 24"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1111.5 12.0012L1091.5 0.454215V23.5482L1111.5 12.0012ZM0.5 12.0012V14.0012H1093.5V12.0012V10.0012H0.5V12.0012Z"
            fill="url(#paint0_linear_horizontal)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_horizontal"
              x1="0"
              y1="0.5"
              x2="1"
              y2="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop stopColor="#A0B102" />
              <stop offset="0.5" stopColor="#F9B002" />
              <stop offset="1" stopColor="#D70929" />
            </linearGradient>
          </defs>
        </svg>

        {/* Step descriptions */}
        <div className="flex flex-row gap-12 justify-between">
          {steps.map((step) => (
            <div key={step.id} className="w-1/3 flex flex-col gap-4">
              <h6 className={`text-${step.color}`}>{step.tag}</h6>
              <h3 className="text-cvut-black">{step.title}</h3>
              <p className="text-cvut-black body-m">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-12 lg:gap-32">
          {steps.map((step) => (
            <div key={step.id} className="w-1/3">
              <Button isLink label="více info" bgColor={step.bgColor} inverse href={step.href} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;