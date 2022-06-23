function Header({setStatboxVisible, time, setTime , setGameStart}) {
    // const [gameStart, setGameStart] = gameStates
    // console.log(document.getElementsByClassName("marketbox")[0]?.childElementCount)

return(
    <div className="Header">
        <h1>Orto Immaginario</h1>
        {time > 0 ? <h2>Time left: {Math.max(time, 0)} <button onClick={()=>{setGameStart(0), setTime(120)}}>Start</button></h2> : <h2>Good Game! Your Score: {document.getElementsByClassName("marketbox")[0]?.childElementCount} <button onClick={()=>{setGameStart(0), setTime(120)}}> Restart</button></h2>}
        {/* <span>
            <h2 onClick={() => {setStatboxVisible(prevState => !prevState)}}>Set StatBox Visible</h2>
        </span> */}
    </div>
)
}

export default Header