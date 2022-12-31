import { useState } from 'react';

export const useForm = (formStructure = {}) => {
    
    const [form, setForm] = useState(formStructure);

    const onChangeInput = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const onChangeForm = (values = {}) => {
        setForm({
            ...form,
            ...values
        });
    }

    const onResetForm = () => {
        setForm(formStructure);
    }
    
    return {
        form,
        onChangeInput,
        onChangeForm,
        onResetForm
    }
}
