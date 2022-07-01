interface IDepObject {
  [key: string]: any
}

export function mapDependencies(depObject: IDepObject) {
  const result = []
  for (const [key, dep] of Object.entries(depObject)) {
    result.push({
      name: key,
      description: dep
    })
  }
  return result
}
