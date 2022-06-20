

export default function Greenhouse({gh, setCurrentGreenhouse}){

    let plants = []

    // console.log(gh)

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
        plants.push(<img className="tower-overhead tomato1" src={`${image}`}/>)
    }

    let panes = []

    for ( let i = 0, j = 0; j < 16; j++, i += 3 ){
        panes.push(<div onMouseOver={hover} onMouseOut={unhover} onClick={(e)=>{setCurrentGreenhouse(e.target.parentNode.getAttribute("greenhouse"))}} className="glasspane">
            {plants[i]}
            {plants[i + 1]}
            {plants[i + 2]}
        </div>)
    }

    // console.log("Panes", panes)

    function hover() {
        // console.log(event.target)
        // console.log(document.getElementsByClassName("glasspane"))
        for(let i = 0; i < document.getElementsByClassName("glasspane").length; i++){
            document.getElementsByClassName("glasspane")[i].style.border="0px"
        }
        for(let i = 0; i < document.getElementsByClassName("tomato1").length; i++){
            document.getElementsByClassName("tomato1")[i].setAttribute('src', "")
        }
    }
    
    function unhover() {
        for(let i = 0; i < document.getElementsByClassName("glasspane").length; i++){
            document.getElementsByClassName("glasspane")[i].style.border="black .05em solid"
        }
        for(let i = 0; i < document.getElementsByClassName("tomato1").length; i++){
            let image = ""
            if (i % 4 == 0){
                image = "/Groupt1.png"
            }
            else if (i % 3 == 0){
                image = "/Groupt2.png"
            }
            else if (i % 2 == 0){
                image = "/GroupL1.png"
            }
            else {
                image = "/GroupL2.png"
            }
            document.getElementsByClassName("tomato1")[i].setAttribute('src', `${image}`)
        }        
    }

    return (
        <>
            <div onMouseOver={hover} onMouseOut={unhover} className="greenhouse" greenhouse={gh.id}>

                {panes}

                {/* <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                </div>
                <div onMouseOver={hover} onMouseOut={unhover} className="glasspane">
                    <img className="tower-overhead tomato1" src="/Groupt2.png"/>
                    <img className="tower-overhead tomato1" src="/Groupt1.png"/>
                    <img className="tower-overhead tomato1" src="/GroupL1.png"/>
                </div> */}


            </div>
        </>
    )
}
