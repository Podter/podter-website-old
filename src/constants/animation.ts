export const slide = {
  forwards: {
    old: [
      {
        name: "astroFadeOut",
        duration: "90ms",
        easing: "cubic-bezier(0.4, 0, 1, 1)",
        fillMode: "both",
      },
      {
        name: "slide-to-left",
        duration: "300ms",
        easing: "cubic-bezier(0.14, 0.64, 0.51, 0.94)",
        fillMode: "both",
      },
    ],
    new: [
      {
        name: "astroFadeIn",
        duration: "210ms",
        easing: "cubic-bezier(0, 0, 0.2, 1)",
        delay: "90ms",
        fillMode: "both",
      },
      {
        name: "slide-from-right",
        duration: "300ms",
        easing: "cubic-bezier(0.14, 0.64, 0.51, 0.94)",
        fillMode: "both",
      },
    ],
  },
  backwards: {
    old: [{ name: "astroFadeOut" }, { name: "slide-to-right" }],
    new: [{ name: "astroFadeIn" }, { name: "slide-from-left" }],
  },
} as const;
