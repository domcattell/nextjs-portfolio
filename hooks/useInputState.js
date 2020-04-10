import {useState} from 'react';

const useInputState = (init) => {
    const [newValue, setValue] = useState(init);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValue(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleQuillChange = (value) => {
        setValue(prev => ({
            ...prev,
            description: value
        }))
    }

    const reset = () => {
        setValue(init);
    };
    
    return [newValue, handleChange, handleQuillChange, reset];
}

export default useInputState;