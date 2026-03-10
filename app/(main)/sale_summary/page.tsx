'use client'
import React from 'react'
import { Bar, BarChart } from "recharts"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { chartData } from "@/lib/data"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export default function SalesSummary() {
  return (
    <div>
      <h1>Sales Summary</h1>
        <ChartContainer config={chartConfig} className="min-h-[200px] z-[-1] w-full">
           <BarChart accessibilityLayer data={chartData}>
             <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
             <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
           </BarChart>
         </ChartContainer>
    </div>
  );
}
