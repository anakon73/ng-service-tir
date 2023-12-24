export const ButtonSize = ['md', 'lg'] as const
export const ButtonVariant = [
  'primary',
  'light',
  'white',
  'link',
  'link-white',
] as const

export type ButtonSize = (typeof ButtonSize)[number]
export type ButtonVariant = (typeof ButtonVariant)[number]
