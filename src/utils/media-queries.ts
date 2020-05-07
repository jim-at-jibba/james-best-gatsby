export const breakpoints = {
  sm: 20, // 320
  md: 45, // 720
  lg: 64, // 1026
  xl: 90, // 1440
}

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}em) { ${style} }`
}