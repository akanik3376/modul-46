import { useState } from "react";



const StateForm2 = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()

    const HandelForm = (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        console.log(name, email, password)
    }

    const handelName = e => {
        console.log(e.target.name)
        setName(e.target.value)
    }

    const HandelEmail = e => {
        setEmail(e.target.value)
    }

    const HandelPassword = e => {
        setPassword(e.target.value)
    }


    return (
        <div>
            <form onSubmit={HandelForm}>
                <input onChange={handelName} type="text" name="name" />
                <br />
                <input onChange={HandelEmail} type="email" name="email" />
                <br />
                <input onChange={HandelPassword} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateForm2;