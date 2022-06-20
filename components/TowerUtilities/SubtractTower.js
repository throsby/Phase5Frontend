import { useEffect } from "react"

function SubtractTower({currentGreenhouse , setTowers }) {

    async function deleteTower() {
        
        let config = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch("http://localhost:3000/towers", config)
        let res = await req.json()
        // console.log(res)
        // setTowers((prevTowers) => {return Object.assign(prevTowers, res)})
        setTowers((prevTowers) => {
            return {...res}
        })
    }

    return (
        <div className="SubtractTower">
            <h2 onClick={deleteTower}>-</h2>
        </div>
    )
}

export default SubtractTower;