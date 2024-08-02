import { categories } from '@/data/collections'
import { StaticImageData } from 'next/image'

export type CategoriesIds = (typeof categories)[number]['id']

export interface Collection {
  title: string
  diamonds: number
  picture: StaticImageData
  category: Exclude<CategoriesIds, 'all'>
}
