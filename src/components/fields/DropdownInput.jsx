import ErrorMessage from "../ErrorMessage";
export default function DropdownInput({ label, options, value, onChange, error }) {
    return (
        <div className="form-group">
            <label>{label}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
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