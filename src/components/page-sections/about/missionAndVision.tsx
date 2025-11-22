import { RiStockFill } from "react-icons/ri";

export function VisionMissionSection() {
  return (
    <section className="w-full bg-background md:py-24 py-10 text-white relative overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="w-full flex items-center justify-center">
          <div className="px-5 mb-2 rounded-full w-fit font-semibold border border-primary text-primary text-center py-2">
            <p className="md:text-sm text-xs uppercase text-nowrap">
              Our Mission & Vision
            </p>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight capitalize text-black mt-1">
          Dubai's Leading Forex Trading Academy
        </h2>

        <p className="text-black/80 max-w-2xl mx-auto mt-5 text-lg">
          We empower aspiring traders—students, professionals, and
          entrepreneurs— through practical training and expert mentorship,
          helping them achieve financial success and independence in global
          markets.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-6 mt-24 mb-5 grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
        {/* Vision */}
        <div className="flex flex-col md:items-start items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <RiStockFill className="size-8 text-white" />
          </div>

          <h3 className="text-3xl font-bold text-primary uppercase tracking-wide">
            Vision
          </h3>

          <p className="text-black/80 md:text-start text-center leading-relaxed">
            <b>Our vision is to build traders who lead, not follow.</b>
            At CLT Academy, we develop disciplined, confident, and independent
            traders who think strategically and perform under pressure. We don’t
            just teach trading — we create market leaders.
          </p>
        </div>

        {/* Center Circle Logo */}
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            <div className="absolute animate-pulse w-full h-full rounded-full bg-primary/10"></div>
            <div className="absolute animate-pulse w-2/3 h-2/3 rounded-full bg-primary/20"></div>
            <div className="absolute a w-1/2 h-1/2 rounded-full bg-primary flex items-center justify-center">
              <img
              style={{
                filter: "contrast(0.1) brightness(10.2)",
              }}
                src="/logo.png"
                alt="logo"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="flex flex-col gap-6 md:items-start items-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <RiStockFill className="size-8 text-white" />
          </div>

          <h3 className="text-3xl font-bold text-primary uppercase tracking-wide">
            Mission
          </h3>

          <p className="text-black/80 md:text-start text-center leading-relaxed">
            <b>
              Our mission is to develop independent, disciplined traders through
              structure, strategy, and real-world mentorship.
            </b>
            We provide a clear, practical path that builds confidence and
            removes guesswork.
          </p>
        </div>
      </div>
    </section>
  );
}
