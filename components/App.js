// import './App.css';
import TowerBox from './AppComponents/TowerBox';
import Header from './AppComponents/Header'
import StatBox from './AppComponents/StatBox'
import {useState, useEffect} from "react"
import Greenhouses from './AppComponents/Greenhouses';



function App() {

  const [greenhouse, setGreenhouse] = useState({})
  const [towers, setTowers] = useState({})
  const [time, setTime] = useState(0)

  useEffect(()=>{
    let interval = setInterval(()=> {
        setTime(seconds => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  },[])

  useEffect(() => {
    async function fetchData() {
       let req = await fetch("http://localhost:3000/towerplots/")
       let res = await req.json()
       console.log("Towers:",res)
       setTowers(res)
       }
       fetchData()
   }, [])

  return (
    <div className="App">
      <Header />
      {!greenhouse && <Greenhouses setGreenhouse={setGreenhouse}/>}
      {greenhouse && <TowerBox time={time} states={[towers,setTowers]} setGreenhouse={setGreenhouse}/>}
      <StatBox states={[towers,setTowers]}/>
    </div>
  );
}
 
export default App;
