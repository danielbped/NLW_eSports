import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from "phosphor-react";
import { Input } from "./Form/Input";
import { WeekDaysButton } from './Form/WeekDaysButton';

export function Form() {
  return (
    <form className="mt-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="game" className="font-semibold">Qual o game?</label>
        <Input
          id="game" placeholder="Selecione o game que deseja jogar"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Seu nome (ou nickname)</label>
        <Input id="name" placeholder="Como te chamam dentro do game?" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
          <Input id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="discord">Qual o seu Discord?</label>
          <Input id="discord" placeholder="Usuario#0000" />
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="weekDays">Quando costuma jogar?</label>
          <div className="grid grid-cols-4 gap-2">
            <WeekDaysButton title="Domingo" day="D"/>
            <WeekDaysButton title="Segunda" day="S" />
            <WeekDaysButton title="Terça" day="T" />
            <WeekDaysButton title="Quarta" day="Q" />
            <WeekDaysButton title="Quinta" day="Q" />
            <WeekDaysButton title="Sexta" day="S" />
            <WeekDaysButton title="Sábado" day="S" />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <label htmlFor="hourStart">Qual horário do dia?</label>
          <div className="grid grid-cols-2 gap-2">
            <Input type="time" placeholder="De" id="hourStart" />
            <Input type="time" placeholder="Até" id="hourEnd" />
          </div>
        </div>
      </div>
      <div className="mt-2 flex gap-2 text-sm">
        <Input type="checkbox" />
        Costumo me conectar ao chat de voz
      </div>
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
  )
}