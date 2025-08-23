import ErrorMessage from "../ErrorMessage";
export default function RadioInput({ label, options, value, required, onChange, error }) {
    return (
        <div className="flex flex-col my-4">
            <label className="mb-2 text-gray-700 dark:text-gray-200 font-medium">{label} {required && <span className="text-red-500">*</span>}</label>
            <div className="flex items-center space-x-4">
                {options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                        <input
                            type="radio"
                            id={option}
                            name={label}
                            value={option}
                            checked={value === option}
                            onChange={(e) => onChange(e.target.value)}
                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-300
                         dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-blue-500"                    />
                        <span className="text-gray-700 dark:text-gray-200">{option}</span>
                    </div>))}
            </div>

            {error && <ErrorMessage message={error} />}
        </div>
    );
}