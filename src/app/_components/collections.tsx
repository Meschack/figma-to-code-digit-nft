'use client'

import { Wrapper } from '@/components/ui/wrapper'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { CategoriesIds } from '@/types/collections'
import { categories, collections } from '@/data/collections'
import { CollectionCard } from '@/components/ui/collection-card'

export const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoriesIds>('all')

  const switchCategory = (category: CategoriesIds) => {
    setSelectedCategory(category)
  }

  return (
    <Wrapper className='space-y-9' id='collections'>
      <h2 className='text-3xl font-bold text-neutral-800'>Our Collections</h2>

      <div className='flex flex-col items-start justify-between gap-2.5 md:flex-row md:items-center'>
        <div
          className='no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto'
          role='tablist'
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => switchCategory(category.id)}
              role='tab'
              value={category.id}
              className={cn(
                'whitespace-nowrap rounded-xl border-none bg-neutral-50 px-6.5 py-3.5 text-sm font-semibold text-neutral-800',
                selectedCategory === category.id && 'bg-neutral-800 text-white'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <button className='border-none p-0 text-sm font-semibold text-neutral-500 underline'>
          Voir plus
        </button>
      </div>

      <div className='grid gap-6 px-6.5 py-3.5 md:grid-cols-2 md:px-11 xl:grid-cols-4 xl:px-0'>
        {collections
          .filter((el) =>
            selectedCategory !== 'all' ? el.category === selectedCategory : el
          )
          .map((collection) => (
            <CollectionCard collection={collection} key={collection.title} />
          ))}
      </div>
    </Wrapper>
  )
}
