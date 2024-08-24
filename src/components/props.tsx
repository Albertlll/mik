import { ChartConfig } from "./ui/chart"

export interface abstractMessageDataProps {

    position: 'left' | 'right',
}

export interface textMessageContent extends abstractMessageDataProps {
    type: 'text',
    content: {
        message: string
    }
}

export interface audioMessageContent extends abstractMessageDataProps {
    type: 'audio',
    content: {
        audioURL: string
    }
}

export interface chartMessageContent extends abstractMessageDataProps {
    type: 'chart',
    content: {
        inputChartConfig: { characteristic: string }
        LineChartData: any
    }
}

export interface chartPieMessageContent extends abstractMessageDataProps {
    type: 'chartPie',
    content: {
        chartPieData: Array<{ object: string, value: number, fill: string }>,
        chartPieConfig: {
            value: {
                label: string,
            }
        }
    }
}

export interface chartLineMessageContent extends abstractMessageDataProps {
    type: 'chartLine',
    content: {
        inputChartConfig: { characteristic: string }
        LineChartData: any
    }
}

export interface chartTableMessageContent extends abstractMessageDataProps {
    type: 'table',
    content: {
        data: any
    }
}

export interface buttonMessageContent extends abstractMessageDataProps {
    type: 'button',
    content: {
        header: string,
        buttonBody: string,
        url: string
    }
}








export type messageDataProps = textMessageContent | audioMessageContent | buttonMessageContent | chartMessageContent | chartPieMessageContent | chartTableMessageContent | chartLineMessageContent;