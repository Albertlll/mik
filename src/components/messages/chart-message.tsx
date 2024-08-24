
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CartesianGrid, Bar, XAxis, BarChart, LabelList } from "recharts";
import { Card, CardContent } from "../ui/card";
import { ScrollBar } from "../ui/scroll-area";
const chartData = 
[
    {"value": 10, "x-par": "apple"},
    {"value": 25, "x-par": "banana"},
    {"value": 15, "x-par": "orange"},
    {"value": 30, "x-par": "grape"},
    {"value": 5, "x-par": "peach"},
    {"value": 20, "x-par": "kiwi"},
    {"value": 35, "x-par": "mango"},
    {"value": 40, "x-par": "melon"},
    {"value": 12, "x-par": "pineapple"},
    {"value": 50, "x-par": "strawberry"}
]

  
  const inputChartConfig = {
    characteristic : "Человек едят",
  }

  const chartConfig = {
    "value" : {
        color: "hsl(var(--chart-1))",    
    },

    "characteristic" : {
        label: inputChartConfig.characteristic,
    }
  } satisfies ChartConfig
  

function ChartMessage() {
    return (
        // <Card className="w-full overflow-hidden ">
        <ScrollArea className=" w-full overflow-x-auto " >
        <div className="overflow-hidden w-full whitespace-nowrap">
        {/* <CardContent className=""> */}
        <ChartContainer config={chartConfig}>
        <BarChart
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="x-par"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey="characteristic"/>}
            />
            <Bar dataKey="value" fill={chartConfig.value.color} radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>

        {/* </CardContent> */}
        <ScrollBar orientation="horizontal" />
        </div>
    </ScrollArea>
    // </Card>
    );
}

export default ChartMessage;