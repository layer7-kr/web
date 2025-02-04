import { flexBetween, flexRow } from "@/lib/utils/styles/flex";
import { style } from "@vanilla-extract/css";

export const base = style({
    width: 'min(100%, 1200px)',

    margin: '0 auto',
    padding: '50px 0',
    
    ...flexBetween()
})

export const contactList = style({
    ...flexRow({
        gap: 200
    })
})