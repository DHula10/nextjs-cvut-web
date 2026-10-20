import Button from "@/app/components/button";

const FormSuccess = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            <h2 className="text-4xl font-bold text-cvut-green/50 mb-4">Formulář byl úspěšně odeslán!</h2>
            <p className="text-lg text-gray-700">Děkujeme Vám za Vaši zprávu. Ozveme se Vám co nejdříve.</p>
            <Button label="Zpět na domovskou stránku" isLink href="/" bgColor="g" inverse />
        </div>
    );
}
export default FormSuccess;