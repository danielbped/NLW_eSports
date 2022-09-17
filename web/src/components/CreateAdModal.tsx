import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, GameController } from "phosphor-react";
import { Input } from "./Form/Input";
import { WeekDaysButtons } from './Form/WeekDaysButtons';
import { Game } from '../App';
import { FormEvent, useState } from 'react';
import axios from 'axios';

interface props {
  data: Game[]
}

export function CreateAdModal({ data }: props) {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData);

    if (!data.name) {
      return
    }

    try {
      await axios.post(`http://localhost:3000/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel,
      })

      alert('Anúncio criado com sucesso!');
    } catch (err) {
      console.log(err);
      alert('Erro ao criar o anúncio');
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl text-white font-black">Publique um anúncio!</Dialog.Title>

        <form className="mt-8 flex flex-col gap-4" onSubmit={handleCreateAd}>
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">Qual o game?</label>
            <select
              id="game"
              name="game"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
              defaultValue=""
            >
              <option disabled value="">Selecione o game que deseja jogar</option>
              {data.map(game => <option key={game.id} value={game.id}>{game.title}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input id="name" name="name" placeholder="Como te chamam dentro do game?" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input id="yearsPlaying" name="yearsPlaying" placeholder="Tudo bem ser ZERO" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual o seu Discord?</label>
              <Input id="discord" name="discord" placeholder="Usuario#0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <WeekDaysButtons
              weekDays={weekDays}
              setWeekDays={setWeekDays}
            />
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input type="time" placeholder="De" id="hourStart" name="hourStart" />
                <Input type="time" placeholder="Até" id="hourEnd" name="hourEnd" />
              </div>
            </div>
          </div>
          <label className="mt-2 flex gap-2 text-sm">
            <Checkbox.Root
              className="w-6 h-6 p-1 items-center rounded bg-zinc-900"
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                checked === true ? setUseVoiceChannel(checked) : setUseVoiceChannel(false);
              }}
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}