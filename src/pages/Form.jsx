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
        "options": ["Male", "Female"]
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
import { useState } from 'react';


export default function Form() {
    const initialData = {};
    questions.forEach(q => {
        initialData[q.id] = q.type === 'multi_choice' ? [] : '';
    })

    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    }

    const handleOnChange = ({ value, question }) => {
        setErrors(prev => {
            const { [question.id]: _, ...rest } = prev;
            return rest;
        });
        setFormData(prev => ({ ...prev, [question.id]: value }))
        validate({ value, question })

    }

    const validate = ({ value, question }) => {
        if (question.type === 'multi_choice') {
            if (question.required && value.length < (question.min || 1)) {
                setErrors(prev => ({ ...prev, [question.id]: `Please select at least ${question.min || 1} options.` }))
                return false;
            }
            if (question.max && value.length > question.max) {
                setErrors(prev => ({ ...prev, [question.id]: `Please select no more than ${question.max} options.` }))
                return false;
            }
        } else {
            if (question.required && !value) {
                setErrors(prev => ({ ...prev, [question.id]: 'This field is required.' }))
                return false;
            }
        }
        return true;
    }


    return (
        <div className="form-container">
            <h1>Form Page</h1>
            <form onSubmit={handleSubmit}>
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
                            value={formData[id]}
                            error={errors[id]}
                            onChange={(value) => handleOnChange({ value, question })}
                        />
                    );
                })}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

