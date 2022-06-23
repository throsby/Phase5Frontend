import { useEffect } from "react";

export default function MarketBox({time}){
    let timerTesting = 0

    function onDragOverHandler(ev) {
        ev.preventDefault();
        
        console.log(ev.target)
        ev.target.setAttribute("id", "dropzone")
    }
    
    function onDragExitHandler(ev){
        let dropzone = document.getElementById("dropzone")  
        dropzone.removeAttribute("id")
    }

    function drop(ev) {
        ev.preventDefault();
        // console.log(ev)
        // let data = ev.dataTransfer.getData("text");
        // ev.dataTransfer.dropEffect = "move"
        let dropzone = document.getElementById("dropzone")
        console.log(dropzone.childNodes.length)
        let selection = document.getElementById("selection")
        
        if (ev.target.classList[0] === "marketbox"){
            selection.src="tomato.png"
            
            ev.target.append(selection);
            selection.draggable="false"
        }
        else {
            ev.target.parentNode.append(selection);
        }
        
        dropzone.removeAttribute("id")
        selection.removeAttribute("id")
    }

    let mbc = document.querySelector(".marketbox-container")

    useEffect(()=>{
        if (time === 0){
            // setStatboxVisible(true)
        }
    },[time])

return (<>
    { <div className={`marketbox-container ${time < timerTesting ? "gameover" : ""}`}>
        <div onDragLeave={onDragExitHandler} onDrop={drop} onDragOver={onDragOverHandler} className="marketbox">

        </div>
        <img className="truck" src={"truck2.png"}/>
    </div>}</>)

}