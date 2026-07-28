import { ChefHat, Scissors, Car, Globe, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const blogCategoryStyle: Record<string, { icon: LucideIcon; text: string; bg: string; border: string }> = {
  Restauration: { icon: ChefHat, text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  'Coiffure & Beauté': { icon: Scissors, text: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
  Automobile: { icon: Car, text: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
  'Stratégie digitale': { icon: Globe, text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  'Notre agence': { icon: Sparkles, text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
}
