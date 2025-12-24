import useFormField from "./useFormField";


const ProfileForm: React.FC = () => {
    const nameField = useFormField<string>(" ");
    const ageField = useFormField<number>(0);
    const preferencesField = useFormField<{theme: string}>({theme: 'light'});

    const handleSubmit = () => {
        console.log('Name: ', nameField.value);
        console.log('Age: ', ageField.value);
        console.log('Preferences: ', preferencesField.value);
    }

    return(
        <div>
            <input type="text"
            value={nameField.value}
            onChange={(e) => nameField.onChange(e.target.value)}
            placeholder="Enter your name"/>
           <input
        type="number"
        value={ageField.value}
        onChange={(e) => ageField.onChange(Number(e.target.value))}
        placeholder="Enter your age" />

        <select value={preferencesField.value.theme}
        onChange={(e) => preferencesField.onChange({theme: e.target.value})}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
             </select>

             <button onClick={handleSubmit}>Submit</button>
             <button onClick={nameField.reset}></button>

        </div>
    )
}

export default ProfileForm;