
type CardProps = {
  title: string 
  description: string 
  icon: string 
  bgColor: string
}

export function Card({ title, description, icon, bgColor }: CardProps) {

  return (
    <article key={title} className={`flex relative flex-col max-w-[90vw] w-[90vw] lg:w-80 gap-8 p-6 rounded-[10px] overflow-hidden shadow-md`}>
      <div className={`absolute top-0 left-0 h-0.75 w-full ${bgColor}`} />
      <div className="flex flex-col gap-2 pt-2">
        <h2 className="text-xl font-bold text-(--text-h)">{title}</h2>
        <p className="font-extralight text-sm text-(--text-p) w-[95%]">{description}</p>
      </div>
      <div className="flex justify-end">
        <img src={icon} alt="Icon image" />
      </div>
    </article>

  )

}