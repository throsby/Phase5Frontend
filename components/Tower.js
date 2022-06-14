import Plot from "./Plot";


function Tower({tower: [tower, towerIndex], waterDry, harvestPlant, time}) {
    console.log(tower)
    return ( 
        <div className={`TowerStack`}>
            {tower["plots"].map((plot,i) => {
                // {console.log("What even is plot",plot)}
                return <Plot key={i} plot={[plot, i]} waterDry={waterDry} harvestPlant={harvestPlant}
                time={time}/>
            })}
        </div>
    )
}

export default Tower