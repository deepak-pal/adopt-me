import { useState } from "react"

const SearchParams = () => {
    const [locationName, setLocationName] = useState("Pune Maharashtra")
    if (1 + 1 === 2) {
        const [animal, setAnimal] = useState("sample");
    }
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={(e) => setLocationName(e.target.value)} value={locationName} placeholder="Loction">
                    </input>

                </label>
                <button>Submit</button>
            </form>
        </div>
    )

}
export default SearchParams;