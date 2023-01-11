const Form = ({ fnCountry}) => {

    return (
        <form>
            <label>Find countries</label>
            <input type={"text"} onChange={fnCountry} ></input>
        </form>
    )
}

export default Form;