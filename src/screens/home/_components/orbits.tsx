import { Icons } from "@/components/shared/icons"
import OrbitingCircles from "@/components/shared/orbiting-circles"
export const Orbits = () => {
  return (
    <div className="max-w-screen absolute -top-20 left-0 -z-10 flex h-full w-full items-center justify-center overflow-hidden opacity-50">
      <OrbitingCircles
        className="h-6 w-6 border-none bg-transparent "
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.facebook />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-6 w-6 border-none bg-transparent "
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.twitter />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-7 w-7 border-none bg-transparent "
        radius={190}
        duration={40}
        reverse
      >
        <Icons.google />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-7 w-7 border-none bg-transparent "
        radius={190}
        duration={40}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-7 w-7 border-none bg-transparent "
        radius={300}
        duration={60}
      >
        <Icons.google />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-7 w-7 border-none bg-transparent "
        radius={300}
        duration={60}
        delay={20}
      >
        <Icons.gitHub />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-7 w-7 border-none bg-transparent "
        radius={460}
        duration={30}
        reverse
      >
        <Icons.google />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-7 w-7 border-none bg-transparent "
        radius={460}
        duration={30}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-7 w-7 border-none bg-transparent "
        radius={640}
        duration={70}
      >
        <Icons.google />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-7 w-7 border-none bg-transparent "
        radius={640}
        duration={70}
        delay={20}
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  )
}
