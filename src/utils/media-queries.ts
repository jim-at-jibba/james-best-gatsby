export const breakpoints = {
  xs: 20, // 320
  sm: 26, // 420
  md: 45, // 720
  lg: 64, // 1026
  xl: 90, // 1440
}

const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}em) { ${style} }`
}

export default mediaQueries
