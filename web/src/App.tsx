import './styles/main.css';
import logoImg from './assets/logo-nlw-esports@3x.png'
import GameBanner from './components/GameBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';

export interface Game {
  id: string;
  bannerUrl: string;
  _count: {
    ads: number
  };
  title: string;
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3000/games')
      .then(({ data }) => setGames(data))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game: Game) =>
          <GameBanner
            src={game.bannerUrl}
            name={game.title}
            ads={game._count.ads}
            key={game.id}
          />
        )}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal data={games} />
      </Dialog.Root>
    </div>
  )
}

export default App
