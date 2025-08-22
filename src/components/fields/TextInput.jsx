export default function TextInput({ label, required, value, onChange }) {
    return (
        <div className="form-group">
            <label>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
            />
        </div>
    );
}