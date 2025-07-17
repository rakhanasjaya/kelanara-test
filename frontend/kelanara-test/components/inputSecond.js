export default function InputSecondary({ label, className = "", ...props }) {
    return (
        <div className={`text-black ${className}`}>
            <label
                htmlFor={props.id}
                className="block mb-2 text-sm font-medium text-black"
            >
                {label}
            </label>
            <input
                {...props}
                className="bg-transparent border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
        </div>
    );
}
