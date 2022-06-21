import React, { useEffect, useState } from "react";

function Plot({plot: [plot, plotIndex], waterDry, harvestPlant, time}) {
    // console.log("Plot render")
    const [plotState, setPlotState] = useState(plot)
    const [plotMaturity, setPlotMaturity] = useState(0)
    const [change, setChange] = useState(true)
    
    async function waterPlants() {        
        let config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch(`http://localhost:3000/plots/${plot.id}/water`, config)
        let res = await req.json()                
        console.log("Res",res)
        setPlotState(res)
        if (plotMaturity < 0.1) {
            setPlotMaturity(prevState => prevState + 0.1)
        }
        console.log(plotMaturity, "water:", parseFloat(res.water_level))
    }

    async function takeWaterSample() {
        let config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch(`http://localhost:3000/plots/${plot.id}/sample`, config)
        let res = await req.json()        
        console.log("Res",res)
        setPlotState(res)
    }
    
    useEffect(() => {
        // console.log("In UE:",plot.water_level, plotMaturity)
        if (plotState.water_level > 0.0 && plotMaturity <= 10) {
            setPlotMaturity((prevMaturity => prevMaturity + 1.0*(plotState.water_level + 0.1).toFixed(1)))
            // console.log(plotMaturity, ((plot.water_level)).toString())
    }},[time])

    let waterSample = waterDry ? "wateringcan" : "sample"
    
    let popGreen = plotMaturity >= 10 ? "green-me" : ""
    
    // console.log(plotState)
    return(
        <div onClick={waterDry ? waterPlants : takeWaterSample} className={`Plot plot-${plotState.plot_number} ${waterSample} ${popGreen}`}>
            {/* h4 has the hover css */}
            {/* <h6>{plotState.plot_number} - {plotState.water_level.toFixed(1)}</h6> */}
            <h6>{time}</h6>
            <h4> {plotState.water_level.toFixed(1)}</h4>
        </div>
    )
}

export default Plot