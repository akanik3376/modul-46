import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue)

    // const HandelChange = (e) => {
    //     setValue(e.target.value)
    // }
    // return [value, HandelChange]
    const onChange = (e) => {
        setValue(e.target.value)
    }
    console.log(value)

    return {
        value,
        onChange
    }
}

export default useInputState;