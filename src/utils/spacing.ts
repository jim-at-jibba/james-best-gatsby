const spacing = (size: number) => {
  const base = 8
  return base * Math.round(size / base)
}

export default spacing
