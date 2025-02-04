import { flexColumn } from "@/lib/utils/styles/flex";
import { style } from "@vanilla-extract/css";

export const base = style({
    ...flexColumn({
        gap: 12
    })
});

export const content = style({
    maxWidth: 260,
})