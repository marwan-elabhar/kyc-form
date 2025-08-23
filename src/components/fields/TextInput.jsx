import ErrorMessage from "../ErrorMessage";
export default function TextInput({ label, required, value, onChange, error }) {
    return (
        <div className="flex flex-col my-4">
            <label className="mb-2 text-gray-700 dark:text-gray-200 font-medium">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2
          ${error
                        ? "border-red-500 focus:ring-red-300 dark:border-red-400 dark:focus:ring-red-600"
                        : "border-gray-300 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-blue-500"
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