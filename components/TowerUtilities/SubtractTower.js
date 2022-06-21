import { useEffect } from "react"

function SubtractTower({currentGreenhouse , setTowers }) {

    async function deleteTower() {
        
        let config = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch(`http://localhost:3000/towers/${currentGreenhouse.id}`, config)
        let res = await req.json()
        console.log("Subtracted:",res)
        // setTowers((prevTowers) => {return Object.assign(prevTowers, res)})
        setTowers((prevTowers) => {
            return {...res}
        })
    }

    return (
        <div className="DarkBlueHelper">
            <h2 onClick={deleteTower}>-</h2>
        </div>
    )
}

export default SubtractTower;