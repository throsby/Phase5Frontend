import React, { useEffect, useState } from "react";

function Plot({plot: [plot, plotIndex], waterDry, harvestPlant, time, currentCursorFunction}) {
    // console.log("Plot render")
    const [plotState, setPlotState] = useState(plot)
    const [plotMaturity, setPlotMaturity] = useState(0)
    const [image, setImage] = useState([])

    function onDragStartHandler(ev) {
        // console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
        // console.log(ev)
        // console.log(ev.target)
        ev.target.setAttribute("id", "selection")
        ev.dataTransfer.setData("text", ev.target.innerHtml);
        ev.dataTransfer.effectAllowed = "move";
        // console.log(ev.dataTransfer.items)
        // ev.target.parentNode.removeChild(ev.target)
    }

    function onDragOverHandler(ev) {
        ev.preventDefault();
        // ev.dataTransfer.dropEffect = "copy";
        // document.getElementById("selection").style.cursor = url("../../public/grab-glove.png")
        // console.log(ev.target)
        // ev.target.style.cursor = url("../public/grab-glove.png"), "grabbing"; 
        console.log(ev.target)
        if(ev.target.classList[0] === "Plot"){
            ev.target.setAttribute("id", "dropzone")
        }
        else {
            ev.target.parentNode.setAttribute("id","dropzone")
        }
        // ev.dataTransfer.effectAllowed = "move";
    }
    
    function onDragExitHandler(ev){
        let dropzone = document.getElementById("dropzone")  
        dropzone.removeAttribute("id")
    }

    function drop(ev) {
        ev.preventDefault();
        // console.log(ev)
        // let data = ev.dataTransfer.getData("text");
        // ev.dataTransfer.dropEffect = "move"
        let dropzone = document.getElementById("dropzone")
        console.log(dropzone.childNodes.length)
        let selection = document.getElementById("selection")
        if (dropzone.childNodes.length < 2 ){            
            if (ev.target.classList[0] === "Plot"){
                selection.src=plotState.plot_number%2==1 ? "plant-0-right.png" : "plant-0-left.png"
                ev.target.append(selection);
            }
            else {
                ev.target.parentNode.append(selection);
            }
        }
        else {
            return false
        }
        
        
        // console.log(dropzone)
        // console.log(selection)
        dropzone.removeAttribute("id")
        selection.removeAttribute("id")
        
    }
    
    function handleClick(e){
        Object.keys(currentCursorFunction)[0] === "waterDry" ? 
            (currentCursorFunction["waterDry"] ? 
                    waterPlants()
                : 
                    
                    takeWaterSample())
        :
            (currentCursorFunction["harvestPlant"] ? 
                    plantPlot()
                : 
                    console.log("Harvest"))
    }
    
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
    
    async function plantPlot(){
        if (image.length = 0 ){
        setImage(<img draggable={true} onDragStart={onDragStartHandler} src={plotState.plot_number%2==1 ? "plant-0-right.png" : "plant-0-left.png"}></img>)}
        else {
            setImage(prevState => [...prevState,<img draggable={true} onDragStart={onDragStartHandler} src={plotState.plot_number%2==1 ? "plant-0-right.png" : "plant-0-left.png"}></img> ])
        }
    }


    useEffect(() => {
        // console.log("In UE:",plot.water_level, plotMaturity)
        if (plotState.water_level > 0.0 && plotMaturity <= 10) {
            // setPlotMaturity((prevMaturity => prevMaturity + 1.0*(plotState.water_level + 0.1).toFixed(1)))
            // console.log(plotMaturity, ((plot.water_level)).toString())
        }
        setPlotMaturity()
    },[time])

    useEffect(()=> {



    }, [plotState.water_level])

    let cursorValue = ""
    cursorValue = Object.keys(currentCursorFunction)[0] === "waterDry" ?
    (currentCursorFunction["waterDry"] ?  "wateringcan" : "sample") :
    (currentCursorFunction["harvestPlant"] ? "seedling" : "harvest")

    let popGreen = plotMaturity >= 10 ? "green-me" : ""
    // console.log(plotState)
    return(
        <div onDragLeave={onDragExitHandler} onDrop={drop} onDragOver={onDragOverHandler} onClick={handleClick} className={`Plot plot-${plotState.plot_number} ${cursorValue} ${popGreen}`}>
            {image}
            
            {/* {plotState.plot_number%2==0 && <img draggable={true} onDragStart={onDragStartHandler} src={"seedling.png"}/>} */}
            {/* h4 has the hover css */}
            {/* <h6>{plotState.plot_number} - {plotState.water_level.toFixed(1)}</h6> */}
            {/* <h6>{plotMaturity}</h6> */}
            {(cursorValue === "wateringcan" || cursorValue === "sample") && <h4>{plotState.water_level.toFixed(1)}</h4>}
            {/* {cursorValue === "seedling" && <h4>{time}</h4>}
            {cursorValue === "harvest" && <h4>{time}</h4>} */}
        </div>
    )
}

export default Plot