import ErrorMessage from "../ErrorMessage";
export default function DropdownInput({ label, options, value, required, onChange, error }) {
    return (
        <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">{label} {required && <span className="text-red-500">*</span>}</label>
            <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 border-gray-300" value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && <ErrorMessage message={error} />}
        </div>
    );
}