/* eslint-disable react/prop-types */

const ReuseForm = ({ titel, btn, HandelSubmit, children }) => {

    const HandelLocal = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        HandelSubmit(data)
    }



    return (
        <div>
            {children}
            <form onSubmit={HandelLocal}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={btn} name={btn} />
            </form>
        </div>
    );
};

export default ReuseForm;