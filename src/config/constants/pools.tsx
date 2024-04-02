import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto POOLEN</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake POOLEN</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible POOLEN</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO POOLEN',
    description: <Trans>Stake POOLEN to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
      80085: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
  {
    sousId: 291,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pstake,
    contractAddress: {
      80085: '0x56D6955Ba6404647191DD7A5D65A5c9Fe43905e1', // TODO
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.1574',
    version: 3,
  },
  {
    sousId: 290,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.peel,
    contractAddress: {
      80085: '0x288d1aD79c113552B618765B4986f7DE679367Da', // TODO
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '4.34',
    version: 3,
  },
  {
    sousId: 289,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.shell,
    contractAddress: {
      80085: '0x595B7AF4F1828AB4953792482b01B2AFC4A46b72', // TODO
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '89.699',
    version: 3,
  },
  {
    sousId: 288,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.high,
    contractAddress: {
      80085: '0x28cc814bE3B994187B7f8Bfed10516A84A671119', // TODO
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1332',
    version: 3,
  },
  {
    sousId: 287,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ole,
    contractAddress: {
      80085: '0xda6F750be1331963E5772BEe757062f6bddcEA4C', // TODO
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.2569',
    version: 3,
  },
  {
    sousId: 286,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.trivia,
    contractAddress: {
      80085: '0x86471019Bf3f403083390AC47643062e15B0256e', // TODO
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '4.976',
    version: 3,
  },
]

// known finished pools
const finishedPools = [
  {
    sousId: 285,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.sdao,
    contractAddress: {
      80085: '0x168eF2e470bfeAEB32BE52FB218A41483904851c', // TODO
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.405',
    version: 3,
  },
  {
    sousId: 284,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.antex,
    contractAddress: {
      97: '',
      80085: '0xdC37A2B2A6a62008beEe029E36153dF8055a8ADa', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1937.62',
    version: 3,
  },
  {
    sousId: 283,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.xcn,
    contractAddress: {
      97: '',
      80085: '0xa79D37ce9DF9443eF4B6DEC2e38a8ecd35303adc', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.2505',
    version: 3,
  },
  {
    sousId: 282,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.chr,
    contractAddress: {
      97: '',
      80085: '0x2D17ec6cd0AF737B2adE40ea527d41ceEedc166f', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.58',
    version: 3,
  },
  {
    sousId: 281,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.MIX,
    contractAddress: {
      97: '',
      80085: '0x0F96E19Bdc787e767BA1e8F1aDD0f62cbdad87C8', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '63.136',
    version: 3,
  },
  {
    sousId: 280,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.metis,
    contractAddress: {
      97: '',
      80085: '0xC0A94bFF88EdCae7D5d79294C0e9954Ed75CBCb7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01331',
    version: 3,
  },
  {
    sousId: 279,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.gal,
    contractAddress: {
      97: '',
      80085: '0xa5D57C5dca083a7051797920c78fb2b19564176B', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.09645',
    version: 3,
  },
  {
    sousId: 278,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.rpg,
    contractAddress: {
      97: '',
      80085: '0xD1c395BCdC2d64ac6544A34A36185483B00530a1', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.06794',
    version: 3,
  },
  {
    sousId: 277,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ankr,
    contractAddress: {
      97: '',
      80085: '0xc581345e1648CcE154978eA80bF8A584EC8aFDe0', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '4.6296',
    version: 3,
  },
  {
    sousId: 276,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ceek,
    contractAddress: {
      97: '',
      80085: '0xED53944b1c0cEecDe1a413fDb4D0496e1a08ab58', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.8078',
    version: 3,
  },
  {
    sousId: 275,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.tinc,
    contractAddress: {
      97: '',
      80085: '0x9593462fF51A14633b243Ba3d054A8183d057A02', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4677',
    version: 3,
  },
  {
    sousId: 274,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pex,
    contractAddress: {
      97: '',
      80085: '0x641B1F2781B34a493E4308A0A3F1c7E042A9B952', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3865',
    version: 3,
  },
  {
    sousId: 273,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.gmi,
    contractAddress: {
      97: '',
      80085: '0x0D53E0f2Eb384777442e4EB813d8f5fAcC742206', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '17.939',
    version: 3,
  },
  {
    sousId: 272,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.froyo,
    contractAddress: {
      97: '',
      80085: '0x84e3208578eE7db397a3d584d97Fea107b15bF35', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3.404',
    version: 3,
  },
  {
    sousId: 271,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bsw,
    contractAddress: {
      97: '',
      80085: '0x7092e029E4ce660F9AC081BF6D8a339BE602398b', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.157',
    version: 3,
  },
  {
    sousId: 270,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.duet,
    contractAddress: {
      97: '',
      80085: '0xA581349F26dE887700045F9B7d148775d422fDA2', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4861',
    version: 3,
  },
  {
    sousId: 269,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.gmt,
    contractAddress: {
      97: '',
      80085: '0xe76a31cF974BA5819ce86cB4667a4bf05174bC59', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '4.629',
    version: 3,
  },
  {
    sousId: 268,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.xwg,
    contractAddress: {
      97: '',
      80085: '0x6e0272A70075f6782F6842730107E9ABf74C5CC7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '5.106',
    version: 3,
  },
  {
    sousId: 267,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.high,
    contractAddress: {
      97: '',
      80085: '0x60c4998C058BaC8042712B54E7e43b892Ab0B0c4', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.09756',
    version: 3,
  },
  {
    sousId: 266,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.thg,
    contractAddress: {
      97: '',
      80085: '0xD1D03A3D4C27884a8703Cdb78504737C9E9A159e', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.162',
    version: 3,
  },
  {
    sousId: 265,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.era,
    contractAddress: {
      97: '',
      80085: '0x260F95f5b7FD8eda720ED9d0829164dE35B048ab', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.608',
    version: 3,
  },
  {
    sousId: 264,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.btt,
    contractAddress: {
      97: '',
      80085: '0x346a1b672C5Cbb6AE21715428f77A0049B29B332', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '157829',
  },
  {
    sousId: 263,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ach,
    contractAddress: {
      97: '',
      80085: '0xcD1Be742b04DB005e2C445A11BDe6d13DD9dd454', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '7.502',
  },
  {
    sousId: 261,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.sfund,
    contractAddress: {
      97: '',
      80085: '0x80762101bd79D6e7A175E9678d05c7f815b8D7d7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.06481',
  },
  {
    sousId: 260,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.raca,
    contractAddress: {
      97: '',
      80085: '0xAaF43935a526DF88AB57FC69b1d80a8d35e1De82', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '204.2',
  },
  {
    sousId: 259,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ertha,
    contractAddress: {
      97: '',
      80085: '0x921Ea7e12A66025F2BD287eDbff6dc5cEABd6477', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.585',
  },
  {
    sousId: 258,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.fuse,
    contractAddress: {
      97: '',
      80085: '0xeAd7b8fc5F2E5672FAe9dCf14E902287F35CB169', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.19',
  },
  {
    sousId: 257,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.froyo,
    contractAddress: {
      97: '',
      80085: '0x1c9E3972fdBa29b40954Bb7594Da6611998F8830', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.893',
  },
  {
    sousId: 256,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.aog,
    contractAddress: {
      97: '',
      80085: '0xa34832efe74133763A85060a64103542031B0A7E', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.6435',
  },
  {
    sousId: 255,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.apx,
    contractAddress: {
      97: '',
      80085: '0x92c07c325cE7b340Da2591F5e9CbB1F5Bab73FCF', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3.035',
  },
  {
    sousId: 254,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bcoin,
    contractAddress: {
      97: '',
      80085: '0x25ca61796d786014ffe15e42ac11c7721d46e120', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1493',
  },
  {
    sousId: 253,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bcoin,
    contractAddress: {
      97: '',
      80085: '0xad8F6A9d58012DCa2303226B287E80e5fE27eff0', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1493',
  },
  {
    sousId: 252,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.insur,
    contractAddress: {
      97: '',
      80085: '0x1A777aE604CfBC265807A46Db2d228d4CC84E09D', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3281',
  },
  {
    sousId: 251,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.gm,
    contractAddress: {
      97: '',
      80085: '0x09e727c83a75fFdB729280639eDBf947dB76EeB7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '7893',
  },
  {
    sousId: 250,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.woop,
    contractAddress: {
      97: '',
      80085: '0x2718D56aE2b8F08B3076A409bBF729542233E451', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.226',
  },
  {
    sousId: 249,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.high,
    contractAddress: {
      97: '',
      80085: '0x2461ea28907A2028b2bCa40040396F64B4141004', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.02679',
  },
  {
    sousId: 247,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dpt,
    contractAddress: {
      97: '',
      80085: '0x1c0C7F3B07a42efb4e15679a9ed7e70B2d7Cc157', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '4.62962963',
  },
  {
    sousId: 246,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.thg,
    contractAddress: {
      97: '',
      80085: '0x56Bfb98EBEF4344dF2d88c6b80694Cba5EfC56c8', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.03761',
  },
  {
    sousId: 245,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.idia,
    contractAddress: {
      97: '',
      80085: '0x07984aBb7489CD436d27875c07Eb532d4116795a', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1262',
  },
  {
    sousId: 244,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.xcv,
    contractAddress: {
      97: '',
      80085: '0xF1fA41f593547E406a203b681df18acCC3971A43', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.7413',
  },
  {
    sousId: 243,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.nabox,
    contractAddress: {
      97: '',
      80085: '0x13A40BFab005D9284f8938FBb70Bf39982580e4D', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1271',
  },
  {
    sousId: 242,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.santos,
    contractAddress: {
      97: '',
      80085: '0x0914b2d9D4DD7043893DEF53ecFC0F1179F87d5c', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0578',
  },
  {
    sousId: 241,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.quidd,
    contractAddress: {
      97: '',
      80085: '0xd97ee2bfe79a4d4ab388553411c462fbb536a88c', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.07471',
  },
  {
    sousId: 240,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.zoo,
    contractAddress: {
      97: '',
      80085: '0x2EfE8772EB97B74be742d578A654AB6C95bF18db', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4516',
  },
  {
    sousId: 239,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.sfund,
    contractAddress: {
      97: '',
      80085: '0x7F103689cabe17C2F70DA6faa298045d72a943b8', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0311',
  },
  {
    sousId: 238,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.qi,
    contractAddress: {
      97: '',
      80085: '0xbd52ef04DB1ad1c68A8FA24Fa71f2188978ba617', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.736',
  },
  {
    sousId: 237,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.kart,
    contractAddress: {
      97: '',
      80085: '0x73bB10B89091f15e8FeD4d6e9EBa6415df6acb21', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1897',
  },
  {
    sousId: 236,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.porto,
    contractAddress: {
      97: '',
      80085: '0xdD52FAB121376432DBCBb47592742F9d86CF8952', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0578',
  },
  {
    sousId: 235,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dvi,
    contractAddress: {
      97: '',
      80085: '0x2b8751B7141Efa7a9917f9C6fea2CEA071af5eE7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.2516',
  },
  {
    sousId: 234,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.jgn,
    contractAddress: {
      97: '',
      80085: '0xfDFb4DbE94916F9f55dBC2c14Ea8B3e386eCD9F9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.5233',
  },
  {
    sousId: 232,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.xwg,
    contractAddress: {
      97: '',
      80085: '0x79f5f7DDADeFa0A9e850DFFC4fBa77e5172Fe701', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.3379',
  },
  {
    sousId: 231,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dar,
    contractAddress: {
      97: '',
      80085: '0x9b861A078B2583373A7a3EEf815bE1A39125Ae08', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.3148',
  },
  {
    sousId: 230,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.fina,
    contractAddress: {
      97: '',
      80085: '0xa35caA9509a2337E22C54C929146D5F7f6515794', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.06944',
  },
  {
    sousId: 229,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bmon,
    contractAddress: {
      97: '',
      80085: '0x6e63B2B96c77532ea7ec2B3D3BFA9C8e1d383f3C', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.0254',
  },
  {
    sousId: 228,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dkt,
    contractAddress: {
      97: '',
      80085: '0xFef4B7a0194159d89717Efa592384d42B28D3926', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.09838',
  },
  {
    sousId: 227,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ramp,
    contractAddress: {
      97: '',
      80085: '0x2D26e4b9a5F19eD5BB7AF221DC02432D31DEB4dA', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.2152',
  },
  {
    sousId: 226,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.lazio,
    contractAddress: {
      97: '',
      80085: '0xd008416c2c9cf23843bd179aa3cefedb4c8d1607', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0694',
  },
  {
    sousId: 225,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.sps,
    contractAddress: {
      97: '',
      80085: '0xd9b63bb6c62fe2e9a641699a91e680994b8b0081', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.40046',
  },
  {
    sousId: 224,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.mcb,
    contractAddress: {
      97: '',
      80085: '0xCc2D359c3a99d9cfe8e6F31230142efF1C828e6D', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00706',
  },
  {
    sousId: 223,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.rpg,
    contractAddress: {
      97: '',
      80085: '0x65C0940C50A3C98AEEc95a115Ae62E9804588713', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01863',
  },
  {
    sousId: 222,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.beta,
    contractAddress: {
      97: '',
      80085: '0x6f660c58723922c6f866a058199ff4881019b4b5', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.7361',
  },
  {
    sousId: 233,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.eternal,
    contractAddress: {
      97: '',
      80085: '0xc28c400F2B675b25894FA632205ddec71E432288', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.002893',
  },
  {
    sousId: 221,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.nft,
    contractAddress: {
      97: '',
      80085: '0x8d018823d13c56d62ffb795151a9e629c21e047b', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '173727',
  },
  {
    sousId: 220,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.chess,
    contractAddress: {
      97: '',
      80085: '0x4D1Ec426d0d7fb6bF344Dd372d0502EDD71c8d88', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0861',
  },
  {
    sousId: 219,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.tlos,
    contractAddress: {
      97: '',
      80085: '0xCB41a72067c227D6Ed7bc7CFAcd13eCe47Dfe5E9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3616',
  },
  {
    sousId: 218,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.stephero,
    contractAddress: {
      97: '',
      80085: '0xcecba456fefe5b18d43df23419e7ab755b436655', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1851',
  },
  {
    sousId: 217,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bp,
    contractAddress: {
      97: '',
      80085: '0x8ed7acf12b08274d5cdaf03d43d0e54bcbdd487e', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.217',
  },
  {
    sousId: 216,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cvp,
    contractAddress: {
      97: '',
      80085: '0xC4b15117BC0be030c20754FF36197641477af5d1', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.14',
  },
  {
    sousId: 215,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.qbt,
    contractAddress: {
      97: '',
      80085: '0xB72dEf58D0832f747d6B7197471Fe20AeA7EB463', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.412',
  },
  {
    sousId: 214,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.naos,
    contractAddress: {
      97: '',
      80085: '0xb38b78529bCc895dA16CE2978D6cD6C56e8CfFC3', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1736',
  },
  {
    sousId: 213,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pha,
    contractAddress: {
      97: '',
      80085: '0x2E101b5F7f910F2609e5AcE5f43bD274b1DE09AA', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.28',
  },
  {
    sousId: 212,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bel,
    contractAddress: {
      97: '',
      80085: '0x52733Ad7b4D09BF613b0389045e33E2F287afa04', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.101',
  },
  {
    sousId: 211,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ramp,
    contractAddress: {
      97: '',
      80085: '0x401b9b97bdbc3197c1adfab9652dc78040bd1e13', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.9837',
  },
  {
    sousId: 210,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pots,
    contractAddress: {
      97: '',
      80085: '0xBeDb490970204cb3CC7B0fea94463BeD67d5364D', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0868',
  },
  {
    sousId: 209,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.tusd,
    contractAddress: {
      97: '',
      80085: '0xb6e510ae2da1ab4e350f837c70823ab75091780e', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.5787',
  },
  {
    sousId: 208,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.revv,
    contractAddress: {
      97: '',
      80085: '0x8aa5b2c67852ed5334c8a7f0b5eb0ef975106793', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.331',
  },
  {
    sousId: 207,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bttold,
    contractAddress: {
      97: '',
      80085: '0x3b804460c3c62f0f565af593984159f13b1ac976', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '263',
  },
  {
    sousId: 206,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.skill,
    contractAddress: {
      97: '',
      80085: '0x455f4d4cc4d6ca15441a93c631e82aaf338ad843', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00289',
  },
  {
    sousId: 205,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.win,
    contractAddress: {
      97: '',
      80085: '0xde4aef42bb27a2cb45c746acde4e4d8ab711d27c', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1815.39',
  },
  {
    sousId: 204,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.if,
    contractAddress: {
      97: '',
      80085: '0x57d3524888ded4085d9124a422f13b27c8a43de7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.02835',
  },
  {
    sousId: 203,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.sps,
    contractAddress: {
      97: '',
      80085: '0xb56299d8fbf46c509014b103a164ad1fc65ea222', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '12.86',
  },
  {
    sousId: 202,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.c98,
    contractAddress: {
      97: '',
      80085: '0x5e49531BA07bE577323e55666D46C6217164119E', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.7361',
  },
  {
    sousId: 201,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.axs,
    contractAddress: {
      97: '',
      80085: '0xBB472601B3CB32723d0755094BA80B73F67f2AF3', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00744',
  },
  {
    sousId: 200,
    stakingToken: serializedTokens.axs,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      80085: '0x583A36816F3b8401C4fdf682203E0caDA6997740', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00992',
  },
  {
    sousId: 199,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pmon,
    contractAddress: {
      97: '',
      80085: '0x28050e8f024e05f9ddbef5f60dd49f536dba0cf0', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.02696',
  },
  {
    sousId: 198,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.trx,
    contractAddress: {
      97: '',
      80085: '0xb2b62f88ab82ed0bb4ab4da60d9dc9acf9e816e5', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '9.6643',
  },
  {
    sousId: 197,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.chess,
    contractAddress: {
      97: '',
      80085: '0xd1812e7e28c39e78727592de030fc0e7c366d61a', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4286',
  },
  {
    sousId: 196,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.titan,
    contractAddress: {
      97: '',
      80085: '0x97058cf9b36c9ef1622485cef22e72d6fea32a36', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.08912',
  },
  {
    sousId: 195,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.harmony,
    contractAddress: {
      97: '',
      80085: '0xe595456846155e23b24cc9cbee910ee97027db6d', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3.0092',
  },
  {
    sousId: 194,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.mask,
    contractAddress: {
      97: '',
      80085: '0xae611c6d4d3ca2cee44cd34eb7aac29d5a387fcf', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.06423',
  },
  {
    sousId: 193,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dvi,
    contractAddress: {
      97: '',
      80085: '0x135827eaf9746573c0b013f18ee12f138b9b0384', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.7233',
  },
  {
    sousId: 192,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.gum,
    contractAddress: {
      97: '',
      80085: '0x09b8a5f51c9e245402057851ada274174fa00e2a', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.67129',
  },
  {
    sousId: 191,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.adx,
    contractAddress: {
      97: '',
      80085: '0x53a2d1db049b5271c6b6db020dba0e8a7c4eb90d', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.7523',
  },
  {
    sousId: 190,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.suter,
    contractAddress: {
      97: '',
      80085: '0x4da8da81647ee0aa7350e9959f3e4771eb753da0', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '69.9074',
  },
  {
    sousId: 189,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bscpad,
    contractAddress: {
      97: '',
      80085: '0x0446b8f8474c590d2249a4acdd6eedbc2e004bca', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3877',
  },
  {
    sousId: 188,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.rabbit,
    contractAddress: {
      97: '',
      80085: '0x391240A007Bfd8A59bA74978D691219a76c64c5C', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3.993',
  },
  {
    sousId: 187,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.waultx,
    contractAddress: {
      97: '',
      80085: '0x017DEa5C58c2Bcf57FA73945073dF7AD4052a71C', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '7.9108',
  },
  {
    sousId: 186,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.wex,
    contractAddress: {
      97: '',
      80085: '0x6Bd94783caCef3fb7eAa9284f1631c464479829f', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '11.574',
  },
  {
    sousId: 185,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.form,
    contractAddress: {
      97: '',
      80085: '0x7c71723fB1F9Cfb250B702cfc4eBd5D9Ab2E83d9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.4467',
  },
  {
    sousId: 184,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.orbs,
    contractAddress: {
      97: '',
      80085: '0x9C8813d7D0A61d30610a7A5FdEF9109e196a3D77', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3.8946',
  },
  {
    sousId: 183,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.$dg,
    contractAddress: {
      97: '',
      80085: '0xa07a91da6d10173f33c294803684bceede325957', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00135',
  },
  {
    sousId: 182,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.woo,
    contractAddress: {
      97: '',
      80085: '0x88c321d444c88acf3e747dc90f20421b97648903', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3854',
  },
  {
    sousId: 181,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.woo,
    contractAddress: {
      97: '',
      80085: '0x3c7234c496d76133b48bd6a342e7aea4f8d87fc8', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0003854',
  },
  {
    sousId: 180,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.htb,
    contractAddress: {
      97: '',
      80085: '0x64473c33c360f315cab38674f1633505d1d8dcb2', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '5.2083',
  },
  {
    sousId: 179,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.jgn,
    contractAddress: {
      97: '',
      80085: '0x5cc7a19a50be2a6b2540ebcd55bd728e732e59c3', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1001',
  },
  {
    sousId: 178,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dft,
    contractAddress: {
      97: '',
      80085: '0x2666e2494e742301ffc8026e476acc1710a775ed', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.7361',
  },
  {
    sousId: 177,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hai,
    contractAddress: {
      97: '',
      80085: '0x6ac2213F09A404c86AFf506Aa51B6a5BF1F6e24E', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.3078',
  },
  {
    sousId: 176,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.o3,
    contractAddress: {
      97: '',
      80085: '0x35BD47263f7E57368Df76339903C53bAa99076e1', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.107638',
  },
  {
    sousId: 175,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ampl,
    contractAddress: {
      97: '',
      80085: '0x62dEc3A560D2e8A84D30752bA454f97b26757877', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.398',
  },
  {
    sousId: 174,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.oddz,
    contractAddress: {
      97: '',
      80085: '0x44d1f81e80e43e935d66d65874354ef91e5e49f6', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4843',
  },
  {
    sousId: 173,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bondly,
    contractAddress: {
      97: '',
      80085: '0x4ea43fce546975aae120c9eeceb172500be4a02b', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.6741',
  },
  {
    sousId: 172,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.marsh,
    contractAddress: {
      97: '',
      80085: '0x567fd708e788e51b68666b9310ee9df163d60fae', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1108',
  },
  {
    sousId: 171,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.mbox,
    contractAddress: {
      97: '',
      80085: '0x36f9452083fc9bc469a31e7966b873f402292433', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4803',
  },
  {
    sousId: 170,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ata,
    contractAddress: {
      97: '',
      80085: '0xc612680457751d0d01b5d901ad08132a3b001900', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.7361',
  },
  {
    sousId: 169,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.mx,
    contractAddress: {
      97: '',
      80085: '0x336bcd59f2b6eb7221a99f7a50fd03c6bf9a306b', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.27777',
  },
  {
    sousId: 168,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bcfx,
    contractAddress: {
      97: '',
      80085: '0x2b3974dda76b2d408b7d680a27fbb0393e3cf0e1', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.6944',
  },
  {
    sousId: 167,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.qkc,
    contractAddress: {
      97: '',
      80085: '0xfa67f97eeee6de55d179ecabbfe701f27d9a1ed9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '15.9143',
  },
  {
    sousId: 166,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ktn,
    contractAddress: {
      97: '',
      80085: '0x48852322a185dc5fc733ff8c8d7c6dcbd2b3b2a2', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01215',
  },
  {
    sousId: 165,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.mtrg,
    contractAddress: {
      97: '',
      80085: '0xf4d0f71698f58f221911515781b05e808a8635cb', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.05613',
  },
  {
    sousId: 164,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.tusd,
    contractAddress: {
      97: '',
      80085: '0x9dceb1d92f7e0361d0766f3d98482424df857654', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.5787',
  },
  {
    sousId: 163,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.vrt,
    contractAddress: {
      97: '',
      80085: '0xb77f1425ec3a7c78b1a1e892f72332c8b5e8ffcb', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '40.5092',
  },
  {
    sousId: 162,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.kalm,
    contractAddress: {
      97: '',
      80085: '0xb9ff4da0954b300542e722097671ead8cf337c17', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0868',
  },
  {
    sousId: 161,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ez,
    contractAddress: {
      97: '',
      80085: '0xb19395702460261e51edf7a7b130109c64f13af9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01736',
  },
  {
    sousId: 160,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.kalm,
    contractAddress: {
      97: '',
      80085: '0x6e113ecb9ff2d271140f124c2cc5b5e4b5700c9f', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00868',
  },
  {
    sousId: 159,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.popen,
    contractAddress: {
      97: '',
      80085: '0x7baf1763ce5d0da8c9d85927f08a8be9c481ce50', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.19097',
  },
  {
    sousId: 158,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.lien,
    contractAddress: {
      97: '',
      80085: '0x2b8d6c9c62bfc1bed84724165d3000e61d332cab', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.023148',
  },
  {
    sousId: 157,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.well,
    contractAddress: {
      97: '',
      80085: '0x8a06ff2748edcba3fb4e44a6bfda4e46769e557b', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.2025',
  },
  {
    sousId: 156,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.deri,
    contractAddress: {
      97: '',
      80085: '0x3eba95f5493349bbe0cad33eaae05dc6a7e26b90', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.6087',
  },
  {
    sousId: 155,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.chr,
    contractAddress: {
      97: '',
      80085: '0x593edbd14a5b7eec828336accca9c16cc12f04be', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.655',
  },
  {
    sousId: 154,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cyc,
    contractAddress: {
      97: '',
      80085: '0xD714738837944C3c592477249E8edB724A76e068', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00015914',
  },
  {
    sousId: 153,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.xend,
    contractAddress: {
      97: '',
      80085: '0x8ea9f2482b2f7b12744a831f81f8d08714adc093', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.31828',
  },
  {
    sousId: 152,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hget,
    contractAddress: {
      97: '',
      80085: '0x8e8125f871eb5ba9d55361365f5391ab437f9acc', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.03553',
  },
  {
    sousId: 151,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hotcross,
    contractAddress: {
      97: '',
      80085: '0x0e09205e993f78cd5b3a5df355ae98ee7d0b5834', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3.4722',
  },
  {
    sousId: 150,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.rfox,
    contractAddress: {
      97: '',
      80085: '0xf9f00d41b1f4b3c531ff750a9b986c1a530f33d9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.7361',
  },
  {
    sousId: 149,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.wmass,
    contractAddress: {
      97: '',
      80085: '0x4Af531EcD50167a9402Ce921ee6436dd4cFC04FD', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.24942',
  },
  {
    sousId: 148,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ubxt,
    contractAddress: {
      97: '',
      80085: '0x9b4bac2d8f69853aa29cb45478c77fc54532ac22', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.4074',
  },
  {
    sousId: 147,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.btr,
    contractAddress: {
      97: '',
      80085: '0x20ee70a07ae1b475cb150dec27930d97915726ea', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.8935',
  },
  {
    sousId: 146,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.τdoge,
    contractAddress: {
      97: '',
      80085: '0x017556dffb8c6a52fd7f4788adf6fb339309c81b', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.868',
  },
  {
    sousId: 145,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pmon,
    contractAddress: {
      97: '',
      80085: '0xdaa711ecf2ac0bff5c82fceeae96d0008791cc49', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01261',
  },
  {
    sousId: 144,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.one,
    contractAddress: {
      97: '',
      80085: '0x74af842ecd0b6588add455a47aa21ed9ba794108', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '57.87',
  },
  {
    sousId: 143,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.fine,
    contractAddress: {
      97: '',
      80085: '0x42d41749d6e9a1c5b47e27f690d4531f181b2159', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1342',
  },
  {
    sousId: 142,
    stakingToken: serializedTokens.doge,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      80085: '0xbebd44824631b55991fa5f2bf5c7a4ec96ff805b', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01388',
  },
  {
    sousId: 141,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bmxx,
    contractAddress: {
      97: '',
      80085: '0x55131f330c886e3f0cae389cedb23766ac9aa3ed', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01331',
  },
  {
    sousId: 140,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.oin,
    contractAddress: {
      97: '',
      80085: '0x01453a74a94687fa3f99b80762435855a13664f4', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3472',
  },
  {
    sousId: 139,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hyfi,
    contractAddress: {
      97: '',
      80085: '0x0032ceb978fe5fc8a5d5d6f5adfc005e76397e29', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.8935',
  },
  {
    sousId: 138,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.kun,
    contractAddress: {
      97: '',
      80085: '0x439b46d467402cebc1a2fa05038b5b696b1f4417', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.23148',
  },
  {
    sousId: 137,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.math,
    contractAddress: {
      97: '',
      80085: '0x377ae5f933aa4cfa41fa03e2cae8a2befccf53b2', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.15798',
  },
  {
    sousId: 136,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ust,
    contractAddress: {
      97: '',
      80085: '0xce3ebac3f549ebf1a174a6ac3b390c179422b5f6', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.17361',
  },
  {
    sousId: 135,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.win,
    contractAddress: {
      97: '',
      80085: '0xd26dec254c699935c286cd90e9841dcabf1af72d', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '462.96',
  },
  {
    sousId: 134,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.trx,
    contractAddress: {
      97: '',
      80085: '0x93e2867d9b74341c2d19101b7fbb81d6063cca4d', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '4.0509',
  },
  {
    sousId: 133,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bttold,
    contractAddress: {
      97: '',
      80085: '0x3b644e44033cff70bd6b771904225f3dd69dfb6d', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '79.86',
  },
  {
    sousId: 132,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.lmt,
    contractAddress: {
      97: '',
      80085: '0x0a687d7b951348d681f7ed5eea84c0ba7b9566dc', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.66145',
  },
  {
    sousId: 131,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pnt,
    contractAddress: {
      97: '',
      80085: '0x417df1c0e6a498eb1f2247f99032a01d4fafe922', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.09548',
  },
  {
    sousId: 130,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.xmark,
    contractAddress: {
      97: '',
      80085: '0xdc8943d806f9dd64312d155284abf780455fd345', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0298',
  },
  {
    sousId: 129,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ramp,
    contractAddress: {
      97: '',
      80085: '0xa90a894e5bc20ab2be46c7e033a38f8b8eaa771a', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4861',
    isFinished: true,
  },
  {
    sousId: 128,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hakka,
    contractAddress: {
      97: '',
      80085: '0x34ac807e34e534fe426da1e11f816422774aae1c', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3.4722',
  },
  {
    sousId: 127,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pbtc,
    contractAddress: {
      97: '',
      80085: '0x31fa2f516b77c4273168b284ac6d9def5aa6dafb', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0000031',
  },
  {
    sousId: 126,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.lien,
    contractAddress: {
      97: '',
      80085: '0x7112f8988f075c7784666ab071927ae4109a8076', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.003472',
  },
  {
    sousId: 125,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bbadger,
    contractAddress: {
      97: '',
      80085: '0x126dfbcef85c5bf335f8be99ca4006037f417892', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00265278',
  },
  {
    sousId: 124,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bdigg,
    contractAddress: {
      97: '',
      80085: '0x4f0ad2332b1f9983e8f63cbee617523bb7de5031', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00000403',
  },
  {
    sousId: 123,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bondly,
    contractAddress: {
      97: '',
      80085: '0x9483ca44324de06802576866b9d296f7614f45ac', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4629',
  },
  {
    sousId: 122,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.xed,
    contractAddress: {
      97: '',
      80085: '0x72ceec6e2a142678e703ab0710de78bc819f4ce0', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3472',
  },
  {
    sousId: 121,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cgg,
    contractAddress: {
      97: '',
      80085: '0x1c6ed21d3313822ae73ed0d94811ffbbe543f341', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.10918',
  },
  {
    sousId: 120,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.perl,
    contractAddress: {
      97: '',
      80085: '0x1ac0d0333640f57327c83053c581340ebc829e30', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.1574',
  },
  {
    sousId: 119,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.arpa,
    contractAddress: {
      97: '',
      80085: '0xc707e5589aeb1dc117b0bb5a3622362f1812d4fc', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.949',
  },
  {
    sousId: 118,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.oddz,
    contractAddress: {
      97: '',
      80085: '0x22106cdcf9787969e1672d8e6a9c03a889cda9c5', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.11284',
  },
  {
    sousId: 117,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dexe,
    contractAddress: {
      97: '',
      80085: '0x999b86e8bba3d4f05afb8155963999db70afa97f', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.009837',
    isFinished: true,
  },
  {
    sousId: 116,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dfd,
    contractAddress: {
      97: '',
      80085: '0xAF3EfE5fCEeBc603Eada6A2b0172be11f7405102', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.46296',
  },
  {
    sousId: 115,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.alpaca,
    contractAddress: {
      97: '',
      80085: '0xf73fdeb26a8c7a4abf3809d3db11a06ba5c13d0e', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.22743',
  },
  {
    sousId: 114,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.τbtc,
    contractAddress: {
      97: '',
      80085: '0xaac7171afc93f4b75e1268d208040b152ac65e32', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00000608',
  },
  {
    sousId: 113,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.τbtc,
    contractAddress: {
      97: '',
      80085: '0x2c6017269b4324d016ca5d8e3267368652c18905', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00000608',
    isFinished: true,
  },
  {
    sousId: 112,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.swingby,
    contractAddress: {
      97: '',
      80085: '0x675434c68f2672c983e36cf10ed13a4014720b79', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.21527',
  },
  {
    sousId: 111,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.xed,
    contractAddress: {
      97: '',
      80085: '0x05d6c2d1d687eacfb5e6440d5a3511e91f2201a8', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3472',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 110,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hakka,
    contractAddress: {
      97: '',
      80085: '0xd623a32da4a632ce01766c317d07cb2cad56949b', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3.4722',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 109,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cgg,
    contractAddress: {
      97: '',
      80085: '0xdf75f38dbc98f9f26377414e567abcb8d57cca33', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.10918',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 108,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.mix,
    contractAddress: {
      97: '',
      80085: '0xce64a930884b2c68cd93fc1c7c7cdc221d427692', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3721',
  },
  {
    sousId: 107,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.suter,
    contractAddress: {
      97: '',
      80085: '0xc1E70edd0141c454b834Deac7ddDeA413424aEf9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '15.3356',
  },
  {
    sousId: 106,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.broobee,
    contractAddress: {
      97: '',
      80085: '0x189d8228CdfDc404Bd9e5bD65ff958cb5fd8855c', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '14.4675',
  },
  {
    sousId: 105,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hzn,
    contractAddress: {
      97: '',
      80085: '0x0196c582216e2463f052E2B07Ef8667Bec9Fb17a', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.6944',
  },
  {
    sousId: 104,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.alpa,
    contractAddress: {
      97: '',
      80085: '0x8f84106286c9c8A42bc3555C835E6e2090684ab7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.23495',
  },
  {
    sousId: 103,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.perl,
    contractAddress: {
      97: '',
      80085: '0xa8d32b31ECB5142f067548Bf0424389eE98FaF26', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.1574',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 102,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.tlm,
    contractAddress: {
      97: '',
      80085: '0xC59aa49aE508050c2dF653E77bE13822fFf02E9A', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '17.361',
  },
  {
    sousId: 101,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.jgn,
    contractAddress: {
      97: '',
      80085: '0x14AeA62384789EDA98f444cCb970F6730877d3F9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.08796',
  },
  {
    sousId: 100,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.eps,
    contractAddress: {
      97: '',
      80085: '0xebb87dF24D65977cbe62538E4B3cFBD5d0308642', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.07716',
  },
  {
    sousId: 99,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.arpa,
    contractAddress: {
      97: '',
      80085: '0x40918EF8efFF4aA061656013a81E0e5A8A702eA7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.949',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 98,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.itam,
    contractAddress: {
      97: '',
      80085: '0x44eC1B26035865D9A7C130fD872670CD7Ebac2bC', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3.096',
  },
  {
    sousId: 97,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bondly,
    contractAddress: {
      97: '',
      80085: '0x1329ad151dE6C441184E32E108401126AE850937', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4629',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 96,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.tko,
    contractAddress: {
      97: '',
      80085: '0x9bbDc92474a7e7321B78dcDA5EF35f4981438760', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.1574',
  },
  {
    sousId: 95,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.apys,
    contractAddress: {
      97: '',
      80085: '0x46530d79b238f809e80313e73715b160c66677aF', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.09953',
  },
  {
    sousId: 94,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hoo,
    contractAddress: {
      97: '',
      80085: '0x47fD853D5baD391899172892F91FAa6d0cd8A2Aa', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.489',
  },
  {
    sousId: 93,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.oddz,
    contractAddress: {
      97: '',
      80085: '0xe25aB6F05BBF6C1be953BF2d7df15B3e01b8e5a5', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.11284',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 92,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.easy,
    contractAddress: {
      97: '',
      80085: '0xEB8Fd597921E3Dd37B0F103a2625F855e2C9b9B5', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0072338',
  },
  {
    sousId: 91,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.nrv,
    contractAddress: {
      97: '',
      80085: '0xABFd8d1942628124aB971937154f826Bce86DcbC', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.15046',
  },
  {
    sousId: 90,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dego,
    contractAddress: {
      97: '',
      80085: '0x526d3c204255f807C95a99b69596f2f9f72345e5', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00405',
  },
  {
    sousId: 89,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.gum,
    contractAddress: {
      97: '',
      80085: '0xAa2082BeE04fc518300ec673F9497ffa6F669dB8', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.08912',
  },
  {
    sousId: 88,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pbtc,
    contractAddress: {
      97: '',
      80085: '0x9096625Bc0d36F5EDa6d44e511641667d89C28f4', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0000031',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 87,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dft,
    contractAddress: {
      97: '',
      80085: '0x78BD4dB48F8983c3C36C8EAFbEF38f6aC7B55285', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.6811',
  },
  {
    sousId: 86,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.swth,
    contractAddress: {
      97: '',
      80085: '0x35418e14F5aA615C4f020eFBa6e01C5DbF15AdD2', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.3148',
  },
  {
    sousId: 85,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.lien,
    contractAddress: {
      97: '',
      80085: '0x3c7cC49a35942fbD3C2ad428a6c22490cd709d03', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.003472',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 84,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.zil,
    contractAddress: {
      97: '',
      80085: '0xF795739737ABcFE0273f4Dced076460fdD024Dd9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '1.0995',
  },
  {
    sousId: 83,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pcws,
    contractAddress: {
      97: '',
      80085: '0x06FF8960F7F4aE572A3f57FAe77B2882BE94Bf90', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00434',
  },
  {
    sousId: 82,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bbadger,
    contractAddress: {
      97: '',
      80085: '0xe4dD0C50fb314A8B2e84D211546F5B57eDd7c2b9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00265278',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 81,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bdigg,
    contractAddress: {
      97: '',
      80085: '0xb627A7e33Db571bE792B0b69c5C2f5a8160d5500', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00000403',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 80,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.lto,
    contractAddress: {
      97: '',
      80085: '0xadBfFA25594AF8Bc421ecaDF54D057236a99781e', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.2893',
  },
  {
    sousId: 79,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.mir,
    contractAddress: {
      97: '',
      80085: '0x3e31488f08EBcE6F2D8a2AA512aeFa49a3C7dFa7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01273',
  },
  {
    sousId: 78,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.mir,
    contractAddress: {
      97: '',
      80085: '0x453a75908fb5a36d482d5f8fe88eca836f32ead5', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01273',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 77,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.trade,
    contractAddress: {
      97: '',
      80085: '0x509C99D73FB54b2c20689708b3F824147292D38e', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4484',
  },
  {
    sousId: 76,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dusk,
    contractAddress: {
      97: '',
      80085: '0xF1bd5673Ea4a1C415ec84fa3E402F2F7788E7717', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4629',
  },
  {
    sousId: 75,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bifi,
    contractAddress: {
      97: '',
      80085: '0xB4C68A1C565298834360BbFF1652284275120D47', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00007234',
  },
  {
    sousId: 74,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.txl,
    contractAddress: {
      97: '',
      80085: '0x153e62257F1AAe05d5d253a670Ca7585c8D3F94F', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.434027',
  },
  {
    sousId: 73,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cos,
    contractAddress: {
      97: '',
      80085: '0xF682D186168b4114ffDbF1291F19429310727151', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '5.787',
  },
  {
    sousId: 72,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bunny,
    contractAddress: {
      97: '',
      80085: '0xaDdAE5f4dB84847ac9d947AED1304A8e7D19f7cA', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00289',
  },
  {
    sousId: 71,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.alice,
    contractAddress: {
      97: '',
      80085: '0x4C32048628D0d32d4D6c52662FB4A92747782B56', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.14467',
  },
  {
    sousId: 70,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.for,
    contractAddress: {
      97: '',
      80085: '0x47642101e8D8578C42765d7AbcFd0bA31868c523', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '2.8935',
  },
  {
    sousId: 69,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bux,
    contractAddress: {
      97: '',
      80085: '0x07F8217c68ed9b838b0b8B58C19c79bACE746e9A', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.5787',
  },
  {
    sousId: 68,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.nuls,
    contractAddress: {
      97: '',
      80085: '0x580DC9bB9260A922E3A4355b9119dB990F09410d', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0868',
  },
  {
    sousId: 67,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.belt,
    contractAddress: {
      97: '',
      80085: '0x6f0037d158eD1AeE395e1c12d21aE8583842F472', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00868',
    isFinished: true,
  },
  {
    sousId: 66,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ramp,
    contractAddress: {
      97: '',
      80085: '0x423382f989C6C289c8D441000e1045e231bd7d90', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4861',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 65,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bfi,
    contractAddress: {
      97: '',
      80085: '0x0A595623b58dFDe6eB468b613C11A7A8E84F09b9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0001157',
  },
  {
    sousId: 64,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dexe,
    contractAddress: {
      97: '',
      80085: '0x9E6dA246d369a41DC44673ce658966cAf487f7b2', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.009837',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 63,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bel,
    contractAddress: {
      97: '',
      80085: '0x2C0f449387b15793B9da27c2d945dBed83ab1B07', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0549',
  },
  {
    sousId: 62,
    stakingToken: serializedTokens.tpt,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      80085: '0x0c3D6892aa3b23811Af3bd1bbeA8b0740E8e4528', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0462',
    isFinished: true,
  },
  {
    sousId: 61,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.tpt,
    contractAddress: {
      97: '',
      80085: '0x75C91844c5383A68b7d3A427A44C32E3ba66Fe45', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3.616',
    isFinished: true,
  },
  {
    sousId: 60,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.watch,
    contractAddress: {
      97: '',
      80085: '0xC58954199E268505fa3D3Cb0A00b7207af8C2D1d', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.3472',
    isFinished: true,
  },
  {
    sousId: 59,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.xmark,
    contractAddress: {
      97: '',
      80085: '0xA5137e08C48167E363Be8Ec42A68f4F54330964E', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0413',
    isFinished: true,
  },
  {
    sousId: 58,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bmxx,
    contractAddress: {
      97: '',
      80085: '0x6F31B87f51654424Ce57E9F8243E27ed13846CDB', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00248',
    isFinished: true,
  },
  {
    sousId: 57,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.iotx,
    contractAddress: {
      97: '',
      80085: '0xCE54BA909d23B9d4BE0Ff0d84e5aE83F0ADD8D9a', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '6.365',
    isFinished: true,
  },
  {
    sousId: 56,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bor,
    contractAddress: {
      97: '',
      80085: '0x3e677dC00668d69c2A7724b9AFA7363e8A56994e', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.000395',
    isFinished: true,
  },
  {
    sousId: 55,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bopen,
    contractAddress: {
      97: '',
      80085: '0x5Ac8406498dC1921735d559CeC271bEd23B294A7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0723',
    isFinished: true,
  },
  {
    sousId: 54,
    stakingToken: serializedTokens.sushi,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      80085: '0xb69b6e390cba1F68442A886bC89E955048DAe7E3', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0367',
    isFinished: true,
  },
  {
    sousId: 53,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dodo,
    contractAddress: {
      97: '',
      80085: '0xae3001ddb18A6A57BEC2C19D71680437CA87bA1D', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0578',
    isFinished: true,
  },
  {
    sousId: 52,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.swingby,
    contractAddress: {
      97: '',
      80085: '0x02aa767e855b8e80506fb47176202aA58A95315a', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.13',
    isFinished: true,
  },
  {
    sousId: 51,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bry,
    contractAddress: {
      97: '',
      80085: '0x1c736F4FB20C7742Ee83a4099fE92abA61dFca41', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1157',
    isFinished: true,
  },
  {
    sousId: 50,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.zee,
    contractAddress: {
      97: '',
      80085: '0x02861B607a5E87daf3FD6ec19DFB715F1b371379', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1736',
    isFinished: true,
  },
  {
    sousId: 49,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.swgb,
    contractAddress: {
      97: '',
      80085: '0x73e4E8d010289267dEe3d1Fc48974B60363963CE', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.899',
    isFinished: true,
  },
  {
    sousId: 48,
    stakingToken: serializedTokens.comp,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      80085: '0xE0565fBb109A3f3f8097D8A9D931277bfd795072', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.055',
    isFinished: true,
  },
  {
    sousId: 47,
    stakingToken: serializedTokens.comp,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      80085: '0xc3693e3cbc3514d5d07EA5b27A721F184F617900', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.55',
    isFinished: true,
  },
  {
    sousId: 46,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.sfp,
    contractAddress: {
      97: '',
      80085: '0x2B02d43967765b18E31a9621da640588f3550EFD', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.6',
    isFinished: true,
  },
  {
    sousId: 45,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.lina,
    contractAddress: {
      97: '',
      80085: '0x212bb602418C399c29D52C55100fD6bBa12bea05', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.983',
    isFinished: true,
  },
  {
    sousId: 44,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.lina,
    contractAddress: {
      97: '',
      80085: '0x04aE8ca68A116278026fB721c06dCe709eD7013C', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0983',
    isFinished: true,
  },
  {
    sousId: 43,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.lit,
    contractAddress: {
      97: '',
      80085: '0x1714bAAE9DD4738CDEA07756427FA8d4F08D9479', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.231',
    isFinished: true,
  },
  {
    sousId: 42,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hget,
    contractAddress: {
      97: '',
      80085: '0xcCD0b93cC6ce3dC6dFaA9DB68f70e5C8455aC5bd', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0138',
    isFinished: true,
  },
  {
    sousId: 41,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bdo,
    contractAddress: {
      97: '',
      80085: '0x9cB24e9460351bC51d4066BC6AEd1F3809b02B78', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.075',
    isFinished: true,
  },
  {
    sousId: 40,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.egld,
    contractAddress: {
      97: '',
      80085: '0x2dcf4cDFf4Dd954683Fe0a6123077f8a025b66cF', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.001215',
    isFinished: true,
  },
  {
    sousId: 39,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ust,
    contractAddress: {
      97: '',
      80085: '0x6EFa207ACdE6e1caB77c1322CbdE9628929ba88F', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.1157',
    isFinished: true,
  },
  {
    sousId: 38,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.wsote,
    contractAddress: {
      97: '',
      80085: '0xD0b738eC507571176D40f28bd56a0120E375f73a', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.23',
    isFinished: true,
  },
  {
    sousId: 37,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.front,
    contractAddress: {
      97: '',
      80085: '0xf7a31366732F08E8e6B88519dC3E827e04616Fc9', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.2546',
    isFinished: true,
  },
  {
    sousId: 36,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.helmet,
    contractAddress: {
      97: '',
      80085: '0x9F23658D5f4CEd69282395089B0f8E4dB85C6e79', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.81',
    isFinished: true,
  },
  {
    sousId: 35,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.btcst,
    contractAddress: {
      97: '',
      80085: '0xB6fd2724cc9c90DD31DA35DbDf0300009dceF97d', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.011574',
    isFinished: true,
  },
  {
    sousId: 34,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bscx,
    contractAddress: {
      97: '',
      80085: '0x108BFE84Ca8BCe0741998cb0F60d313823cEC143', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.17361',
    isFinished: true,
  },
  {
    sousId: 33,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ten,
    contractAddress: {
      97: '',
      80085: '0x4A26b082B432B060B1b00A84eE4E823F04a6f69a', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.05787',
    isFinished: true,
  },
  {
    sousId: 32,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.balbt,
    contractAddress: {
      97: '',
      80085: '0x3cc08B7C6A31739CfEd9d8d38b484FDb245C79c8', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.4166',
    isFinished: true,
  },
  {
    sousId: 31,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.asr,
    contractAddress: {
      97: '',
      80085: '0xd18E1AEb349ef0a6727eCe54597D98D263e05CAB', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01',
    isFinished: true,
  },
  {
    sousId: 30,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.atm,
    contractAddress: {
      97: '',
      80085: '0x68C7d180bD8F7086D91E65A422c59514e4aFD638', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01',
    isFinished: true,
  },
  {
    sousId: 29,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.og,
    contractAddress: {
      97: '',
      80085: '0xbE65d7e42E05aD2c4ad28769dc9c5b4b6EAff2C7', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01',
    isFinished: true,
  },
  {
    sousId: 28,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.reef,
    contractAddress: {
      97: '',
      80085: '0x1500fa1afbfe4f4277ed0345cdf12b2c9ca7e139', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '115.74',
    isFinished: true,
  },
  {
    sousId: 27,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ditto,
    contractAddress: {
      97: '',
      80085: '0x624ef5C2C6080Af188AF96ee5B3160Bb28bb3E02', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.01157',
  },
  {
    sousId: 26,
    stakingToken: serializedTokens.twt,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      80085: '0x0554a5D083Abf2f056ae3F6029e1714B9A655174', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.248',
    isFinished: true,
  },
  {
    sousId: 24,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.juv,
    contractAddress: {
      97: '',
      80085: '0x543467B17cA5De50c8BF7285107A36785Ab57E56', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.02',
    isFinished: true,
  },
  {
    sousId: 25,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.psg,
    contractAddress: {
      97: '',
      80085: '0x65aFEAFaec49F23159e897EFBDCe19D94A86A1B6', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.02',
    isFinished: true,
  },
  {
    sousId: 21,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.vai,
    contractAddress: {
      97: '',
      80085: '0x1AD34D8d4D79ddE88c9B6b8490F8fC67831f2CAe', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.104',
    isFinished: true,
  },
  {
    sousId: 20,
    stakingToken: serializedTokens.bnb,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      80085: '0x555Ea72d7347E82C614C16f005fA91cAf06DCB5a', // TODO
    },
    poolCategory: PoolCategory.BINANCE,
    tokenPerBlock: '0.5',
    isFinished: true,
  },
  {
    sousId: 19,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.bnb,
    contractAddress: {
      97: '',
      80085: '0x326D754c64329aD7cb35744770D56D0E1f3B3124', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.0041',
    isFinished: true,
  },
  {
    sousId: 18,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.blink,
    contractAddress: {
      97: '',
      80085: '0x42Afc29b2dEa792974d1e9420696870f1Ca6d18b', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '23.14',
    isFinished: true,
  },
  {
    sousId: 17,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.blink,
    contractAddress: {
      97: '',
      80085: '0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '23.14',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 16,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.unfi,
    contractAddress: {
      97: '',
      80085: '0xFb1088Dae0f03C5123587d2babb3F307831E6367', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.02893',
    isFinished: true,
  },
  {
    sousId: 15,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.twt,
    contractAddress: {
      97: '',
      80085: '0x9c4EBADa591FFeC4124A7785CAbCfb7068fED2fb', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '5',
    isFinished: true,
  },
  {
    sousId: 14,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.hard,
    contractAddress: {
      97: '',
      80085: '0x90F995b9d46b32c4a1908A8c6D0122e392B3Be97', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.346',
    isFinished: true,
  },
  {
    sousId: 13,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.broobee,
    contractAddress: {
      97: '',
      80085: '0xdc8c45b7F3747Ca9CaAEB3fa5e0b5FCE9430646b', // TODO
    },
    poolCategory: PoolCategory.COMMUNITY,
    tokenPerBlock: '12.5',
    isFinished: true,
  },
  {
    sousId: 12,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.stax,
    contractAddress: {
      97: '',
      80085: '0xFF02241a2A1d2a7088A344309400E9fE74772815', // TODO
    },
    poolCategory: PoolCategory.COMMUNITY,
    tokenPerBlock: '0.2',
    isFinished: true,
  },
  {
    sousId: 11,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.nar,
    contractAddress: {
      97: '',
      80085: '0xDc938BA1967b06d666dA79A7B1E31a8697D1565E', // TODO
    },
    poolCategory: PoolCategory.COMMUNITY,
    tokenPerBlock: '1',
    isFinished: true,
  },
  {
    sousId: 10,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.nya,
    contractAddress: {
      97: '',
      80085: '0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9', // TODO
    },
    poolCategory: PoolCategory.COMMUNITY,
    tokenPerBlock: '10',
    isFinished: true,
  },
  {
    sousId: 9,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ctk,
    contractAddress: {
      97: '',
      80085: '0x21A9A53936E812Da06B7623802DEc9A1f94ED23a', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.5',
    isFinished: true,
  },
  {
    sousId: 8,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.twt,
    contractAddress: {
      97: '',
      80085: '0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '20',
    isFinished: true,
  },
  {
    sousId: 7,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.inj,
    contractAddress: {
      97: '',
      80085: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.25',
    isFinished: true,
  },
  {
    sousId: 248,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ccar,
    contractAddress: {
      97: '',
      80085: '0x9e31aef040941E67356519f44bcA07c5f82215e5', // TODO
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.6093',
  },
  {
    sousId: 262,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.ach,
    contractAddress: {
      97: '',
      80085: '0xD5668e936B951292Ddf8c84553CC58F85948F816', // TODO
    },
    poolCategory: PoolCategory.CORE,

    enableEmergencyWithdraw: true,
    tokenPerBlock: '7.502',
  },
].map((p) => ({ ...p, isFinished: true }))

export default [...livePools, ...finishedPools]
