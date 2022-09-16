import { ButtonHTMLAttributes } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  day: string;
}

export function WeekDaysButton(props: Button) {
  return (
    <button className="w-8 h-8 rounded bg-zinc-900" {...props}>{props.day}</button>
  )
}