const Persons = ({ filterArr, personsArr, onClickErase }) => {
    return (
        <div>
            {filterArr[0]
                ? filterArr.map((person, i) => <p key={i}>{person.name} {person.number} <button type="submit" onClick={() => onClickErase(person.id, person.name)}>delete</button></p>)
                : personsArr.map((person, i) => <p key={i}>{person.name} {person.number} <button type="submit" onClick={() => onClickErase(person.id, person.name)}>delete</button></p>)}
        </div>
    )
}

export default Persons;