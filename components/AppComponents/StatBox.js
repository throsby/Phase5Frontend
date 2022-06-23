function StatBox({states}) {

    
    return(
    <div className="statbox">
        <b className="x" onClick={()=>{setStatboxVisible(false)}}>x</b>
    </div>
    )
}

export default StatBox