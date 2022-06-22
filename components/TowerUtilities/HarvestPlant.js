function HarvestPlant({setHarvestPlant, harvestPlant, setCurrentCursorFunction}) {

    function handleClick(){
        setHarvestPlant(!harvestPlant)
        setCurrentCursorFunction({"harvestPlant":!harvestPlant})
    }

    return(
        <div className={"harvest-plant"} onClick={handleClick}> 
            {harvestPlant ? <h3>🌱</h3> : <h3>🧑‍🌾</h3>} 
        </div>
    )
    
}

export default HarvestPlant