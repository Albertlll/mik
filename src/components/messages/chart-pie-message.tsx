import { Pie, PieChart } from "recharts";
import { Card, CardContent } from "../ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { chartPieMessageContent } from "../props";
import { motion } from "framer-motion";



// const chartPieData = [
//     { object: "chrome", value: 275, fill: "#91d8ff" },
//     { object: "safari", value: 200, fill: "#12242e" },
//     { object: "firefox", value: 187, fill: "#ff8181" },
//     { object: "edge", value: 173, fill: "#f371b92d" },
//     { object: "other", value: 90, fill: "#baffa9" },
//   ]


//   const chartPieConfig = {
//     value: {
//       label: "Visitors",
//     }
//   } satisfies ChartConfig
  





function ChartPieMessage(props : chartPieMessageContent["content"]) {

    const chartPieConfig = props.chartPieConfig satisfies ChartConfig


    return (
        <motion.div initial={{opacity : 0, scale: 0.1}}
        animate={{opacity : 1, scale: 1}}
        transition={{type : 'spring', 
                duration : 0.01,
                damping : 20,
                stiffness : 200,
                mass : 1,
                ease : "easeInOut"
  
            }} className="w-full">
        <Card className="w-full h-full">
        <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartPieConfig} className="min-h-[100px] w-full">
            <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie data={props.chartPieData} dataKey="value" label nameKey="object" />
            </PieChart>

        </ChartContainer>

        </CardContent>
        </Card>
        </motion.div>
    );
}

export default ChartPieMessage;