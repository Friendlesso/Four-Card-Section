import { card } from "../data/card";
import { Card } from "./Card/Card";

export function CardLayout() {
  return (
    <section className="card-layout grid grid-rows-1 w-screen lg:w-fit gap-6 lg:gap-0 lg:grid-cols-[1fr_1.25fr_1fr] place-items-center">
      <div className="flex justify-center">
        <Card {...card[0]} />
      </div>
      <div className="grid grid-rows-2 gap-6">
        <Card {...card[1]} />
        <Card {...card[2]} />

      </div>
      <div className="flex justify-center">
        <Card {...card[3]} />
      </div>
    </section>
  )
}