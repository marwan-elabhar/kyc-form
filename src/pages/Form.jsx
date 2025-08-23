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
        "id": "date_of_birth",
        "label": "Date of Birth",
        "type": "date_picker",
        "required": true
    },
    {
        "id": "hobbies",
        "label": "Hobbies",
        "type": "multi_choice",
        "options": ["Reading", "Traveling", "Sports", "Gaming"],
        "min": 1,
        "max": 3,
        required: true
    },
    {
        "id": "country",
        "label": "Country of Residence",
        "type": "drop_down",
        "options": ["Egypt", "USA", "Germany", "Other"],
        required: true
    },
    {
        "id": "bio",
        "label": "Short Bio",
        "type": "text_area",
        "required": false
    }
]

import { fieldsMapper } from '../components/fields/mapper';
import Toast from '../components/Toast';
import { useState, useEffect } from 'react';


export default function Form() {
    const initialData = {};
    questions.forEach(q => {
        initialData[q.id] = q.type === 'multi_choice' ? [] : '';
    })

    const [formData, setFormData] = useState(() => {
        let saved = localStorage.getItem("formData");
        if(!saved) {
            return initialData;
        }

        saved = JSON.parse(saved);
        return { ...initialData, ...saved }

    });
    const [errors, setErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);



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
            return validateMultiChoice({ value, question })
        }


        if (question.required && (!value || value.trim() === '')) {
            return 'This field is required.';
        }

        return '';
    }

    const validateMultiChoice = ({ value, question }) => {
        if (question.min && value.length < question.min) {
            return `Please select at least ${question.min} ${question.min === 1 ? 'option' : 'options'}.`;
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
            setShowSuccess(true)
            setFormData(initialData)
            localStorage.removeItem("formData");
        }

    }



    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    Let us know more about you
                </h1>
                <form onSubmit={handleSubmit} noValidate>
                    {questions.map((question) => {
                        const { id, label, type, options, required, min, max } = question
                        const FieldComponent = fieldsMapper[type];
                        if (!FieldComponent) {
                            return <div className='text-red-500' key={id}>Unsupported field type: {type}</div>;
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
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 
             rounded-lg transition-colors
             dark:bg-blue-500 dark:hover:bg-blue-600"
                    >Submit</button>

                    {showSuccess && (
                        <Toast
                            message="Form submitted successfully!"
                            type="success"
                            isVisible={showSuccess}
                            onClose={() => setShowSuccess(false)}
                        />
                    )}
                </form>
            </div>
        </div>
    )
}

