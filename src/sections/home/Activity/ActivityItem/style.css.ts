import { globalStyle, style } from "@vanilla-extract/css";

export const base = style({
  position: "relative",
  width: "100%",
  height: 320,
  overflow: "hidden",

  "@media": {
    "(max-width: 550px)": {
      height: 240,
    },
  },
});

export const baseWide = style({
  position: "relative",
  width: "100%",
  height: 320,
  overflow: "hidden",
  gridColumn: "span 2",
  backgroundColor: "#000",

  "@media": {
    "(max-width: 768px)": {
      gridColumn: "span 1",
    },
    "(max-width: 550px)": {
      height: 240,
    },
  },
});

export const backgroundImage = style({
  objectFit: "cover",
  transition: "transform 0.5s ease",
});

export const backgroundImageWide = style({
  objectFit: "cover",
  objectPosition: "center",
  transition: "transform 0.5s ease",
});

export const overlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,

  background: "rgba(0, 0, 0, 0.5)",

  padding: "30px",

  transition: "background 0.5s ease",
  ":hover": {
    background: "rgba(0, 0, 0, 0.6)",
  },
});

export const overlayWide = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,

  background: "rgba(0, 0, 0, 0.3)",

  padding: "30px",

  transition: "background 0.5s ease",
  ":hover": {
    background: "rgba(0, 0, 0, 0.4)",
  },
});

export const content = style({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  opacity: 1,
  transform: "translateY(0)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  maxWidth: "70%",
  boxSizing: "border-box",

  "@media": {
    "(max-width: 768px)": {
      maxWidth: "calc(100% - 60px)",
    },
    "(max-width: 550px)": {
      maxWidth: "calc(100% - 60px)",
    },
  },
});

export const textContainerWide = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  opacity: 1,
  transform: "translateY(0)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  maxWidth: "50%",
  boxSizing: "border-box",

  "@media": {
    "(max-width: 768px)": {
      maxWidth: "calc(100% - 60px)",
    },
    "(max-width: 550px)": {
      maxWidth: "calc(100% - 60px)",
    },
  },
});

export const buttonContainer = style({
  position: "absolute",
  bottom: "30px",
  right: "30px",
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  opacity: 1,
  transform: "translateX(0)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
});

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "36px",
  height: "36px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "50%",
  textDecoration: "none",
  transition: "all 0.3s ease",
  backdropFilter: "blur(10px)",
  cursor: "pointer",

  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    transform: "scale(1.1)",
  },
});

globalStyle(`${base}:hover ${backgroundImage}`, {
  transform: "scale(1.05)",
});

globalStyle(`${base}:hover ${textContainer}`, {
  opacity: 0,
  transform: "translateY(10px)",
});

globalStyle(`${baseWide}:hover ${backgroundImageWide}`, {
  transform: "scale(1.05)",
});

globalStyle(`${baseWide}:hover ${textContainerWide}`, {
  opacity: 0,
  transform: "translateY(10px)",
});

