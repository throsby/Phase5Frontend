function HarvestPlant({setHarvestPlant, harvestPlant}) {

 
    return(
        <div className={"harvest-plant"} onClick={()=>{setHarvestPlant(!harvestPlant)}}> 
            {harvestPlant ? <h3>🌱</h3> : <h3>🧑‍🌾</h3>} 
        </div>
    )
    
}

export default HarvestPlant