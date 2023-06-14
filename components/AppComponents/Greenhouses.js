import Greenhouse from "./Greenhouse"

function Greenhouses({greenhouses, setCurrentGreenhouse}) {

    return(
        <div className="greenhouse-box">
            {greenhouses ? Object.values(greenhouses).map((gh, i) => {
                return <Greenhouse key={i} gh={gh} setCurrentGreenhouse={setCurrentGreenhouse}/>
            }) : <><div class="tenor-gif-embed" data-postid="15625101" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/cubemelt-icecube-ten-diving-perfect-gif-15625101">Cubemelt Icecube GIF</a>from <a href="https://tenor.com/search/cubemelt-gifs">Cubemelt GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script></>}
        </div>
    )
}


export default Greenhouses