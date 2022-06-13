import React, { useEffect, useState } from "react";

function Plot({plot: [plot, plotIndex], waterDry, harvestPlant, time}) {
    console.log(time)
    const [plotState, setPlotState] = useState(plot)
    const [plotMaturity, setPlotMaturity] = useState(0)
    const [change, setChange] = useState(true)

    // async function waterPlants() {
    //     let config = {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }
    //     let req = await fetch(`http://localhost:9292/water/${plot["tower_id"]}/${plotIndex}`, config)
    //     let res = await req.json()                
    //     setPlotState(res)
    //     console.log("Res",res)
    //     if (plotMaturity < 0.1) {
    //         setPlotMaturity(prevState => prevState + 0.1)
    //     }
    //     console.log(plotMaturity, "water:", parseFloat(res.water_level))
    // }

    // async function takeWaterSample() {
    //     console.log(plot.water_level.toFixed(1))
    //     let config = {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }
    //     let req = await fetch(`http://localhost:9292/sample/${plot["tower_id"]}/${plotIndex}`, config)
    //     let res = await req.json()        
    //     setPlotState(res)
    // }
    
    useEffect(()=> {
        console.log("In UE:",plot.water_level, plotMaturity)
        if (plot.water_level > 0.0 && plotMaturity <= 10) {
            setPlotMaturity((prevMaturity => prevMaturity + 1.0*(plot.water_level + 1.0).toFixed(1)))
            console.log(plotMaturity, ((plot.water_level)).toString())
    }},[time])
    

    let waterSample = waterDry ? "wateringcan" : "sample"

    
    let popGreen = plotMaturity >= 10 ? "green-me" : ""

    return(
        <div onClick={waterDry ? waterPlants : takeWaterSample} className={`Plot tower-${plot["tower_id"]}-plot-${plotIndex} ${waterSample} ${popGreen}`}> 
            <h4>{plotState.water_level.toFixed(1)}</h4>
        </div>
    )
}

export default Plot