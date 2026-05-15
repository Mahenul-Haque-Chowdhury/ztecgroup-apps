"use client";

import { useEffect, useId, useMemo, useState } from "react";

type ShapeGridShape = "hexagon" | "square";
type ShapeGridDirection = "up" | "down" | "left" | "right";

interface ShapeGridProps {
  speed?: number;
  squareSize?: number;
  direction?: ShapeGridDirection;
  borderColor?: string;
  hoverFillColor?: string;
  shape?: ShapeGridShape;
  hoverTrailAmount?: number;
  className?: string;
}

const VIEWBOX_SIZE = 1080;

function getHexagonPoints(size: number) {
  const radius = size / 2;
  const center = radius;

  return Array.from({ length: 6 }, (_, index) => {
    const angle = ((60 * index - 30) * Math.PI) / 180;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");
}

export default function ShapeGrid({
  speed = 0,
  squareSize = 25,
  direction = "up",
  borderColor = "#2F293A",
  hoverFillColor = "#4a4a4a",
  shape = "hexagon",
  hoverTrailAmount = 2,
  className = "",
}: ShapeGridProps) {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const patternId = useId();
  const hexHeight = squareSize * 0.8660254;
  const columns = Math.ceil(VIEWBOX_SIZE / squareSize) + 2;
  const rows = Math.ceil(VIEWBOX_SIZE / hexHeight) + 2;

  const cells = useMemo(() => {
    const nextCells: Array<{ index: number; x: number; y: number }> = [];

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const x = column * squareSize + (row % 2 ? squareSize / 2 : 0);
        const y = row * hexHeight;

        nextCells.push({
          index: row * columns + column,
          x,
          y,
        });
      }
    }

    return nextCells;
  }, [columns, hexHeight, rows, squareSize]);

  useEffect(() => {
    if (activeIndices.length === 0) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setActiveIndices((current) => current.slice(0, Math.max(hoverTrailAmount, 0)));
    }, 220);

    return () => window.clearTimeout(timeout);
  }, [activeIndices, hoverTrailAmount]);

  const handleCellEnter = (cellIndex: number) => {
    setActiveIndices((current) => [cellIndex, ...current.filter((index) => index !== cellIndex)].slice(0, Math.max(hoverTrailAmount + 1, 1)));
  };

  const animationClassName = speed > 0 ? "shape-grid-scroll" : "";
  const travelAxisClassName =
    direction === "left" || direction === "right"
      ? "[animation-name:shape-grid-pan-x]"
      : "[animation-name:shape-grid-pan-y]";
  const animationDirection = direction === "down" || direction === "right" ? "reverse" : "normal";

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <svg
        viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
        className={`h-full w-full ${animationClassName} ${travelAxisClassName}`}
        style={{
          animationDuration: speed > 0 ? `${Math.max(4, 24 / speed)}s` : undefined,
          animationDirection,
        }}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <radialGradient id={patternId} cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width={VIEWBOX_SIZE} height={VIEWBOX_SIZE} fill={`url(#${patternId})`} opacity="0.22" />

        {cells.map((cell) => {
          const activeIndex = activeIndices.indexOf(cell.index);
          const isActive = activeIndex !== -1;
          const opacity = isActive ? 0.55 - activeIndex * 0.14 : 0;

          if (shape === "square") {
            return (
              <rect
                key={cell.index}
                x={cell.x}
                y={cell.y}
                width={squareSize}
                height={squareSize}
                rx={4}
                fill={hoverFillColor}
                fillOpacity={Math.max(opacity, 0)}
                stroke={borderColor}
                strokeOpacity={0.92}
                strokeWidth={1}
                onMouseEnter={() => handleCellEnter(cell.index)}
              />
            );
          }

          return (
            <polygon
              key={cell.index}
              points={getHexagonPoints(squareSize)}
              transform={`translate(${cell.x}, ${cell.y})`}
              fill={hoverFillColor}
              fillOpacity={Math.max(opacity, 0)}
              stroke={borderColor}
              strokeOpacity={0.92}
              strokeWidth={1}
              onMouseEnter={() => handleCellEnter(cell.index)}
            />
          );
        })}
      </svg>
    </div>
  );
}