'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

type themeContextType = {
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

let tempMode = false
const mode = localStorage.getItem('mode')
if (mode !== null) {
  tempMode = JSON.parse(mode)
}

const ThemeContext = createContext<themeContextType>({
  isDark: tempMode,
  setIsDark: () => {},
})

type Props = {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(tempMode)

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
