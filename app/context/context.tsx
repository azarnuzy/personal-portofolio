'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

type themeContextType = {
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = createContext<themeContextType>({
  isDark: false,
  setIsDark: () => {},
})

type Props = {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(false)

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
