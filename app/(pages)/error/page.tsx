import Button from "@/app/components/button";

const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            <h2 className="text-4xl font-bold text-cvut-red/50 mb-4">Error</h2>
            <p className="text-lg text-gray-700">Omlouváme se, došlo k chybě. Zkuste to prosím později.</p>
            <Button label="Zpět na domovskou stránku" isLink href="/" bgColor="r" inverse />
        </div>
    );
}
export default ErrorPage;