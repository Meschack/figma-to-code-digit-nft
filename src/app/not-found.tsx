import Image from 'next/image'
import notFound from '@@/icons/not-found.svg'

const NotFound = () => (
  <div className='rounded-sm bg-transparent px-5'>
    <div className='mx-auto flex flex-col items-center gap-10'>
      <Image
        alt='Not found illustration'
        width='400'
        height='400'
        decoding='async'
        src={notFound}
        priority
        className='text-transparent'
      />

      <div className='flex flex-col items-center gap-5 text-center'>
        <h2 className='text-2xl font-bold text-black dark:text-white'>
          Désolé, la page est introuvable
        </h2>
        <p className='font-medium'>
          La page que vous recherchez a été déplacée, supprimée ou n'existe pas.
        </p>

        <a
          className='w-fit rounded-md border border-neutral-800 px-6 py-3 font-medium text-neutral-800 hover:bg-neutral-800 hover:text-white hover:!no-underline'
          href='/'
        >
          Revenir en lieu sûr
        </a>
      </div>
    </div>
  </div>
)

export default NotFound
