const questions = [
    {
        "id": "full_name",
        "label": "Full Name",
        "type": "text",
        "required": true
    },
    {
        "id": "gender",
        "label": "Gender",
        "type": "radio_buttons",
        "options": ["Male", "Female", "Other"]
    },
    {
        "id": "hobbies",
        "label": "Hobbies",
        "type": "multi_choice",
        "options": ["Reading", "Traveling", "Sports", "Gaming"],
        "min": 1,
        "max": 3,
    },
    {
        "id": "country",
        "label": "Country of Residence",
        "type": "drop_down",
        "options": ["Egypt", "USA", "Germany", "Other"]
    }
]

import { fieldsMapper } from '../components/fields/mapper';


export default function Form() {
    return (
        <div className="form-container">
            <h1>Form Page</h1>;
            {questions.map((question) => {
                const { id, label, type, options, required, min, max } = question
                const FieldComponent = fieldsMapper[type];
                if (!FieldComponent) {
                    return <div key={id}>Unsupported field type: {type}</div>;
                }
                return (
                    <FieldComponent
                        key={id}
                        label={label}
                        required={required}
                        options={options}
                        min={min}
                        max={max}
                        value={question.value || ''}
                        onChange={(value) => {
                            question.value = value;
                            console.log(`Updated ${id} to:`, value);
                        }}
                    />
                );
            })}
            <button type="submit">Submit</button>
        </div>
    )
}

