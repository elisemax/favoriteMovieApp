export enum ColorSet {
  BLUE_PRIMARY = '#1d4877',
  BLUE_SECONDARY = '#dae8f3',
  GRAY = '#919191',
  GRAY_LIGHT = '#f5f2f8',
  WHITE = '#ffffff',
  GREEN = '#6ba67a',
  RED = '#d2848e'
}

export function font(weight: number, size: number, line: number, color: ColorSet) {
  return `
    font-weight: ${weight};
    font-size: ${size}px;
    color: ${color};
    line-height: ${line}px;
    `
}
