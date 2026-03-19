export function TabContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 pb-11 lg:p-[36px_40px_56px]">
      <div className="max-w-[600px] mx-auto">{children}</div>
    </div>
  );
}

export function TabHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-[9px] tracking-[0.42em] uppercase text-earth-300/50 mb-2.5">
        {label}
      </p>
      <h2 className="font-serif text-heading leading-[1.05] tracking-[-0.01em] text-cream mb-3">
        {title}
      </h2>
      <div className="w-8 h-px bg-gradient-to-r from-forest-300/50 to-transparent" />
    </div>
  );
}

export function DataRow({ label, value, detail, last }: { label: string; value: string; detail?: string; last?: boolean }) {
  return (
    <div className={last ? "" : "pb-4 mb-4 border-b border-cream/[0.08]"}>
      <div className="flex gap-4 items-baseline mb-1.5">
        <span className="text-[8px] tracking-[0.42em] uppercase text-cream/15 w-[82px] flex-shrink-0">
          {label}
        </span>
        <span className="font-serif text-[0.9rem] lg:text-base text-cream/80">
          {value}
        </span>
      </div>
      {detail && (
        <p className="text-[11.5px] lg:text-[13px] text-cream/25 leading-[1.75] ml-[98px]">
          {detail}
        </p>
      )}
    </div>
  );
}
