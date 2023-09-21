import useInputState from "../../Hooks/useInputState";

const CustomHookForm = () => {

    // const [name, HandelNameChange] = useInputState('anik')
    const emailState = useInputState('anik@gmail.com')

    const HandelSubmit = e => {
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={HandelSubmit}>
                {/* <input value={name} onChange={HandelNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;