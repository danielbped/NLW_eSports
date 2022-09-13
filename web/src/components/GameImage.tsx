interface GameImage {
  src: string;
  name: string;
  ads: number;
}

const GameImage = ({ src, name, ads }: GameImage) => {
  return (
    <a href="#" className="relative rounded-lg overflow-hidden">
      <img src={src} alt=""/>
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{name}</strong>
        <span className="text-zinc-300 text-sm block">{ads} anúncios</span>
      </div>
    </a>
  )
}

export default GameImage;