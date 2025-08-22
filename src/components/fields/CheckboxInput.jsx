export default function CheckboxInput({ label, options, value, onChange }) {
    const handleCheckboxChange = (option) => {
        if (value.includes(option)) {
            onChange(value.filter((item) => item !== option));
        } else {
            onChange([...value, option]);
        }
    };

    return (
        <div className="form-group">
            <label>{label}</label>
            {options.map((option) => (
                <div key={option}>
                    <input
                        type="checkbox"
                        id={option}
                        name={label}
                        value={option}
                        checked={value.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
}