import { flexBetween, flexColumn, flexRow } from "@/lib/utils/styles/flex";
import { style } from "@vanilla-extract/css";

export const base = style({
    width: 'min(100%, 1200px)',

    margin: '0 auto',
    padding: '50px 30px',
    
    ...flexBetween(),

    '@media': {
        '(max-width: 768px)': {
            ...flexColumn({
                gap: 30
            })
        }
    }
})

export const contactList = style({
    ...flexRow({
        gap: 200
    }),

    '@media': {
        '(max-width: 768px)': {
            ...flexRow({
                justify: 'space-between'
            })
        },
        '(max-width: 480px)': {
            ...flexColumn({
                gap: 30
            })
        },
    }
})