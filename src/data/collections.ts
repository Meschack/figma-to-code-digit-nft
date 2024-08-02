import { Collection } from '@/types/collections'
import cyberPunk from '@@/images/cyber-punk.png'
import durolostBoll from '@@/images/durolost-boll.png'
import spaceX from '@@/images/space-x.png'
import snoopDog from '@@/images/snoop-dog.png'

export const categories = [
  { label: 'All categories', id: 'all' },
  { label: 'Art', id: 'art' },
  { label: 'Celebrities', id: 'celebrities' },
  { label: 'Gaming', id: 'gaming' },
  { label: 'Sport', id: 'sport' }
] as const

export const collections: Collection[] = [
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
