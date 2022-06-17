

function Greenhouses({setGreenhouse}) {

    async function handleclick(){            
        let req = await fetch("http://localhost:3000/greenhouses/")
        let res = await req.json()
        console.log("Greenhouses:",res[0])
        setGreenhouse(res[0])   
    }

    return(
        <div onClick={handleclick} className="greenhouse">
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
            <div onClick={handleclick} className="glasspane"/>
        </div>
    )
}


export default Greenhouses