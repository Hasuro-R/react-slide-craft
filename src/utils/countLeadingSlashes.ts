export function countLeadingSlashes(str: string): number {
  const match = str.match(/^\/+/)
  return match ? match[0].length : 0
}
