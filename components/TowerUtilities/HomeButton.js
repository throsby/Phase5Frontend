
function HomeButton({ setCurrentGreenhouse }) {

    
    return(
        <div className={"DarkBlueHelper"} onClick={()=>{setCurrentGreenhouse(undefined)}}>⬅
        </div>
    )
}

export default HomeButton;