import { LinkExternal } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

const config = (t: ContextApi['t']) => {
  return [
    {
      title: t('I sold an NFT, where’s my BERA?'),
      description: [
        t(
          'Trades are settled in WBNB, which is a wrapped version of BERA used on BERA Smart Chain. That means that when you sell an item, WBNB is sent to your wallet instead of BERA.',
        ),
        t('You can instantly swap your WBNB for BERA with no trading fees on Beraborrowex.'),
      ],
    },
    {
      title: t('How can I list my NFT collection on the Market?'),
      description: [
        t('In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed.'),
        t('We are now accepting applications from NFT collection owners seeking to list their collections.'),
        <LinkExternal href="https://docs.beraborrowex.metabest.tech/contact-us/nft-market-applications">
          {t('Please apply here')}
        </LinkExternal>,
      ],
    },
    {
      title: t('What are the fees?'),
      description: [
        t(
          '100% of all platform fees taken by Beraborrowex from sales are used to buy back and BURN POOLEN tokens in our weekly POOLEN burns.',
        ),
        t(
          'Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the POOLEN burns.',
        ),
      ],
    },
  ]
}

export default config
