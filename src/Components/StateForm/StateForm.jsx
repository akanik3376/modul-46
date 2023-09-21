import { useState } from "react";

const StateForm = () => {
    const [name, setName] = useState('')
    const [email, setMail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)

    const HandelSubmit = e => {
        e.preventDefault()



        if (password.length < 6) {
            setError('password must be 6 chr or more')
        } else {
            setError("")
            console.log(name, email, password)
        }

    }



    const HandelName = e => {
        // console.log(e.target.value)
        setName(e.target.value)
    }
    const HandelEmail = e => {
        // console.log(e.target.value)
        setMail(e.target.value)
    }
    const HandelPassword = e => {
        // console.log(e.target.value)
        setPassword(e.target.value)

    }




    return (
        <div>
            <form onSubmit={HandelSubmit}>
                <input onChange={HandelName} type="text" name="name" />
                <br />
                <input onChange={HandelEmail} type="email" name="email" id="" />
                <br />
                <input onChange={HandelPassword} type="password" name="password" id="" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateForm;