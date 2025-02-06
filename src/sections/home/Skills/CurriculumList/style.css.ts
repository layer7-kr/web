import { flexColumn, flexRow } from "@/lib/utils/styles/flex";
import { style } from "@vanilla-extract/css";

export const base = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',

    ...flexRow({
        gap: 34
    })
})

export const column = style({
    ...flexColumn(),
})