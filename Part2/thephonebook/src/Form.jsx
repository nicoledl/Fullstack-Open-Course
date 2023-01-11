const Form = ({ fnName, fnNumber, fnAddPerson }) => {
    return (
        <form onSubmit={fnAddPerson}>
            <div>name: <input type={"text"} onChange={fnName} required /></div>
            <div>number: <input type={"tel"} onChange={fnNumber} required /></div>
            <input type="submit" value="add" />
        </form>
    )
}

export default Form;