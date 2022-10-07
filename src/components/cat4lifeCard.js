import Breed1 from "./Breed.js"

const CatsForLifeCard = () => {
    return (
        <div className="container_cat4life_card">
            <div>
                <p>Cats for Life Card</p>
                <Breed1 />
            </div>
            <div className="cats_container">
                <p>Cat 1</p>
                <p>Cat 2</p>
                <p>Cat 3</p>
            </div>
        </div>
    )
}

export default CatsForLifeCard;