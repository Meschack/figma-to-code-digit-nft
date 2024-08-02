import wallet from '@@/icons/wallet.svg'
import saleTag from '@@/icons/sale-tag.svg'
import cloudDownload from '@@/icons/cloud-download.svg'
import bitcoinEllipse from '@@/icons/bitcoin-ellipse.svg'
import { Step } from '@/types/steps'

export const steps: Step[] = [
  {
    icon: wallet,
    title: 'Set up your wallet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    icon: saleTag,
    title: 'Add your NFT’s',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    icon: cloudDownload,
    title: 'Promote your NFT’s',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    icon: bitcoinEllipse,
    title: 'Sell your NFT’s',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  }
]
