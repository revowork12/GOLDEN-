import { useRef, useEffect, useState } from "react"

const images = [
  {
    src: "/images/executive-office.webp",
    alt: "Executive office with city skyline view",
    objectPosition: "center 40%",
  },
  {
    src: "/images/office-open.webp",
    alt: "Open office workspace",
    objectPosition: "center center",
  },
  {
    src: "/images/beauty-lounge.webp",
    alt: "Beauty lounge reception",
    objectPosition: "center 30%",
  },
  {
    src: "/images/office-lobby.webp",
    alt: "Office building lobby",
    objectPosition: "center center",
  },
]

const cellBase = {
  overflow: "hidden",
  borderRadius: "8px",
}

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
}

export default function MagazineGrid() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto",
        aspectRatio: "9 / 16",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Row 1: 40% | 60% */}
      <div style={{ display: "flex", gap: "4px", flex: "1 1 50%", minHeight: 0 }}>
        <div
          style={{
            ...cellBase,
            flex: "40%",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(1.04)",
            transition: "opacity 0.6s ease 0ms, transform 0.6s ease 0ms",
          }}
        >
          <img src={images[1].src} alt={images[1].alt} style={{ ...imgStyle, objectPosition: images[1].objectPosition }} />
        </div>
        <div
          style={{
            ...cellBase,
            flex: "60%",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(1.04)",
            transition: "opacity 0.6s ease 80ms, transform 0.6s ease 80ms",
          }}
        >
          <img src={images[0].src} alt={images[0].alt} style={{ ...imgStyle, objectPosition: images[0].objectPosition }} />
        </div>
      </div>

      {/* Row 2: 60% | 40% */}
      <div style={{ display: "flex", gap: "4px", flex: "1 1 50%", minHeight: 0 }}>
        <div
          style={{
            ...cellBase,
            flex: "60%",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(1.04)",
            transition: "opacity 0.6s ease 160ms, transform 0.6s ease 160ms",
          }}
        >
          <img src={images[3].src} alt={images[3].alt} style={{ ...imgStyle, objectPosition: images[3].objectPosition }} />
        </div>
        <div
          style={{
            ...cellBase,
            flex: "40%",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(1.04)",
            transition: "opacity 0.6s ease 240ms, transform 0.6s ease 240ms",
          }}
        >
          <img src={images[2].src} alt={images[2].alt} style={{ ...imgStyle, objectPosition: images[2].objectPosition }} />
        </div>
      </div>
    </section>
  )
}
