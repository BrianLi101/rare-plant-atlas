import Link from "next/link";

export function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] h-14 flex items-center"
      style={{
        padding: "0 clamp(20px,5vw,80px)",
        background: "rgba(10,10,8,0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(232,224,208,0.10)",
      }}
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
    </nav>
  );
}
