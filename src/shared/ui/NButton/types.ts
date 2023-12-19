export const ButtonSize = ['md', 'lg'] as const
export const ButtonVariant = ['primary', 'light'] as const

export type ButtonSize = (typeof ButtonSize)[number]
export type ButtonVariant = (typeof ButtonVariant)[number]
