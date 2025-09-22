import { ModeContext } from '@/contexts'
import { useContext } from 'react'

export default function useMode() {
  const ctx = useContext(ModeContext)
  if (!ctx) {
    throw new Error('useMode must be used within a ModeContextProvider')
  }
  return ctx
}
