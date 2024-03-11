import { useEffect, useState } from "react"

const breakpointsTailWind = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

const useBreakPoint = (breakPoints: any) => {
  const [size, setSize] = useState<string>("")

  useEffect(() => {
    const updateSize = () => {
      for (const breaks in breakPoints) {
        if (window.matchMedia(`(min-width: ${breakPoints[breaks]})`).matches) {
          setSize(breaks)
        }
      }
    }

    window.addEventListener("resize", updateSize)

    updateSize()

    return () => window.removeEventListener("resize", updateSize)
  }, [breakPoints])

  const smaller = (points: string) => {
    const currentBreakPoint = Object.keys(breakPoints).indexOf(size)
    const targetBreakPoint = Object.keys(breakPoints).indexOf(points)

    return currentBreakPoint < targetBreakPoint
  }

  return { smaller }
}

export default function useLayout() {
  const breakPoints = useBreakPoint(breakpointsTailWind)
  return breakPoints.smaller("lg")
}
