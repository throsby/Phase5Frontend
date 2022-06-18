

function Greenhouses({setGreenhouse}) {

    async function handleclick(){
        let req = await fetch("http://localhost:3000/greenhouses/")
        let res = await req.json()
        console.log("Greenhouses:",res[0])
        setGreenhouse(res[0])   
    }

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
            document.getElementsByClassName("tomato1")[i].setAttribute('src', "/Group33t1.png")
        }        
    }

    return(
        <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="greenhouse">
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
            </div>
            
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
            </div>
            <div onMouseOver={hover} onMouseOut={unhover} onClick={handleclick} className="glasspane">
                <img className="tower-overhead tomato1" src="/Group34t2.png"/>
                <img className="tower-overhead tomato1" src="/Group33t1.png"/>
                <img className="tower-overhead tomato1" src="/Group35L1.png"/>
            </div>
        </div>
    )
}


export default Greenhouses