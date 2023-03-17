import TowerBox from './AppComponents/TowerBox';
import Header from './AppComponents/Header'
import StatBox from './AppComponents/StatBox'
import { useState, useEffect } from "react"
import Greenhouses from './AppComponents/Greenhouses';

function App() {

  const [greenhouses, setGreenhouses] = useState({})
  const [towers, setTowers] = useState({})
  const [time, setTime] = useState(100)
  
  const [statboxVisible, setStatboxVisible] = useState(false)
  const [currentGreenhouse, setCurrentGreenhouse] = useState({})
  const [gameStart, setGameStart] = useState(0)

  useEffect(()=>{
    let interval = setInterval(()=> {
        setTime(seconds => seconds - 1)
    }, 1000)
    return () => clearInterval(interval)
  },[gameStart])

  useEffect(()=> {
    async function fetchGreenhouses(){
      let req = await fetch("http://localhost:3000/greenhouses")
      let res = await req.json()
      setGreenhouses(res)
    }
    fetchGreenhouses()
  },[])

  useEffect(() => {
    async function fetchData() {
      let req = await fetch(`http://localhost:3000/towers`)
      let res = await req.json()
      console.log("Towers:",res)
      setTowers(res)
      }
      fetchData()
  }, [])
  
  return (
    <div className="App">
      <Header setGameStart={setGameStart} setTime={setTime} time={time} setStatboxVisible={setStatboxVisible}/>
      {currentGreenhouse?.nickname !== undefined ? <TowerBox currentGreenhouse={currentGreenhouse} time={time} states={[towers,setTowers]} setCurrentGreenhouse={setCurrentGreenhouse} gameStates={[gameStart, setGameStart]}/> : <Greenhouses greenhouses={greenhouses} setCurrentGreenhouse={setCurrentGreenhouse}/>}
      {/* {statboxVisible ? <StatBox setStatboxVisible={setStatboxVisible} states={[towers,setTowers]}/> : null} */}
    </div>
  );
}

export default App;
