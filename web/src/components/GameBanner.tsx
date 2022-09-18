interface GameBanner {
  src: string;
  name: string;
  ads: number;
  className: string;
}

const GameBanner = (props: GameBanner) => {
  return (
    <a href="#" className={ `relative rounded-lg overflow-hidden ${props.className}` }>
      <img src={props.src} alt=""/>
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.name}</strong>
        <span className="text-zinc-300 text-sm block">{props.ads} anúncios</span>
      </div>
    </a>
  )
}

export default GameBanner;