function Header({setStatboxVisible, time, setTime , setGameStart, gameStart}) {
    
return(
    <div className="Header">
        <h1>Orto Immaginario</h1>
        <h2>Time left: {time - 1} <button onClick={()=>{setGameStart(0), setTime(121)}}>Start</button></h2>
        {/* <span>
            <h2 onClick={() => {setStatboxVisible(prevState => !prevState)}}>Set StatBox Visible</h2>
        </span> */}
    </div>
)
}

export default Header