export interface ArgsToTemplateOptions<T> {
  include?: Array<T>
  exclude?: Array<T>
}

export function argsToTemplate<A extends Record<string, any>>(
  args: A,
  options: ArgsToTemplateOptions<keyof A> = {},
) {
  const includeSet = options.include ? new Set(options.include) : null
  const excludeSet = options.exclude ? new Set(options.exclude) : null

  return Object.entries(args)
    .filter(([key]) => args[key] !== undefined)
    .filter(([key]) => {
      if (includeSet) return includeSet.has(key)
      if (excludeSet) return !excludeSet.has(key)
      return true
    })
    .map(([key, value]) =>
      typeof value === 'function'
        ? `(${key})="${key}($event)"`
        : `[${key}]="${key}"`,
    )
    .join(' ')
}
