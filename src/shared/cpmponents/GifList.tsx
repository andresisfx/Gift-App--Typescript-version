import type { Gif } from "../../gifs/interfaces/gif.interface"

interface Giflist {
    gifs: Gif[]
}

export const GifList = ({ gifs }:Giflist) => {
  return (
    <div className="gifs-container">
     { gifs.map((gif) => (
        <div className="gift-card" key={gif.id}>
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title} </h3>
            <p>{gif.width} x {gif.height}</p>
        </div>
     ))}
    </div>
  )
}
