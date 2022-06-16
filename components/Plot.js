import React, { useEffect, useState } from "react";

function Plot({plot: [plot, plotIndex], waterDry, harvestPlant, time}) {
    // console.log(time)
    const [plotState, setPlotState] = useState(plot)
    const [plotMaturity, setPlotMaturity] = useState(0)
    const [change, setChange] = useState(true)
    
    // console.log(plot)
    async function waterPlants() {    
        // console.log(plotIndex)
        // console.log(plot)
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
        // console.log(plot.water_level.toFixed(1))
        let config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch(`http://localhost:3000/plots/${plotIndex}/sample`, config)
        let res = await req.json()        
        console.log("Res",res)
        setPlotState(res)
    }
    
    useEffect(()=> {
        // console.log("In UE:",plot.water_level, plotMaturity)
        if (plot.water_level > 0.0 && plotMaturity <= 10) {
            setPlotMaturity((prevMaturity => prevMaturity + 1.0*(plot.water_level + 1.0).toFixed(1)))
            console.log(plotMaturity, ((plot.water_level)).toString())
    }},[time])
    

    let waterSample = waterDry ? "wateringcan" : "sample"
    
    let popGreen = plotMaturity >= 10 ? "green-me" : ""
    // console.log("PLOT", plotState)
    
    return(
        <div onClick={waterDry ? waterPlants : takeWaterSample} style={{ "border-radius": (plotIndex % 2 == 1 ? "25px 5px 3px 3px" : "5px 25px 3px 3px" ), "margin": (plotIndex % 2 == 1 ? "4px 2px 4px 8px" : "4px 8px 4px 2px") }} className={`Plot tower-${plotState.tower_id} plot-$ ${waterSample} ${popGreen}`}> 
            {/* h4 has the hover css */}
            <h6>{plotState.plot_number} - {plotState.water_level.toFixed(1)}</h6>
        </div>
    )
}

export default Plot