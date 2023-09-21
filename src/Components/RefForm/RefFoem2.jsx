import { useEffect, useRef } from "react";

const RefFoem2 = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const HandelForm = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)


    }

    return (
        <div>
            <form onSubmit={HandelForm}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" required />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default RefFoem2;