import { useState } from "react"
import Tower from "../TowerBoxComponents/Tower"
import AddTower from "../TowerUtilities/AddTower"
import SubtractTower from "../TowerUtilities/SubtractTower"
import WaterDry from "../TowerUtilities/WaterDry"
import HarvestPlant from "../TowerUtilities/HarvestPlant"
import HomeButton from "../TowerUtilities/HomeButton"
import MarketBox from "../TowerBoxComponents/MarketBox"
import StatBox from "./StatBox"

function TowerBox({time, states, setCurrentGreenhouse, currentGreenhouse, gameStates}) {
    const [towers, setTowers] = states
    const [waterDry, setWaterDry] = useState(true)
    const [harvestPlant, setHarvestPlant] = useState(true)
    const [gameStart, setGameStart] = gameStates
    const [currentCursorFunction, setCurrentCursorFunction] = useState({"waterDry": true})

    // console.log(currentCursorFunction)

    return (
        <div className="TowerBox">
            <div className="helpers">
                <HomeButton setCurrentGreenhouse={setCurrentGreenhouse}/>
                <HarvestPlant setCurrentCursorFunction={setCurrentCursorFunction} setHarvestPlant={setHarvestPlant} harvestPlant={harvestPlant}/>
                <WaterDry setCurrentCursorFunction={setCurrentCursorFunction} setWaterDry={setWaterDry} waterDry={waterDry} />
                <AddTower currentGreenhouse={currentGreenhouse} setTowers={setTowers} />
                <SubtractTower currentGreenhouse={currentGreenhouse} setTowers={setTowers} />
            </div>
            {towers[currentGreenhouse.id].map((tower,i) => {
                    return <Tower currentCursorFunction={currentCursorFunction} key={i} tower={tower} waterDry={waterDry} harvestPlant={harvestPlant} time={time}/>
            })}
            <>
                <MarketBox time={time}/>
                {/* <StatBox statboxVisible={statboxVisible} setStatboxVisible={setStatboxVisible} /> */}
            </>
        </div>
        
    )
}

export default TowerBox;