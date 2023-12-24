export const AreaSize = ['sm', 'lg'] as const

export type AreaSize = (typeof AreaSize)[number]
