import { useState } from "react";

const CustomHook = () => {

    const emailState = useState()

    const HandelSubmit = (e) => {
        e.preventDefault()
        console.log((e.target.name.value))
        console.log((e.target.email.value))
        console.log((e.target.password.value))
    }
    return (
        <div>
            <form onSubmit={HandelSubmit}>
                {/* <input value={name} onChange={HandelNameChange} type="text" name="name" /> */}
                <input {...emailState} type="text" name="name" />
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input {...emailState} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHook;