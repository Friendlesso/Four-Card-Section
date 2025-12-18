import { page } from "../../data/page";

export function Heading() {

  return (
    <section className="flex flex-col gap-5 mb-10 p-5">
      <div className="flex flex-col justify-center items-center">
        <p className="text-(--text-p) text-xl sm:text-3xl">{page.subTitle}</p>
        <h1 className="text-(--text-h) font-semibold text-xl sm:text-3xl">{page.title}</h1>
      </div>
      <div className="flex justify-center text-(--text-p)">
        <p className="text-center w-[95%] sm:w-[50%]">{page.description}</p>
      </div>
    </section>
  )

}