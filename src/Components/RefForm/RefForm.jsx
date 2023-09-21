import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const HandelSubmitBtn = e => {
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }


    return (
        <div>
            <form onSubmit={HandelSubmitBtn}>
                <input ref={nameRef} defaultValue={'anik ghosh'} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default RefForm;