function Header({setStatboxVisible}) {
    
return(
    <div className="Header">
        <h1>Orto Immaginario</h1>
        <div>
            <h2 onClick={() => {setStatboxVisible(prevState => !prevState)}}>Set StatBox Visible</h2>
        </div>
    </div>
)
}

export default Header