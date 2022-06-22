
function WaterDry({ setWaterDry , waterDry, setCurrentCursorFunction }) {

    function handleClick(){
        setWaterDry(!waterDry)
        setCurrentCursorFunction({"waterDry":!waterDry})
    }
    
    return(
        <div className={"water-dry"} onClick={handleClick}> 
            {waterDry ? <h3>⛲️</h3> : <h3>🧪</h3>} 
        </div>
    )
}

export default WaterDry;