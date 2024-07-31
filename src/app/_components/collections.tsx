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

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2' role='tablist'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => switchCategory(category.id)}
              role='tab'
              value={category.id}
              className={cn(
                'px-6.5 py-3.5 bg-neutral-50 text-neutral-800 font-semibold text-sm border-none rounded-xl',
                selectedCategory === category.id && 'bg-neutral-800 text-white'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <button className='underline text-neutral-500 border-none p-0 font-semibold text-sm'>
          Voir plus
        </button>
      </div>

      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-6 py-3.5 px-11 xl:px-0'>
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
    <div className='border space-y-5 p-3 border-neutral-100 rounded-20'>
      <Image
        src={collection.picture}
        alt={`Picture of collection "${collection.title}"`}
        className='collection__pic'
        loading='lazy'
      />

      <div className='flex items-center justify-between font-bold text-neutral-800'>
        <h3 className='font-bold text-base text-neutral-800'>
          {collection.title}
        </h3>

        <div className='flex gap-0.5 items-center'>
          <Image src={ethereumEllipse} alt='Ethereum Ellipse' />
          <span className='text-lg'>{collection.diamonds}</span>
        </div>
      </div>

      <button className='rounded-10 bg-transparent border w-full text-center py-3.5 px-6.5 border-neutral-800 font-semibold text-base'>
        Place a Bid
      </button>
    </div>
  )
}
