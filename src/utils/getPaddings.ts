export function getPaddings(padding: string): [pT: string, pR: string, pB: string, pL: string] {
  const paddingValues = padding.split(" ").map((value) => value.trim());
  const paddingTop = paddingValues[0] || "0";
  const paddingRight = paddingValues[1] || paddingTop;
  const paddingBottom = paddingValues[2] || paddingTop;
  const paddingLeft = paddingValues[3] || paddingRight;

  return [paddingTop, paddingRight, paddingBottom, paddingLeft];
}
