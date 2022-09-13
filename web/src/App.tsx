import './styles/main.css';
import logoImg from './assets/logo-nlw-esports@3x.png'
import GameImage from './components/GameImage';
import { MagnifyingGlassPlus } from 'phosphor-react';

const games = ['League of Legends', 'Dota 2', 'Counter Strike', 'Apex Legends', 'Fortnite', 'World of Warcraft'];

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={ logoImg } alt=""/>
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>
      
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game: string, index: number) =>
          <GameImage src={`/games/game-${index + 1}.png`} name={game} ads={4}/>
        )}
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou o seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="px-4 py-3 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
