export default function Input({
    type,
    id,
    value,
    onChange,
    placeholder,
    required,
    label,
}) {
    return (
        <div className="text-white">
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-white"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}
