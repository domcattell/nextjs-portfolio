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

    const handleFileChange = (e) => {
        setValue({projectImg: e.target.files[0]});
    }

    const reset = () => {
        setValue(init);
    };
    
    return [newValue, handleChange, handleQuillChange, reset, handleFileChange];
}

export default useInputState;