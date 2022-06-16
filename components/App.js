// import './App.css';
import TowerBox from './AppComponents/TowerBox';
import Header from './AppComponents/Header'
import StatBox from './AppComponents/StatBox'
import {useState, useEffect} from "react"


function App() {

  const [towers, setTowers] = useState({})

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
      <TowerBox states={[towers,setTowers]}/>
      <StatBox states={[towers,setTowers]}/>
    </div>
  );
}
 
export default App;
