import { useEffect, useState } from "react"
import Tower from "./Tower"
import AddTower from "./AddTower"
import SubtractTower from "./SubtractTower"
import WaterDry from "./WaterDry"
import HarvestPlant from "./HarvestPlant"

function TowerBox() {
    const [towers, setTowers] = useState({})
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
    //     async function fetchData() {
    //         let req = await fetch("http://localhost:9292/towers")
    //         let res = await req.json()
    //         setTowers(res)
           
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
                return <Tower key={i} tower={[tower, i]} waterDry={waterDry} harvestPlant={harvestPlant} time={time}/>
            })}
        </div>
    )
}

export default TowerBox;