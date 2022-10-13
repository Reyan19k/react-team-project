import Breed1 from "./Breed.js"
import { useEffect, useState } from "react"


const CatsForLifeCard = () => {
    const [cats, setCats] = useState()

    useEffect(() => {
        async function getCats() {
            const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_NU5mYCQqNl9PSQh4QNh8xShqFbfp3eMXKwMQ9szUiYZxaoxjQsyKoDYJJA0dTbw2")
            const data = await res.json()
            console.log(data)
            setCats([...data])
            console.log(cats)
        }
        getCats()
    }, [])

    return (
        <div className="container_cat4life_card">
            <div>
                <p>Cats for Life Card</p>
                <Breed1 />
            </div>
            <div className="cats_container">
                <div className="cats_idividual">
                    {/* <p>{cats[0].id}</p>
                    <img src={cats[0].url} />
                    {cats[0].name} */}
                </div>
                <div className="cats_idividual">
                    {/* <p>{cats[1].id}</p>
                    <img src={cats[1].url} />
                    <p>Cat 2</p> */}
                </div>
                <div className="cats_idividual">
                    {/* <p>{cats[2].id}</p>
                    <img src={cats[2].url} />
                    <p>cat 3</p> */}
                </div>
            </div>
        </div>
    )
}

export default CatsForLifeCard;