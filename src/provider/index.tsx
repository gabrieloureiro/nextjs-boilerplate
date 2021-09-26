import React from 'react'

import { CustomThemeProvider } from '@/hooks/useTheme'
import { ToastProvider } from '@/hooks/useToast'


const AppProvider: React.FC = ({ children }) => {
  return (
    <CustomThemeProvider>
          <ToastProvider>{children}</ToastProvider>
    </CustomThemeProvider>
  )
}

export default AppProvider
