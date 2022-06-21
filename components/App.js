import TowerBox from './AppComponents/TowerBox';
import Header from './AppComponents/Header'
import StatBox from './AppComponents/StatBox'
import { useState, useEffect } from "react"
import Greenhouses from './AppComponents/Greenhouses';

function App() {

  const [greenhouses, setGreenhouses] = useState({})
  const [towers, setTowers] = useState({})
  const [time, setTime] = useState(0)
  const [statboxVisible, setStatboxVisible] = useState(false)
  const [currentGreenhouse, setCurrentGreenhouse] = useState({})

  useEffect(()=>{
    let interval = setInterval(()=> {
        setTime(seconds => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  },[])

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
      let req = await fetch(`http://localhost:3000/towerplots/${currentGreenhouse?.id}`)
      let res = await req.json()
      console.log("Towers:",res)
      setTowers(res)
      }
      fetchData()
  }, [currentGreenhouse])

  return (
    <div className="App">
      <Header setStatboxVisible={setStatboxVisible}/>
      {currentGreenhouse?.nickname !== undefined ? <TowerBox currentGreenhouse={currentGreenhouse} time={time} states={[towers,setTowers]} setCurrentGreenhouse={setCurrentGreenhouse}/> : <Greenhouses greenhouses={greenhouses} setCurrentGreenhouse={setCurrentGreenhouse}/>}
      {statboxVisible ? <StatBox setStatboxVisible={setStatboxVisible} states={[towers,setTowers]}/> : null}
    </div>
  );
}

export default App;
