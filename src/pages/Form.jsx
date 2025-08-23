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
        "options": ["Male", "Female"],
        "required": true
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



    const handleOnChange = ({ value, question }) => {
        // Clear error on change
        setErrors(prev => {
            const { [question.id]: _, ...rest } = prev;
            return rest;
        });
        setFormData(prev => ({ ...prev, [question.id]: value }))
        const error = validateField({ value, question })
        if (error) {
            setErrors(prev => ({ ...prev, [question.id]: error }))
        }

    }

    const validateField = ({ value, question }) => {
        if (question.type === 'multi_choice') {
            validateMultiChoice({ value, question })
            return;
        }


        if (question.required && (!value || value.trim() === '')) {
            return 'This field is required.';
        }

        return '';
    }

    const validateMultiChoice = ({ value, question }) => {
        if (question.min && value.length < question.min) {
            return `Please select at least ${question.min} options.`;
        }
        if (question.max && value.length > question.max) {
            return `Please select no more than ${question.max} options.`;
        }
        return '';
    }

    const validateAllFields = () => {
        const newErrors = {};
        questions.forEach(question => {
            const error = validateField({ value: formData[question.id], question });
            if (error) {
                newErrors[question.id] = error;
            }
        });
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateAllFields();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted successfully:', formData);
            alert('Form submitted successfully!');
        }

    }



    return (
        <div className="form-container">
            <h1>Form Page</h1>
            <form onSubmit={handleSubmit} noValidate>
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

