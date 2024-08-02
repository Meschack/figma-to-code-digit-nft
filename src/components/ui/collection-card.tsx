import { Collection } from '@/types/collections'
import Image from 'next/image'
import ethereumEllipse from '@@/icons/ethereum-ellipse.svg'

interface CollectionProps {
  collection: Collection
}

export const CollectionCard = ({ collection }: CollectionProps) => {
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

      <button className='w-full rounded-10 border border-neutral-800 bg-transparent px-6.5 py-3.5 text-center text-base font-semibold hover:bg-neutral-800 hover:text-white'>
        Place a Bid
      </button>
    </div>
  )
}
