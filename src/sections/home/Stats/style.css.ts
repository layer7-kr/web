import { flexBetween, flexCenter, flexColumn, flexRow } from "@/lib/utils/styles/flex";
import { style } from "@vanilla-extract/css";

export const base = style({
    width: '100%',
    maxWidth: 1000,

    margin: '0 auto',

    ...flexBetween({
        gap: 32
    })
})

export const statsContainer = style({
    ...flexColumn({
        gap: 42
    })
})

export const statsItemContainer = style({
    ...flexRow({
        gap: 52
    })
})

// statsDetail
export const statsDetailContainer = style({
    ...flexColumn({
        gap: 32
    })
})