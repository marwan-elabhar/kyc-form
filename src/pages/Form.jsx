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
import { useEffect, useState } from 'react';


export default function Form() {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const initialData = {};
        questions.forEach(q => {
            initialData[q.id] = q.type === 'multi_choice' ? [] : '';
        })
        setFormData(initialData);

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
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
                            onChange={(value) => setFormData({ ...formData, [id]: value })}
                        />
                    );
                })}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

