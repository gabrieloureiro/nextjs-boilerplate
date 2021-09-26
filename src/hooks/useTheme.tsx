import React, { createContext, useContext, useState } from 'react'

import { Theme } from '@/styles/styled'

import { lightTheme, darkTheme, colors } from '@/styles/theme'

import { ThemeProvider } from 'styled-components'

interface ThemeContextData {
  theme: Theme
  changeTheme(theme: Theme): void
}
const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({ ...darkTheme, ...colors })

  const changeTheme = (theme: Theme) => {
    if (theme.title === 'light') {
      setTheme({ ...darkTheme, ...colors })
    } else {
      setTheme({ ...lightTheme, ...colors })
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a CustomThemeProvider')
  }

  return context
}

export { CustomThemeProvider, useTheme }
