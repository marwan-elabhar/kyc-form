import ErrorMessage from "../ErrorMessage";
export default function RadioInput({ label, options, value, required, onChange, error }) {
    return (
        <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">{label} {required && <span className="text-red-500">*</span>}</label>
            {options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                    <input
                        type="radio"
                        id={option}
                        name={label}
                        value={option}
                        checked={value === option}
                        onChange={(e) => onChange(e.target.value)}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-300"
                    />
                    <span className="text-gray-700">{option}</span>
                </div>))}
            {error && <ErrorMessage message={error} />}
        </div>
    );
}