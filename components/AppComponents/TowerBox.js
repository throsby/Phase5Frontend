import { useState } from "react"
import Tower from "../TowerBoxComponents/Tower"
import AddTower from "../TowerUtilities/AddTower"
import SubtractTower from "../TowerUtilities/SubtractTower"
import WaterDry from "../TowerUtilities/WaterDry"
import HarvestPlant from "../TowerUtilities/HarvestPlant"
import HomeButton from "../TowerUtilities/HomeButton"


function TowerBox({time, states, setCurrentGreenhouse, currentGreenhouse}) {
    const [towers, setTowers] = states
    const [waterDry, setWaterDry] = useState(true)
    const [harvestPlant, setHarvestPlant] = useState(true)

    return (
        <div className="TowerBox">
            <div className="helpers">
                <HomeButton setCurrentGreenhouse={setCurrentGreenhouse}/>
                <HarvestPlant setHarvestPlant={setHarvestPlant} harvestPlant={harvestPlant}/>
                <WaterDry setWaterDry={setWaterDry} waterDry={waterDry} />
                <AddTower currentGreenhouse={currentGreenhouse} setTowers={setTowers} />
                <SubtractTower currentGreenhouse={currentGreenhouse} setTowers={setTowers} />
            </div>
            {Object.values(towers).map((tower,i) => {
                // {console.log("gosh",tower)}
                return <Tower key={i} tower={tower} waterDry={waterDry} harvestPlant={harvestPlant} time={time}/>
            })}

        </div>
    )
}

export default TowerBox;