import type { DescriptionProp } from '@/base-ui/descriptions'

import { dependencies as originDeps } from '@/../package.json'
import { mapDependencies } from '@/utils/map-dependencies'

const deps = mapDependencies(originDeps)
export const dependencies: DescriptionProp[] = deps
