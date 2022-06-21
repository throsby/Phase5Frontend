function Header({setStatboxVisible}) {
    
return(
    <div className="Header">
        <h1>Orto Immaginario</h1>
        <span>
            <h2 onClick={() => {setStatboxVisible(prevState => !prevState)}}>Set StatBox Visible</h2>
        </span>
    </div>
)
}

export default Header