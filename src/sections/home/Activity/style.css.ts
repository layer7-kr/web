import { flexBetween, flexCenter } from "@/lib/utils/styles/flex";
import { style } from "@vanilla-extract/css";

export const base = style({
    width: '100%',

    margin: '0 auto',
    padding: '50px 0',
    
    ...flexCenter({
        direction: 'column',
        gap: 65,
    })
})

export const activityList = style({
    width: '100%',

    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',

    '@media': {
        '(max-width: 768px)': {
            gridTemplateColumns: '1fr',
        }
    }
})