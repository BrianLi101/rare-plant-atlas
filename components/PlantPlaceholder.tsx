import type { CSSProperties, ReactNode } from "react";

export type PlantPlaceholderVariant = "leaf" | "frond" | "sapling";

type PlantPlaceholderProps = {
  accent: string;
  mode?: "overlay" | "block";
  variant?: PlantPlaceholderVariant;
  deep?: string;
  glyphOpacity?: number;
  label?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

function withAlpha(hex: string, alpha: number): string {
  if (!hex.startsWith("#")) return hex;

  const bounded = Math.min(255, Math.max(0, alpha))
    .toString(16)
    .padStart(2, "0");

  if (hex.length === 4) {
    const [r, g, b] = hex.slice(1).split("");
    return `#${r}${r}${g}${g}${b}${b}${bounded}`;
  }

  if (hex.length === 7) return `${hex}${bounded}`;
  if (hex.length === 9) return `${hex.slice(0, 7)}${bounded}`;
  return hex;
}

function PlantGlyph({
  accent,
  opacity,
  variant,
}: {
  accent: string;
  opacity: number;
  variant: PlantPlaceholderVariant;
}) {
  const sharedProps = {
    fill: "none",
    stroke: accent,
    strokeWidth: "1",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    style: { width: "60%", height: "60%", opacity },
  };

  if (variant === "frond") {
    return (
      <svg viewBox="0 0 100 100" {...sharedProps}>
        <path d="M50 92 L50 18" />
        <path d="M50 30 C36 28 26 34 22 44" opacity="0.7" />
        <path d="M50 30 C64 28 74 34 78 44" opacity="0.7" />
        <path d="M50 44 C34 44 24 52 20 64" opacity="0.6" />
        <path d="M50 44 C66 44 76 52 80 64" opacity="0.6" />
        <path d="M50 58 C32 60 22 70 20 82" opacity="0.5" />
        <path d="M50 58 C68 60 78 70 80 82" opacity="0.5" />
        <path d="M50 18 C48 14 50 12 52 10" opacity="0.6" />
      </svg>
    );
  }

  if (variant === "sapling") {
    return (
      <svg viewBox="0 0 100 100" {...sharedProps}>
        <path d="M50 92 L50 44" />
        <path d="M50 56 C36 50 26 42 24 30 C32 30 44 36 50 50 Z" />
        <path d="M30 36 L48 52" opacity="0.5" />
        <path d="M50 48 C64 42 76 38 82 26 C72 24 60 28 50 42 Z" />
        <path d="M76 30 L52 46" opacity="0.5" />
        <path d="M30 92 C40 88 60 88 70 92" opacity="0.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" {...sharedProps}>
      <path d="M50 12 C30 22 20 42 22 62 C24 80 36 88 50 88 C64 88 76 80 78 62 C80 42 70 22 50 12 Z" />
      <path d="M50 14 L50 88" opacity="0.6" />
      <path d="M50 30 C42 32 36 38 33 46" opacity="0.5" />
      <path d="M50 40 C58 42 64 48 67 56" opacity="0.5" />
      <path d="M50 52 C44 54 40 58 38 64" opacity="0.4" />
      <path d="M50 62 C56 64 60 68 62 74" opacity="0.4" />
    </svg>
  );
}

export function getPlantPlaceholderVariant(
  genus?: string,
): PlantPlaceholderVariant {
  switch ((genus ?? "").toLowerCase()) {
    case "monstera":
      return "frond";
    case "anthurium":
      return "sapling";
    default:
      return "leaf";
  }
}

export function PlantPlaceholder({
  accent,
  mode = "overlay",
  variant = "leaf",
  deep = "#0d0d0d",
  glyphOpacity = 0.55,
  label,
  className,
  style,
  children,
}: PlantPlaceholderProps) {
  const wrapperStyle: CSSProperties = {
    background: `radial-gradient(circle at 32% 38%, ${withAlpha(accent, 0x33)}, ${withAlpha(accent, 0x0d)} 55%, ${deep} 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    ...(mode === "overlay"
      ? { position: "absolute", inset: 0 }
      : { position: "relative" }),
    ...style,
  };

  return (
    <div
      className={className}
      style={wrapperStyle}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      <PlantGlyph accent={accent} opacity={glyphOpacity} variant={variant} />
      {children}
    </div>
  );
}
