import useFormInput from './useFormInput';


const LoginForm: React.FC = () => {
    const username = useFormInput<string>(" ");
    const password = useFormInput<string>(" ");

    const handleSubmit = (e:React.FormEvent) => {
            e.preventDefault();
        console.log("Username: ", username.value);
        console.log("Password: ", password.value);
        }
        return(
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username"{...username}/>
            <input type="password" placeholder="Password"{...password} />
            <button type="submit">Login</button>
             </form>
        )
}

export default LoginForm;