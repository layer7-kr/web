import { flexCenter, flexColumn, flexRow } from "@/lib/utils/styles/flex";
import { globalStyle, style } from "@vanilla-extract/css";

export const base = style({
    ...flexRow({
        gap: 34
    })
})

export const contentContainer = style({
    ...flexColumn({
        gap: 10
    })
})

export const description = style({
    width: 400
})

export const timeline = style({
    ...flexCenter({
        direction: "column",
        justify: "flex-start"
    }),

    selectors: {
        '&[data-located="first"]': {
            marginTop: 10
        },
    }
})

export const line = style({
    width: 2.5,
    height: '100%',
    
    backgroundColor: "#047EE9",

    selectors: {
        '&[data-located="middle"]': {
            position: "relative",
            top: -15,
            zIndex: 0,

            minHeight: "calc(100% + 15px)"
        },

        '&[data-located="last"]': {
            position: "relative",
            top: -15,
            zIndex: 0,

            height: 15
        },
    }
})

export const circle = style({
    width: 15,
    aspectRatio: "1/1",
    border: "3px solid #047EE9",
    backgroundColor: "#fff",
    borderRadius: "50%",

    selectors: {
        '&[data-located="middle"], &[data-located="last"]': {
            position: "relative",
            bottom: -8,
            zIndex: 1
        }
    }
})

export const simpleLineContainer = style({
    width: 15,
    ...flexCenter()
})