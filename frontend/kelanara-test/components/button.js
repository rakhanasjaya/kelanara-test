export default function Button({ children }) {
    return (
        <button
            type="button"
            className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
            {children}
        </button>
    );
}
