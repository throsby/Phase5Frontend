import { useEffect } from "react"
import Greenhouse from "./Greenhouse"

function Greenhouses({greenhouses, setCurrentGreenhouse}) {

    return(
        <div className="greenhouse-box">
            {Object.values(greenhouses).map((gh, i) => {
                return <Greenhouse key={i} gh={gh} setCurrentGreenhouse={setCurrentGreenhouse}/>
            })}
        </div>
    )
}


export default Greenhouses