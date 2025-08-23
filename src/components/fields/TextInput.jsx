import ErrorMessage from "../ErrorMessage";
export default function TextInput({ label, required, value, onChange, error }) {
    return (
        <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${error
                        ? "border-red-500 focus:ring-red-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
            />
            {error && <ErrorMessage message={error} />}
        </div>
    );
}