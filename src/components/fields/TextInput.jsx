import ErrorMessage from "../ErrorMessage";
export default function TextInput({ label, required, value, onChange, error }) {
    return (
        <div className="form-group">
            <label>
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                className={error ? 'border-x border-y border-red-500' : ''}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
            />
            {error && <ErrorMessage message={error} />}
        </div>
    );
}