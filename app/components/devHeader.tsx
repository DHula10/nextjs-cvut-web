
type DevNavigationProps = {
    isHidden?: boolean;
};


const DevNavigation = ({isHidden}: DevNavigationProps) => {
    if (isHidden) return null;

    return (
        <nav className="text-sm dev-navigation bg-red-600 text-white py-2 px-4">
            <strong className="text-base">temporary navigation for development purposes</strong>
            <div className="flex flex-row justify-between items-center font-extralight">
                <a href="/">Homepage</a>
                <a href="/ingine">Ingine</a>
                <a href="/inqbay">Inqbay</a>
                <a href="/transfer">Transfer</a>
                <a href="/fakturacni-udaje">Fakturacni udaje</a>
            </div>
        </nav>
    )
}

export default DevNavigation