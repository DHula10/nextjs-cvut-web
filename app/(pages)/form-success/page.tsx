

const FormSuccess = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-4xl font-bold text-green-600 mb-4">Form Submitted Successfully!</h2>
            <p className="text-lg text-gray-700">Thank you for your submission. We will get back to you soon.</p>
            <a href="/" className="mt-6 text-blue-500 hover:underline">
                Go back to home
            </a>
        </div>
    );
}
export default FormSuccess;