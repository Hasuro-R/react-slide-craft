export function checkPercentage(val: string) {
  return /^-?\d+(\.\d+)?%$/.test(val.trim())
}
