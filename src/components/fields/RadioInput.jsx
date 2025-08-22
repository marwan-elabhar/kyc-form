export default function RadioInput ({ label, options, value, onChange }) {
    return (
        <div className="form-group">
            <label>{label}</label>
            {options.map((option) => (
                <div key={option}>
                    <input
                        type="radio"
                        id={option}
                        name={label}
                        value={option}
                        checked={value === option}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
}