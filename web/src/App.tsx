import './styles/main.css';
import logoImg from './assets/logo-nlw-esports@3x.png'
import GameBanner from './components/GameBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdBanner } from './components/CreateAdBanner';
import { Form } from './components/Form';

interface Game {
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
    fetch('http://localhost:3000/games')
      .then(response => response.json())
      .then(data => setGames(data))
  })

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img src={ logoImg } alt=""/>
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

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl text-white font-black">Publique um anúncio!</Dialog.Title>
            <Form />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
