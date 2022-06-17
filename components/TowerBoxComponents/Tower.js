import Plot from "./PlotComponents/Plot"


function Tower({tower, waterDry, harvestPlant, time}) {

    console.log(tower)


    // console.log(tower)
    return ( 
        <div className={`TowerStack`}>
            {Object.values(tower).map((plot,i) => {
                return <Plot key={i} plot={[plot, i]} waterDry={waterDry} harvestPlant={harvestPlant}
                time={time}/>
            })}
        </div>
    )
}

export default Tower