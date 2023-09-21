
const useState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue)

    const onChange = e => {
        setValue(e.target.value)
    }
    console.log(value)
    return {
        value,
        onChange
    }

};

export default useState;