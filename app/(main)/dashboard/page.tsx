"use client"
import { chartData } from "@/lib/data"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartContainer, type ChartConfig ,ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent  } from "@/components/ui/chart"

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


export default function Dashboard() {
  return (
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1>Dashboard</h1>
          
<ChartContainer config={chartConfig} className="h-[600px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
      />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
        </div>
  )
}
