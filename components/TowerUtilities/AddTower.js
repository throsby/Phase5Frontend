function AddTower({ currentGreenhouse, setTowers }) {
    
    async function createTower() {
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        // let req = await fetch(`${API_BASE_URL}/towers/${currentGreenhouse.id}`, config)
        let req = await fetch(`${process.env.RUBY_BACKEND_URL}/towers/${currentGreenhouse.id}`, config)
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