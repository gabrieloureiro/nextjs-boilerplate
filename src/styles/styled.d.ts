import 'styled-components'

import { lightTheme, colors } from './theme'

const theme = { ...lightTheme, ...colors }

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
