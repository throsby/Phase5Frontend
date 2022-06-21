export default function Greenhouse({gh, setCurrentGreenhouse}){

    let plants = []

    for(let j = 0; j < 48; j++ ){
        let image = ""
        if (j % 4 == 0){
            image = "/Groupt1.png"
        }
        else if (j % 3 == 0){
            image = "/Groupt2.png"
        }
        else if (j % 2 == 0){
            image = "/GroupL1.png"
        }
        else {
            image = "/GroupL2.png"
        }
        plants.push(<img className="tower-overhead tomato" src={`${image}`}/>)
    }

    let panes = []

    for ( let i = 0, j = 0; j < 16; j++, i += 3 ){
        panes.push(<div key={j} className="glasspane">
            {plants[i]}
            {plants[i + 1]}
            {plants[i + 2]}
        </div>)
    }

    return (
        <>
            <div key={gh.id} className="greenhouse" onClick={() => {setCurrentGreenhouse(gh)}} greenhouse={gh.id}>
                {panes}
            </div>
        </>
    )
}
