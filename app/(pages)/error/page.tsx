

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-4xl font-bold text-red-600">Error</h2>
            <p className="mt-4 text-lg text-gray-700">An unexpected error has occurred.</p>
            <a href="/" className="mt-6 text-blue-500 hover:underline">
                Go back to home
            </a>
        </div>
    );
}
export default ErrorPage;