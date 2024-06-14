import { SearchIcon } from "lucide-react"
import { Orbits } from "./orbits"
import { Input } from "@/components/ui"
export const Hero = () => {
  return (
    <section>
      <div className="relative min-h-screen gap-12 py-28 text-muted-foreground">
        <div className="z-0 mx-auto max-w-4xl space-y-5 text-center">
          <h1 className="text-sm font-medium text-indigo-600">
            Discover the best businesses in your area.
          </h1>
          <h2 className="mx-auto text-4xl font-extrabold text-muted-foreground md:text-5xl">
            Discover the{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#E114E5] bg-clip-text text-transparent">
              best and top-rated businesses{" "}
            </span>
            in your area.
          </h2>
          <p className="mx-auto max-w-2xl">
            Read honest reviews and find the top-rated businesses near you.
          </p>
          <div className="relative items-center justify-center gap-x-3">
            <Input
              className="h-12 bg-accent/20 pr-12 backdrop-blur-sm"
              placeholder="Search Local Businesses, Restaurants, and more"
            />
            <div className="absolute right-1 top-1 flex h-10 items-center px-3 backdrop-blur-sm">
              <SearchIcon className="size-5 text-muted-foreground" />
            </div>
          </div>
        </div>
        <Orbits />
      </div>
    </section>
  )
}
