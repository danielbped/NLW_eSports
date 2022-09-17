import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ButtonHTMLAttributes } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  day: string;
  value: string;
  weekDays: string[];
}

interface Buttons {
  weekDays: string[];
  setWeekDays: Function;
}

export function WeekDaysButton({ day, weekDays, ...props}: Button) {
  return (
    <ToggleGroup.Item
      className={`w-8 h-8 rounded ${weekDays.includes(props.value) ? 'bg-violet-500' : 'bg-zinc-900 '}`}
      {...props}
      value={props.value}
    >
      {day}
    </ToggleGroup.Item>
  )
}

export function WeekDaysButtons({ weekDays, setWeekDays }: Buttons) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="weekDays">Quando costuma jogar?</label>
      <ToggleGroup.Root
        type="multiple"
        className="grid grid-cols-4 gap-2"
        value={weekDays}
        onValueChange={(e) => setWeekDays(e)}
      >
        <WeekDaysButton title="Domingo" day="D" value="0" weekDays={weekDays} />
        <WeekDaysButton title="Segunda-feira" day="S" value="1" weekDays={weekDays} />
        <WeekDaysButton title="Terça-feira" day="T" value="2" weekDays={weekDays} />
        <WeekDaysButton title="Quarta-feira" day="Q" value="3" weekDays={weekDays} />
        <WeekDaysButton title="Quinta-feira" day="Q" value="4" weekDays={weekDays} />
        <WeekDaysButton title="Sexta-feira" day="S" value="5" weekDays={weekDays} />
        <WeekDaysButton title="Sábado" day="S" value="6" weekDays={weekDays} />
      </ToggleGroup.Root>
    </div>
  )
}