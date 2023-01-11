import Weather from "./Weather"

const Find = ({ country, onClickFn }) => {
    const countryData = (data) => {
        const languages = Object.values(data[0].languages)
        const flag = Object.values(data[0].flags)[0]
        const capital = data[0].capital[0].replace(' ', '_')
        return (
            <div>
                <h1>{data[0].name.common}</h1>
                <div>
                    <p>Capital {data[0].capital[0]}</p>
                    <p>Population {data[0].population}</p>
                </div>
                <h3>Lenguages</h3>
                <div>
                    <ul>
                        {languages.map((elem, i) => <li key={i}>{elem}</li>)}
                    </ul>
                </div>
                <img src={flag} alt="flag" style={{ width: "200px" }} />
                <h3>Wheather in {data[0].name.common}</h3>
                <Weather capital={capital} />
            </div>
        )
    }

    return (
        <div>
            {
                country.length === 1 ? countryData(country)
                    : country.length <= 10 ? country.map((elem, i) => {
                        return (
                            <p key={i}> {elem.name.common} <button onClick={() => onClickFn([elem])}>show</button></p>
                        )
                    }
                    )
                        : <p>Too many matches, specify another filter</p>
            }
        </div>
    )
}

export default Find;