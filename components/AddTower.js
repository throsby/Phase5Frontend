function AddTower({ setTowers }) {

    async function createTower() {
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let req = await fetch("http://localhost:3000/towers", config)
        let res = await req.json()
        // console.log(res)
        // setTowers((prevTowers) => {return Object.assign(prevTowers, res)})
        console.log(res)
        setTowers((prevTowers) => { return {...prevTowers, ...res} })
    }

return (
    <div className="AddTower">
        <h2 onClick={createTower}> + </h2> 
    </div>
)

}

export default AddTower