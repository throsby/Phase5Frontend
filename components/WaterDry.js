
function WaterDry({ setWaterDry , waterDry }) {

    
    return(
        <div className={"water-dry"} onClick={()=>{setWaterDry(!waterDry)}}> 
            {waterDry ? <h3>⛲️</h3> : <h3>🧪</h3>} 
        </div>
    )
}

export default WaterDry;