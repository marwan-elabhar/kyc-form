import ErrorMessage from "../ErrorMessage";
export default function Datepicker({ label, value, onChange, required, error }) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
                type="date"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {error && <ErrorMessage message={error} />}
        </div>
    );
}