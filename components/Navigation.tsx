import Link from "next/link";

export function Navigation({ fixed = true }: { fixed?: boolean }) {
  return (
    <nav
      className={`${fixed ? "fixed" : "absolute"} top-0 left-0 right-0 z-50`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,8,0.7) 0%, rgba(10,10,8,0.35) 50%, transparent 100%)",
        }}
      />
      <div
        className="relative h-14 flex items-center"
        style={{ padding: "0 clamp(20px,5vw,80px)" }}
      >
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-black to-[#123322] overflow-hidden flex items-center justify-center">
            <img
              src="/icon.png"
              alt="Rare Plant Atlas icon"
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
            />
          </div>
          <span
            className="font-mono text-[10px] tracking-[0.25em] uppercase group-hover:opacity-100 transition-opacity"
            style={{ color: "#b8975a" }}
          >
            Rare Plant Atlas
          </span>
        </Link>
      </div>
    </nav>
  );
}
