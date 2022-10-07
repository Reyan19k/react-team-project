import {Link, Route, Routes, useNavigate } from "react-router-dom";
import CatsForLifeCard from "./cat4lifeCard";

const CatsForLife = () => {
    return (
        <div className='container_cats4life'>
            <div>
                <p>Cats for Life</p>
            </div>
            <div>
                <CatsForLifeCard />
            </div>
            
        </div>
    )
}

export default CatsForLife;