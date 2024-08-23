import {Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";


const invoices = [
    [
      "INV004",
      "Paid",
      "$450.00",
      "Credit Card",
    ],
    [
      "INV005",
      "Paid",
      "$550.00",
      "PayPal",
    ],
    [
      "INV006",
      "Pending",
      "$200.00",
      "Bank Transfer",
    ],
    [
      "INV007",
      "Unpaid",
      "$300.00",
      "Credit Card",
    ],
  ]


function TableMessage() {
    return (
        <ScrollArea className="w-64">
            <div className="overflow-hidden w-full">


            <Table className="w-full h-full">
                                <TableCaption>A list of your recent invoices.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                    <TableHead>Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead>Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {invoices.map((invoice, index) => (
                                    <TableRow key={index}>
                                        {invoice.map((cell, index2) => {
                                            return <TableCell key={index2} className="font-medium">{cell}</TableCell>
                                        })}

                                    </TableRow>
                                    ))}
                                </TableBody>
                                </Table>













            </div>
        <ScrollBar orientation="horizontal" />
        </ScrollArea>

        
    );
}

export default TableMessage;