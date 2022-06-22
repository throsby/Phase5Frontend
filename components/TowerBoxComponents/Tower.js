import Plot from "./PlotComponents/Plot"


function Tower({tower, waterDry, harvestPlant, time, currentCursorFunction}) {

    
    return (
        <div className={`TowerStack`}>
            {tower[0].map((plot,i) => {
                return <Plot currentCursorFunction={currentCursorFunction} key={i} plot={[plot, i]} waterDry={waterDry} harvestPlant={harvestPlant}
                time={time}/>
            })}
        </div>
    )
}

export default Tower