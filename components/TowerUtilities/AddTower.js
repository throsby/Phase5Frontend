function AddTower({ currentGreenhouse, setTowers }) {
    
    // let API_BASE_URL = process.env.NODE_ENV === "production" ? 'https://lingering-wood-1850.fly.dev' : "http://localhost:3000";
    
    async function createTower() {
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        // let req = await fetch(`${API_BASE_URL}/towers/${currentGreenhouse.id}`, config)
        let req = await fetch(`http://localhost:3000/towers/${currentGreenhouse.id}`, config)
        let res = await req.json()
        // console.log(res)
        // setTowers((prevTowers) => {return Object.assign(prevTowers, res)})
        console.log("Added Tower: ",res)
        setTowers(res)
    }

    return (
        <div className="DarkBlueHelper">
            <h2 onClick={createTower}> + </h2> 
        </div>
    )

}

export default AddTower