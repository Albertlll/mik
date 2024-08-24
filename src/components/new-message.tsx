import { messageDataProps } from "./props";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import avatarImg from '../assets/avatarbot.jpg'
import { motion } from "framer-motion";
import AudioPlayer from "./audio-player";

import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis } from "recharts" 
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { Card, CardContent } from "./ui/card";
import {Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./ui/table";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";


import TextMessage from "./messages/text-message"
import TableMessage from "./messages/table-message";
import ChartMessage from "./messages/chart-message";
import ButtonMessage from "./messages/button-message";

function Message(props: { messageData: messageDataProps}) {
    return (
        <div className={props.messageData.position == "left" ? "w-full flex justify-start gap-3" : "w-full flex justify-end"}>
            {props.messageData.position == "left" &&
            <Avatar>
                <AvatarImage src={avatarImg} />
            </Avatar>}

            {props.messageData.type == 'table' &&
            <TableMessage/>
            }

            {props.messageData.type == 'text' &&
            <TextMessage position={props.messageData.position} text={props.messageData.content.message}/>
            }

            {props.messageData.type == 'chart' &&
            <ChartMessage/>
            }


            {props.messageData.type == 'chartPie' &&
            <ChartMessage/>
            }

            {props.messageData.type == 'button' &&
            <ButtonMessage type="button" content={props.messageData.content} position={props.messageData.position} />
            }
        </div>
    );
}

export default Message;