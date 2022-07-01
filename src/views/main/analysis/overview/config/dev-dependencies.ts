import type { DescriptionProp } from '@/base-ui/descriptions'
import { devDependencies as originDevDeps } from '@/../package.json'
import { mapDependencies } from '@/utils/map-dependencies'

const deps = mapDependencies(originDevDeps)
export const devDependencies: DescriptionProp[] = deps
