import ErrorMessage from "../ErrorMessage";
export default function CheckboxInput({ label, options, value, required, error, onChange }) {
    const handleCheckboxChange = (option) => {
        if (value && value.includes(option)) {
            onChange(value.filter((item) => item !== option));
        } else {
            onChange([...value, option]);
        }
    };

    return (
        <div className="my-4">
            <label className="mb-2 text-gray-700 dark:text-gray-200 font-medium">{label} {required && <span className="text-red-500">*</span>}</label>
            <div className="space-y-2">
                {options.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id={option}
                            name={label}
                            value={option}
                            checked={value.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-300 
                   dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-blue-500"                        />
                        <span className="text-gray-700 dark:text-gray-200">{option}</span>
                    </label>
                ))}
            </div>

            {error && <ErrorMessage message={error} />}
        </div>
    );
}