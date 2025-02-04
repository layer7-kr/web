import { flexColumn } from "@/lib/utils/styles/flex";
import { style } from "@vanilla-extract/css";

export const base = style({
    padding: '19px 0',

    ...flexColumn({
        gap: 7
    })
})