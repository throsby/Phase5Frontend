import { useEffect } from "react"

function SubtractTower({currentGreenhouse , setTowers }) {

    async function deleteTower() {
        let config = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch(`${process.env.RUBY_BACKEND_URL}/towers/${currentGreenhouse.id}`, config)
        let res = await req.json()
        setTowers(res)
    }

    return (
        <div className="DarkBlueHelper">
            <h2 onClick={deleteTower}>-</h2>
        </div>
    )
}

export default SubtractTower;