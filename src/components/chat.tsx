import Message from "./new-message";
import { MessageInput } from "./message-input-area";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import {AnimatePresence } from "framer-motion";
import { messageDataProps } from "./props";
import { httpClient } from "@/httpClient";
import { StompSessionProvider, useSubscription, useStompClient} from "react-stomp-hooks";

const LineChartData = {
    "type":"chartLine",
    "message":"график",
    "tool_call":{
    "inputChartConfig": {
        "characteristic": "Рублей на балансе"
    },
    "LineChartData": [
        {
            "date": "2023-08-23",
            "value": 0
        },
        {
            "date": "2023-08-24",
            "value": 0
        },
        {
            "date": "2023-08-25",
            "value": 44657
        },
        {
            "date": "2023-08-26",
            "value": 44657
        },
        {
            "date": "2023-08-27",
            "value": 44657
        },
        {
            "date": "2023-08-28",
            "value": 44097
        },
        {
            "date": "2023-08-29",
            "value": 44097
        },
        {
            "date": "2023-08-30",
            "value": 43821
        },
        {
            "date": "2023-08-31",
            "value": 43821
        },
        {
            "date": "2023-09-01",
            "value": 44846
        },
        {
            "date": "2023-09-02",
            "value": 43996
        },
        {
            "date": "2023-09-03",
            "value": 43996
        },
        {
            "date": "2023-09-04",
            "value": 43996
        },
        {
            "date": "2023-09-05",
            "value": 43046
        },
        {
            "date": "2023-09-06",
            "value": 43046
        },
        {
            "date": "2023-09-07",
            "value": 42196
        },
        {
            "date": "2023-09-08",
            "value": 42196
        },
        {
            "date": "2023-09-09",
            "value": 42196
        },
        {
            "date": "2023-09-10",
            "value": 40996
        },
        {
            "date": "2023-09-11",
            "value": 40996
        },
        {
            "date": "2023-09-12",
            "value": 40996
        },
        {
            "date": "2023-09-13",
            "value": 40146
        },
        {
            "date": "2023-09-14",
            "value": 40146
        },
        {
            "date": "2023-09-15",
            "value": 43902
        },
        {
            "date": "2023-09-16",
            "value": 43902
        },
        {
            "date": "2023-09-17",
            "value": 43252
        },
        {
            "date": "2023-09-18",
            "value": 43252
        },
        {
            "date": "2023-09-19",
            "value": 43252
        },
        {
            "date": "2023-09-20",
            "value": 42052
        },
        {
            "date": "2023-09-21",
            "value": 42052
        },
        {
            "date": "2023-09-22",
            "value": 42052
        },
        {
            "date": "2023-09-23",
            "value": 41602
        },
        {
            "date": "2023-09-24",
            "value": 41602
        },
        {
            "date": "2023-09-25",
            "value": 86602
        },
        {
            "date": "2023-09-26",
            "value": 85402
        },
        {
            "date": "2023-09-27",
            "value": 85402
        },
        {
            "date": "2023-09-28",
            "value": 84748
        },
        {
            "date": "2023-09-29",
            "value": 89048
        },
        {
            "date": "2023-09-30",
            "value": 89048
        },
        {
            "date": "2023-10-01",
            "value": 89897
        },
        {
            "date": "2023-10-02",
            "value": 89897
        },
        {
            "date": "2023-10-03",
            "value": 89047
        },
        {
            "date": "2023-10-04",
            "value": 89047
        },
        {
            "date": "2023-10-05",
            "value": 89047
        },
        {
            "date": "2023-10-06",
            "value": 88597
        },
        {
            "date": "2023-10-07",
            "value": 88597
        },
        {
            "date": "2023-10-08",
            "value": 87397
        },
        {
            "date": "2023-10-09",
            "value": 87397
        },
        {
            "date": "2023-10-10",
            "value": 93547
        },
        {
            "date": "2023-10-11",
            "value": 93547
        },
        {
            "date": "2023-10-12",
            "value": 93547
        },
        {
            "date": "2023-10-13",
            "value": 92347
        },
        {
            "date": "2023-10-14",
            "value": 92347
        },
        {
            "date": "2023-10-15",
            "value": 96597
        },
        {
            "date": "2023-10-16",
            "value": 96597
        },
        {
            "date": "2023-10-17",
            "value": 95497
        },
        {
            "date": "2023-10-18",
            "value": 95497
        },
        {
            "date": "2023-10-19",
            "value": 95497
        },
        {
            "date": "2023-10-20",
            "value": 94647
        },
        {
            "date": "2023-10-21",
            "value": 94647
        },
        {
            "date": "2023-10-22",
            "value": 94347
        },
        {
            "date": "2023-10-23",
            "value": 94347
        },
        {
            "date": "2023-10-24",
            "value": 94347
        },
        {
            "date": "2023-10-25",
            "value": 138147
        },
        {
            "date": "2023-10-26",
            "value": 138147
        },
        {
            "date": "2023-10-27",
            "value": 138147
        },
        {
            "date": "2023-10-28",
            "value": 137497
        },
        {
            "date": "2023-10-29",
            "value": 137497
        },
        {
            "date": "2023-10-30",
            "value": 137147
        },
        {
            "date": "2023-10-31",
            "value": 137147
        },
        {
            "date": "2023-11-01",
            "value": 139994
        },
        {
            "date": "2023-11-02",
            "value": 138794
        },
        {
            "date": "2023-11-03",
            "value": 138794
        },
        {
            "date": "2023-11-04",
            "value": 138794
        },
        {
            "date": "2023-11-05",
            "value": 138294
        },
        {
            "date": "2023-11-06",
            "value": 138294
        },
        {
            "date": "2023-11-07",
            "value": 138294
        },
        {
            "date": "2023-11-08",
            "value": 137094
        },
        {
            "date": "2023-11-09",
            "value": 140941
        },
        {
            "date": "2023-11-10",
            "value": 140291
        },
        {
            "date": "2023-11-11",
            "value": 140291
        },
        {
            "date": "2023-11-12",
            "value": 140291
        },
        {
            "date": "2023-11-13",
            "value": 139091
        },
        {
            "date": "2023-11-14",
            "value": 139091
        },
        {
            "date": "2023-11-15",
            "value": 144091
        },
        {
            "date": "2023-11-16",
            "value": 143241
        },
        {
            "date": "2023-11-17",
            "value": 143241
        },
        {
            "date": "2023-11-18",
            "value": 143241
        },
        {
            "date": "2023-11-19",
            "value": 142781
        },
        {
            "date": "2023-11-20",
            "value": 142781
        },
        {
            "date": "2023-11-21",
            "value": 142781
        },
        {
            "date": "2023-11-22",
            "value": 142131
        },
        {
            "date": "2023-11-23",
            "value": 142131
        },
        {
            "date": "2023-11-24",
            "value": 140931
        },
        {
            "date": "2023-11-25",
            "value": 185931
        },
        {
            "date": "2023-11-26",
            "value": 185581
        },
        {
            "date": "2023-11-27",
            "value": 185581
        },
        {
            "date": "2023-11-28",
            "value": 184931
        },
        {
            "date": "2023-11-29",
            "value": 184931
        },
        {
            "date": "2023-11-30",
            "value": 184931
        },
        {
            "date": "2023-12-01",
            "value": 193719
        },
        {
            "date": "2023-12-02",
            "value": 193719
        },
        {
            "date": "2023-12-03",
            "value": 192849
        },
        {
            "date": "2023-12-04",
            "value": 192849
        },
        {
            "date": "2023-12-05",
            "value": 192399
        },
        {
            "date": "2023-12-06",
            "value": 192399
        },
        {
            "date": "2023-12-07",
            "value": 192399
        },
        {
            "date": "2023-12-08",
            "value": 191199
        },
        {
            "date": "2023-12-09",
            "value": 191199
        },
        {
            "date": "2023-12-10",
            "value": 190449
        },
        {
            "date": "2023-12-11",
            "value": 190449
        },
        {
            "date": "2023-12-12",
            "value": 189249
        },
        {
            "date": "2023-12-13",
            "value": 189249
        },
        {
            "date": "2023-12-14",
            "value": 189249
        },
        {
            "date": "2023-12-15",
            "value": 193499
        },
        {
            "date": "2023-12-16",
            "value": 193499
        },
        {
            "date": "2023-12-17",
            "value": 193179
        },
        {
            "date": "2023-12-18",
            "value": 193179
        },
        {
            "date": "2023-12-19",
            "value": 192729
        },
        {
            "date": "2023-12-20",
            "value": 192729
        },
        {
            "date": "2023-12-21",
            "value": 191529
        },
        {
            "date": "2023-12-22",
            "value": 191529
        },
        {
            "date": "2023-12-23",
            "value": 190729
        },
        {
            "date": "2023-12-24",
            "value": 190729
        },
        {
            "date": "2023-12-25",
            "value": 235729
        },
        {
            "date": "2023-12-26",
            "value": 234883
        },
        {
            "date": "2023-12-27",
            "value": 234883
        },
        {
            "date": "2023-12-28",
            "value": 233383
        },
        {
            "date": "2023-12-29",
            "value": 233383
        },
        {
            "date": "2023-12-30",
            "value": 233383
        },
        {
            "date": "2023-12-31",
            "value": 250383
        },
        {
            "date": "2024-01-01",
            "value": 263376
        },
        {
            "date": "2024-01-02",
            "value": 261076
        },
        {
            "date": "2024-01-03",
            "value": 261076
        },
        {
            "date": "2024-01-04",
            "value": 259576
        },
        {
            "date": "2024-01-05",
            "value": 262423
        },
        {
            "date": "2024-01-06",
            "value": 262423
        },
        {
            "date": "2024-01-07",
            "value": 258923
        },
        {
            "date": "2024-01-08",
            "value": 258923
        },
        {
            "date": "2024-01-09",
            "value": 258923
        },
        {
            "date": "2024-01-10",
            "value": 257723
        },
        {
            "date": "2024-01-11",
            "value": 257723
        },
        {
            "date": "2024-01-12",
            "value": 255223
        },
        {
            "date": "2024-01-13",
            "value": 255223
        },
        {
            "date": "2024-01-14",
            "value": 253723
        },
        {
            "date": "2024-01-15",
            "value": 258723
        },
        {
            "date": "2024-01-16",
            "value": 258723
        },
        {
            "date": "2024-01-17",
            "value": 256723
        },
        {
            "date": "2024-01-18",
            "value": 256723
        },
        {
            "date": "2024-01-19",
            "value": 256723
        },
        {
            "date": "2024-01-20",
            "value": 255223
        },
        {
            "date": "2024-01-21",
            "value": 255223
        },
        {
            "date": "2024-01-22",
            "value": 255223
        },
        {
            "date": "2024-01-23",
            "value": 251723
        },
        {
            "date": "2024-01-24",
            "value": 251723
        },
        {
            "date": "2024-01-25",
            "value": 294723
        },
        {
            "date": "2024-01-26",
            "value": 294723
        },
        {
            "date": "2024-01-27",
            "value": 293223
        },
        {
            "date": "2024-01-28",
            "value": 293223
        },
        {
            "date": "2024-01-29",
            "value": 293223
        },
        {
            "date": "2024-01-30",
            "value": 290923
        },
        {
            "date": "2024-01-31",
            "value": 290923
        },
        {
            "date": "2024-02-01",
            "value": 294771
        },
        {
            "date": "2024-02-02",
            "value": 293271
        },
        {
            "date": "2024-02-03",
            "value": 293271
        },
        {
            "date": "2024-02-04",
            "value": 290771
        },
        {
            "date": "2024-02-05",
            "value": 290771
        },
        {
            "date": "2024-02-06",
            "value": 318370
        },
        {
            "date": "2024-02-07",
            "value": 318370
        },
        {
            "date": "2024-02-08",
            "value": 318370
        },
        {
            "date": "2024-02-09",
            "value": 317727
        },
        {
            "date": "2024-02-10",
            "value": 317727
        },
        {
            "date": "2024-02-11",
            "value": 317727
        },
        {
            "date": "2024-02-12",
            "value": 315927
        },
        {
            "date": "2024-02-13",
            "value": 315927
        },
        {
            "date": "2024-02-14",
            "value": 314726
        },
        {
            "date": "2024-02-15",
            "value": 319726
        },
        {
            "date": "2024-02-16",
            "value": 319726
        },
        {
            "date": "2024-02-17",
            "value": 319271
        },
        {
            "date": "2024-02-18",
            "value": 319271
        },
        {
            "date": "2024-02-19",
            "value": 319271
        },
        {
            "date": "2024-02-20",
            "value": 318343
        },
        {
            "date": "2024-02-21",
            "value": 318343
        },
        {
            "date": "2024-02-22",
            "value": 318343
        },
        {
            "date": "2024-02-23",
            "value": 316843
        },
        {
            "date": "2024-02-24",
            "value": 316843
        },
        {
            "date": "2024-02-25",
            "value": 361843
        },
        {
            "date": "2024-02-26",
            "value": 359542
        },
        {
            "date": "2024-02-27",
            "value": 359542
        },
        {
            "date": "2024-02-28",
            "value": 358342
        },
        {
            "date": "2024-02-29",
            "value": 358342
        },
        {
            "date": "2024-03-01",
            "value": 366715
        },
        {
            "date": "2024-03-02",
            "value": 363215
        },
        {
            "date": "2024-03-03",
            "value": 363215
        },
        {
            "date": "2024-03-04",
            "value": 363215
        },
        {
            "date": "2024-03-05",
            "value": 362015
        },
        {
            "date": "2024-03-06",
            "value": 362015
        },
        {
            "date": "2024-03-07",
            "value": 399499
        },
        {
            "date": "2024-03-08",
            "value": 398549
        },
        {
            "date": "2024-03-09",
            "value": 398549
        },
        {
            "date": "2024-03-10",
            "value": 397349
        },
        {
            "date": "2024-03-11",
            "value": 397349
        },
        {
            "date": "2024-03-12",
            "value": 397349
        },
        {
            "date": "2024-03-13",
            "value": 394899
        },
        {
            "date": "2024-03-14",
            "value": 394899
        },
        {
            "date": "2024-03-15",
            "value": 399899
        },
        {
            "date": "2024-03-16",
            "value": 398049
        },
        {
            "date": "2024-03-17",
            "value": 398049
        },
        {
            "date": "2024-03-18",
            "value": 398049
        },
        {
            "date": "2024-03-19",
            "value": 397299
        },
        {
            "date": "2024-03-20",
            "value": 397299
        },
        {
            "date": "2024-03-21",
            "value": 397299
        },
        {
            "date": "2024-03-22",
            "value": 395499
        },
        {
            "date": "2024-03-23",
            "value": 395499
        },
        {
            "date": "2024-03-24",
            "value": 391999
        },
        {
            "date": "2024-03-25",
            "value": 436999
        },
        {
            "date": "2024-03-26",
            "value": 436999
        },
        {
            "date": "2024-03-27",
            "value": 435799
        },
        {
            "date": "2024-03-28",
            "value": 435799
        },
        {
            "date": "2024-03-29",
            "value": 434949
        },
        {
            "date": "2024-03-30",
            "value": 434949
        },
        {
            "date": "2024-03-31",
            "value": 434949
        },
        {
            "date": "2024-04-01",
            "value": 453422
        },
        {
            "date": "2024-04-02",
            "value": 451392
        },
        {
            "date": "2024-04-03",
            "value": 451392
        },
        {
            "date": "2024-04-04",
            "value": 451392
        },
        {
            "date": "2024-04-05",
            "value": 449825
        },
        {
            "date": "2024-04-06",
            "value": 487299
        },
        {
            "date": "2024-04-07",
            "value": 486409
        },
        {
            "date": "2024-04-08",
            "value": 486409
        },
        {
            "date": "2024-04-09",
            "value": 486409
        },
        {
            "date": "2024-04-10",
            "value": 484879
        },
        {
            "date": "2024-04-11",
            "value": 484879
        },
        {
            "date": "2024-04-12",
            "value": 484879
        },
        {
            "date": "2024-04-13",
            "value": 482679
        },
        {
            "date": "2024-04-14",
            "value": 482679
        },
        {
            "date": "2024-04-15",
            "value": 486929
        },
        {
            "date": "2024-04-16",
            "value": 486929
        },
        {
            "date": "2024-04-17",
            "value": 486929
        },
        {
            "date": "2024-04-18",
            "value": 485429
        },
        {
            "date": "2024-04-19",
            "value": 485429
        },
        {
            "date": "2024-04-20",
            "value": 485429
        },
        {
            "date": "2024-04-21",
            "value": 483329
        },
        {
            "date": "2024-04-22",
            "value": 483329
        },
        {
            "date": "2024-04-23",
            "value": 483329
        },
        {
            "date": "2024-04-24",
            "value": 483329
        },
        {
            "date": "2024-04-25",
            "value": 527709
        },
        {
            "date": "2024-04-26",
            "value": 527709
        },
        {
            "date": "2024-04-27",
            "value": 527709
        },
        {
            "date": "2024-04-28",
            "value": 526309
        },
        {
            "date": "2024-04-29",
            "value": 526309
        },
        {
            "date": "2024-04-30",
            "value": 526309
        },
        {
            "date": "2024-05-01",
            "value": 543036
        },
        {
            "date": "2024-05-02",
            "value": 543036
        },
        {
            "date": "2024-05-03",
            "value": 541836
        },
        {
            "date": "2024-05-04",
            "value": 541836
        },
        {
            "date": "2024-05-05",
            "value": 541836
        },
        {
            "date": "2024-05-06",
            "value": 541036
        },
        {
            "date": "2024-05-07",
            "value": 541036
        },
        {
            "date": "2024-05-08",
            "value": 541036
        },
        {
            "date": "2024-05-09",
            "value": 544329
        },
        {
            "date": "2024-05-10",
            "value": 544329
        },
        {
            "date": "2024-05-11",
            "value": 544329
        },
        {
            "date": "2024-05-12",
            "value": 543079
        },
        {
            "date": "2024-05-13",
            "value": 543079
        },
        {
            "date": "2024-05-14",
            "value": 542429
        },
        {
            "date": "2024-05-15",
            "value": 547429
        },
        {
            "date": "2024-05-16",
            "value": 547429
        },
        {
            "date": "2024-05-17",
            "value": 546229
        },
        {
            "date": "2024-05-18",
            "value": 546229
        },
        {
            "date": "2024-05-19",
            "value": 546229
        },
        {
            "date": "2024-05-20",
            "value": 544429
        },
        {
            "date": "2024-05-21",
            "value": 544429
        },
        {
            "date": "2024-05-22",
            "value": 541429
        },
        {
            "date": "2024-05-23",
            "value": 541429
        },
        {
            "date": "2024-05-24",
            "value": 541429
        },
        {
            "date": "2024-05-25",
            "value": 585229
        },
        {
            "date": "2024-05-26",
            "value": 585229
        },
        {
            "date": "2024-05-27",
            "value": 585229
        },
        {
            "date": "2024-05-28",
            "value": 581729
        },
        {
            "date": "2024-05-29",
            "value": 581729
        }
    ],
    "type": "chartLine"
}}

const ButtonData = {
    "tool_call": {
      "url": "http",
      "header": "Перевод и оплата",
      "buttonBody": "Отправить"
    },
    "type": "button",
    "message": "Помощь в нахождении кнопки для перевода денег в интерфейсе приложения."
  }

const PieData = {
    "tool_call": {
      "chartPieConfig": {
        "value": {
          "label": "Рублей"
        }
      },
      "chartPieData": [
        {
          "object": "Перевод",
          "value": 27955,
          "fill": "#2A1029"
        },
        {
          "object": "Оплата Продуктовый",
          "value": 42044,
          "fill": "#C5EB9B"
        },
        {
          "object": "Оплата Ресторан",
          "value": 23511,
          "fill": "#4F4BE5"
        },
        {
          "object": "Оплата Аптека",
          "value": 12862,
          "fill": "#F7E481"
        },
        {
          "object": "Онлайн оплата",
          "value": 7877,
          "fill": "#1B4119"
        },
        {
          "object": "Оплата Развлечения",
          "value": 8755,
          "fill": "#D1C204"
        },
        {
          "object": "Оплата Ювелирный",
          "value": 11230,
          "fill": "#6004B9"
        }
      ]
    },
    "type": "chartPie",
    "message": "Построение круговой диаграммы по всем расходам пользователя за весь учетный период"
  }
export function Chat() {
    const [messagesData, setMessagesData] = useState<Array<messageDataProps>>([]);

    var lastMessageRef = useRef<any>(null);



    const stompClient = useStompClient();
    
    // useEffect(() => {
    //     setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', type: 'chartPie', content: PieData.tool_call}]);
    // }, []);


    useEffect(() => {
        lastMessageRef.current?.scrollIntoView(false);
    }, [messagesData]);

    useEffect(() => {
        if (stompClient) {
            console.log("csdcsd")

            stompClient.subscribe(
                "/user/" + localStorage.getItem('uuid') + "/queue/messages",
                (message) => {
                    console.log(message)
                    const content = JSON.parse(message.body).content
                    switch (content.type){
                   case 'text' :
                        setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', type: 'text', content: {message: JSON.parse(message.body).content.message}}]);
                        break;
                    case 'chartPie':
                        setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', type: 'chartPie', content: content.tool_call}]);
                        setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', type: 'text', content: {message: JSON.parse(message.body).content.message}}]);
                        break;
                    case 'chartLine':
                        setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', type: 'chartLine', content: content.tool_call}]);
                        setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', type: 'text', content: {message: JSON.parse(message.body).content.message}}]);
                    
                        break;
                    case 'button':
                        setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', type: 'button', content: content.tool_call}]);
                        setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', type: 'text', content: {message: JSON.parse(message.body).content.message}}]);
                        break;
                    // case '':
                    //     setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', type: 'text', content: {message: JSON.parse(message.body).content.message}}]);
                    //     break;
                    // case '':
                    //     setMessagesData((prev : Array<messageDataProps>) => [...prev, {position: 'left', type: 'text', content: {message: JSON.parse(message.body).content.message}}]);
                    //     break;
                    // case '':

                }
                    // setMessagesData((prev : Array<messageDataProps>) => return [...prev, {position : 'left', message : message, type : 'text'}])
                }
            )
    
        }}, [stompClient])


    
    console.log(messagesData)




    // stompClient.connect({}, () => {
    //     console.log('Connected');
    //     stompClient.subscribe(
    //     "/user/" + localStorage.getItem('uuid') + "/queue/messages",
    //     onMessageReceived
    //   );})


    useEffect(() => {


        if (!localStorage.getItem('uuid')) { 

            httpClient.get('/api/get-uuid').then(
                (data) => {
                    console.log(data.data)
                    localStorage.setItem('uuid', data.data.uuid);

            })
        }

        // console.log(stompClient)
        // if (stompClient) {
        //     stompClient.publish({
        //         destination: "/",
        //         body: "Echo 123",
        // });}





        // console.log(socket.active)


        // socket.on('open', () => {
        //     console.log('Соединение установлено');
        // })


        // socket.on('message', (data) => {
        //     console.log(data);
        //     setMessagesData((prevMessages) => [...prevMessages, data]);
        // });

        
    }, []);



    return (

        <div className="relative flex flex-col justify-between p-8 h-full w-full border rounded-md border-input bg-background mob:p-1 mob:border-transparent">

            <ScrollArea className="relative w-full h-full p-3 mob:p-0">
                {messagesData.map((messageData, index) => (

                    <AnimatePresence key={index} initial={true}>

                        
                        <div ref={lastMessageRef} className="mt-3 pr-3 mob:mt-5 w-full overflow-hidden">
                            <Message messageData={messageData}/>
                        </div>


                    </AnimatePresence>
                ))}
            </ScrollArea>

            <div className="relative top-auto w-full bottom-0 p]">
            <MessageInput stompClient={stompClient} setMessagesData={setMessagesData}/>
            </div>
        </div>



    );

}
