import { createSignal, JSX, onCleanup, onMount } from "solid-js"

type Props = {
  children: ((isAnimated: boolean) => JSX.Element) | JSX.Element
  animationClass: string
}

function Observer(props: Props) {
  let ref: HTMLDivElement | null = null

  const [isAnimated, setIsAnimated] = createSignal(false)

  onMount(() => {
    const onIntersect: IntersectionObserverCallback = ([entry], observer) => {
      if (entry.isIntersecting) {
        setIsAnimated(true)
        observer.unobserve(entry.target)
      }
    }

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.1 })

    if (ref) {
      observer.observe(ref)
    }

    onCleanup(() => observer.disconnect())
  })

  return (
    <div ref={(el) => (ref = el)} class={isAnimated() ? props.animationClass : ""}>
      {typeof props.children === "function" ? props.children(isAnimated()) : props.children}
    </div>
  )
}

export default Observer
