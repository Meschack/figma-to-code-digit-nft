'use client'

import { Wrapper } from '@/components/wrapper'
import cyberPunk from '@@/cyber-punk.png'
import durolostBoll from '@@/durolost-boll.png'
import spaceX from '@@/space-x.png'
import snoopDog from '@@/snoop-dog.png'
import ethereumEllipse from '@@/ethereum-ellipse.svg'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type CategoriesIds = (typeof categories)[number]['id']

interface Collection {
  title: string
  diamonds: number
  picture: StaticImageData
  category: Exclude<CategoriesIds, 'all'>
}

const categories = [
  { label: 'All categories', id: 'all' },
  { label: 'Art', id: 'art' },
  { label: 'Celebrities', id: 'celebrities' },
  { label: 'Gaming', id: 'gaming' },
  { label: 'Sport', id: 'sport' }
] as const

const collections: Collection[] = [
  { title: 'CyberPunk', diamonds: 68, picture: cyberPunk, category: 'art' },
  {
    title: 'Durolost Boll - Upper',
    diamonds: 68,
    picture: durolostBoll,
    category: 'sport'
  },
  { title: 'Space X Wiper', diamonds: 68, picture: spaceX, category: 'gaming' },
  {
    title: 'Snoop Dogg',
    diamonds: 68,
    picture: snoopDog,
    category: 'celebrities'
  }
]

export const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoriesIds>('all')

  const switchCategory = (category: CategoriesIds) => {
    setSelectedCategory(category)
  }

  return (
    <Wrapper className='space-y-9'>
      <h2 className='text-3xl font-bold text-neutral-800'>Our Collections</h2>

      <div className='flex flex-col items-start justify-between gap-2.5 md:flex-row md:items-center'>
        <div
          className='flex max-w-[100vw] items-center gap-2 overflow-x-auto'
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

interface CollectionProps {
  collection: Collection
}

const CollectionCard = ({ collection }: CollectionProps) => {
  return (
    <div className='space-y-5 rounded-20 border border-neutral-100 p-3'>
      <Image
        src={collection.picture}
        alt={`Picture of collection "${collection.title}"`}
        className='collection__pic'
        loading='lazy'
      />

      <div className='flex items-center justify-between font-bold text-neutral-800'>
        <h3 className='text-base font-bold text-neutral-800'>
          {collection.title}
        </h3>

        <div className='flex items-center gap-0.5'>
          <Image src={ethereumEllipse} alt='Ethereum Ellipse' />
          <span className='text-lg'>{collection.diamonds}</span>
        </div>
      </div>

      <button className='w-full rounded-10 border border-neutral-800 bg-transparent px-6.5 py-3.5 text-center text-base font-semibold'>
        Place a Bid
      </button>
    </div>
  )
}
