import { useEffect, useState } from "react"
import Tower from "../TowerBoxComponents/Tower"
import AddTower from "../TowerUtilities/AddTower"
import SubtractTower from "../TowerUtilities/SubtractTower"
import WaterDry from "../TowerUtilities/WaterDry"
import HarvestPlant from "../TowerUtilities/HarvestPlant"

import { useTransition, animated } from 'react-spring'


function TowerBox({states}) {
    // const [towers, setTowers] = useState({})
    let towers = states[0]
    let setTowers = states[1]
    const [waterDry, setWaterDry] = useState(true)
    const [harvestPlant, setHarvestPlant] = useState(true)
    const [time, setTime] = useState(0)


    useEffect(()=>{
        let interval = setInterval(()=> {
            setTime(seconds => seconds + 1)
        }, 1000)
        return () => clearInterval(interval)
    },[])

    // useEffect(() => {
    //  async function fetchData() {
    //     let req = await fetch("http://localhost:3000/towerplots/")
    //     let res = await req.json()
    //     console.log("Towers:",res)
    //     setTowers(res)
    //     }
    //     fetchData()
    // }, [])

    return (
        <div style={{ "--towers": Object.keys(towers).length }} className="TowerBox">
            <div className={"helpers"}> 
                <HarvestPlant setHarvestPlant={setHarvestPlant} harvestPlant={harvestPlant}/>
                <WaterDry setWaterDry={setWaterDry} waterDry={waterDry} />
                <AddTower setTowers={setTowers} />
                <SubtractTower setTowers={setTowers} />
            </div>
            
            {Object.values(towers).map((tower,i) => {
                // {console.log("gosh",tower)}
                return <Tower key={i} tower={[tower, i]} waterDry={waterDry} harvestPlant={harvestPlant} time={time}/>
            })}

        </div>
    )
}

export default TowerBox;