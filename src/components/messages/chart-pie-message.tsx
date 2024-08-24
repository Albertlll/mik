import { Pie, PieChart } from "recharts";
import { Card, CardContent } from "../ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";



const chartPieData = [
    { browser: "chrome", visitors: 275, fill: "#91d8ff" },
    { browser: "safari", visitors: 200, fill: "#12242e" },
    { browser: "firefox", visitors: 187, fill: "#ff8181" },
    { browser: "edge", visitors: 173, fill: "#f371b92d" },
    { browser: "other", visitors: 90, fill: "#baffa9" },
  ]


  const chartPieConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
    },
    safari: {
      label: "Safari",
    },
    firefox: {
      label: "Firefox",
    },
    edge: {
      label: "Edge",
    },
    other: {
      label: "Other",
    },
  } satisfies ChartConfig
  





function ChartPieMessage() {
    return (
        <Card className="w-full h-full">
        <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartPieConfig} className="min-h-[200px] w-full">
            <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie data={chartPieData} dataKey="visitors" label nameKey="browser" />
            </PieChart>

        </ChartContainer>

        </CardContent>
        </Card>
    );
}

export default ChartPieMessage;