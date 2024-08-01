import Link from "next/link"
import Button from "./ui/Button"

export const Hero = () => {
  return (
    <div className="hero bg-[url('../img/kanban-bg.jpg')] bg-cover bg-center backdrop-blur-sm h-[102vh] relative w-full mt-[-75px] overflow-hidden text-white">
      <div className="flex h-full items-center justify-center pt-[80px] gap-20 w-[90%] mx-auto max-w-[1440px]">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <img src="/img/hero.png" alt="SaS product image" className="mx-auto rounded-xl order-last md:min-w-[800px] min-w-[500px] md:h-[500px] max-sm:px-5" />
          <div className="flex flex-col justify-center max-md:items-center scroll-py-4 max-md:text-center gap-2">
            <div className="space-y-2">
              <h6 className="text-3xl font-bold tracking-tight sm:text-4xl">Visualize Success Daily</h6>
              <p className="max-w-[500px] text-xl">Get started today and be organized easily.</p>
            </div>
            <Link href={"/sign-up"}>
            <Button text="Start planning now &#8594;"></Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
