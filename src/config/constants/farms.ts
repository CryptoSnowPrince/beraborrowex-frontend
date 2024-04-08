import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const BERABORROWEX_BNB_LP_MAINNET = '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'POLLEN',
    lpAddresses: {
      97: '0x005f7bE7C9C9Ae25028fa2aBCEb729b562dd564d',
      80085: '0x005f7bE7C9C9Ae25028fa2aBCEb729b562dd564d', // TODO
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 251,
    lpSymbol: 'POLLEN-BERA LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      80085: BERABORROWEX_BNB_LP_MAINNET, // TODO
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    v1pid: 252,
    lpSymbol: 'BUSD-BERA LP',
    lpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      80085: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // TODO
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
  {
    pid: 114,
    lpSymbol: 'stkBNB-BERA LP',
    lpAddresses: {
      80085: '0xaA2527ff1893e0D40d4a454623d362B79E8bb7F1', // TODO
      97: '',
    },
    token: serializedTokens.stkbnb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 113,
    lpSymbol: 'PSTAKE-BUSD LP',
    lpAddresses: {
      80085: '0x009C58e79779982eB53a9941F9F4a2269d093566', // TODO
      97: '',
    },
    token: serializedTokens.pstake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 112,
    lpSymbol: 'PEEL-BUSD LP',
    lpAddresses: {
      80085: '0x25bfD3162360BbD8FF97b86169288b311c2A68D7', // TODO
      97: '',
    },
    token: serializedTokens.peel,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 110,
    lpSymbol: 'SHELL-BUSD LP',
    lpAddresses: {
      80085: '0x02D75D7beebF6D5228A3Fa5f810CedF2BEa5aB1E', // TODO
      97: '',
    },
    token: serializedTokens.shell,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 106,
    lpSymbol: 'MHUNT-BERA LP',
    lpAddresses: {
      80085: '0x58aED290F42963A502626774Bd8fa03f33c9B71f', // TODO
      97: '',
    },
    token: serializedTokens.mhunt,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
    auctionHostingStartSeconds: 1659603600,
  },
  {
    pid: 111,
    lpSymbol: 'AOG-POLLEN LP',
    lpAddresses: {
      80085: '0xF8cA29a3BF6d34691981D3Ee8D4c9Cd1C437EfeE', // TODO
      97: '',
    },
    token: serializedTokens.aog,
    quoteToken: serializedTokens.cake,
    isCommunity: true,
    auctionHostingStartSeconds: 1659603600,
  },
  {
    pid: 94,
    v1pid: 525,
    lpSymbol: 'WZRD-BUSD LP',
    lpAddresses: {
      80085: '0xee456d906a38e10680c9d157FFf143390e9681bA', // TODO
      97: '',
    },
    token: serializedTokens.wzrd,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
    auctionHostingStartSeconds: 1659603600,
  },
  {
    pid: 73,
    v1pid: 491,
    lpSymbol: 'HIGH-BUSD LP',
    lpAddresses: {
      80085: '0xe98ac95A1dB2fCaaa9c7D4ba7ecfCE4877ca2bEa', // TODO
      97: '',
    },
    token: serializedTokens.high,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 38,
    v1pid: 386,
    lpSymbol: 'HOTCROSS-BERA LP',
    lpAddresses: {
      80085: '0xf23bad605e94de0e3b60c9718a43a94a5af43915', // TODO
      97: '',
    },
    token: serializedTokens.hotcross,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 109,
    lpSymbol: 'XCAD-BUSD LP',
    lpAddresses: {
      80085: '0x07C10ecFb0e1CF81E3e05ddb693Cc114C8EBe498', // TODO
      97: '',
    },
    token: serializedTokens.xcad,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 108,
    lpSymbol: 'OLE-BUSD LP',
    lpAddresses: {
      80085: '0xe9F369298565B60a0DC19A6fA93cEE934Fd1A58c', // TODO
      97: '',
    },
    token: serializedTokens.ole,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 107,
    lpSymbol: 'TRIVIA-BERA LP',
    lpAddresses: {
      80085: '0xEF642c40EebBc964881dD7Bd1A0b50e90441E73A', // TODO
      97: '',
    },
    token: serializedTokens.trivia,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 105,
    lpSymbol: 'SDAO-BUSD LP',
    lpAddresses: {
      80085: '0x3d12E4381901a6b94438758B90881cB03F10b01E', // TODO
      97: '',
    },
    token: serializedTokens.sdao,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 104,
    lpSymbol: 'NBT-USDT LP',
    lpAddresses: {
      97: '',
      80085: '0x401AbD5327542c25baD057614935BfD98186a8a1', // TODO
    },
    token: serializedTokens.nbt,
    quoteToken: serializedTokens.usdt,
    isCommunity: true,
  },
  {
    pid: 103,
    lpSymbol: 'BBT-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x3D5A3E3824da092851026fCda3D8a0B7438c4573', // TODO
    },
    token: serializedTokens.bbt,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 102,
    lpSymbol: 'PEAK-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x41140a1650372Fb8cb2f71e335448ab8cfc1c4f3', // TODO
    },
    token: serializedTokens.peak,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 93,
    v1pid: 524,
    lpSymbol: 'HAPPY-BERA',
    lpAddresses: {
      97: '',
      80085: '0x008604A38cD589680F7B8f085DC2D5B4F81151dB', // TODO
    },
    token: serializedTokens.happy,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 40,
    v1pid: 390,
    lpSymbol: 'CHR-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x6045931e511ef7e53a4a817f971e0ca28c758809', // TODO
    },
    token: serializedTokens.chr,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 96,
    lpSymbol: '8PAY-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x92c3E2cddDb0CE886bCA864151BD4d611A86E563', // TODO
    },
    token: serializedTokens['8pay'],
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 101,
    lpSymbol: 'MIX-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x7618fdAb208aE23690dadD3aa4a42a442313d24E', // TODO
    },
    token: serializedTokens.MIX,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 100,
    lpSymbol: 'METIS-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x69AFe59e88614501c3fDEb7480f12DBA0A414032', // TODO
    },
    token: serializedTokens.metis,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 99,
    lpSymbol: 'XCN-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xF01eD80d46759c0cf6A3e9c66856017d81284962', // TODO
    },
    token: serializedTokens.xcn,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 98,
    lpSymbol: 'GAL-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xbe6A4f74fdDc88853612C50D7404E059b37692D8', // TODO
    },
    token: serializedTokens.gal,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 97,
    lpSymbol: 'RPG-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x55cdb14855220b239Cf857A03849D96736b9103f', // TODO
    },
    token: serializedTokens.rpg,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 95,
    lpSymbol: 'aBNBc-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x272c2CF847A49215A3A1D4bFf8760E503A06f880', // TODO
    },
    token: serializedTokens.abnbc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 92,
    v1pid: 523,
    lpSymbol: 'CEEK-BERA',
    lpAddresses: {
      97: '',
      80085: '0x046A9B3A9b743340eE2Bc4C6dDD35543E237C6c2', // TODO
    },
    token: serializedTokens.ceek,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 91,
    v1pid: 522,
    lpSymbol: 'TINC-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x0d5b9A0f4315a4bcE36D1Ea7d6B6d3123167aFAa', // TODO
    },
    token: serializedTokens.tinc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 90,
    v1pid: 520,
    lpSymbol: 'PEX-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x5ca96E8bDe0Bc587DaC9e02422Fd205b1102DAa4', // TODO
    },
    token: serializedTokens.pex,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 89,
    v1pid: 519,
    lpSymbol: 'GMI-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x58d4B61983Ca0aFE6E352e90719F403E24e016F4', // TODO
    },
    token: serializedTokens.gmi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 88,
    v1pid: 518,
    lpSymbol: 'FROYO-POLLEN LP',
    lpAddresses: {
      97: '',
      80085: '0x1CCc3cC95c8148477Afd18a552f03835Be9D182a', // TODO
    },
    token: serializedTokens.froyo,
    quoteToken: serializedTokens.cake,
  },
  {
    pid: 87,
    v1pid: 516,
    lpSymbol: 'BSW-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x8ca3ff14a52b080c54a6d1a405eeca02959d39fe', // TODO
    },
    token: serializedTokens.bsw,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 86,
    v1pid: 515,
    lpSymbol: 'DUET-POLLEN LP',
    lpAddresses: {
      97: '',
      80085: '0xbDF0aA1D1985Caa357A6aC6661D838DA8691c569', // TODO
    },
    token: serializedTokens.duet,
    quoteToken: serializedTokens.cake,
  },
  {
    pid: 85,
    v1pid: 514,
    lpSymbol: 'GMT-USDC LP',
    lpAddresses: {
      97: '',
      80085: '0x007EC643C7Cc33a70C083fC305c283dd009C8b94', // TODO
    },
    token: serializedTokens.gmt,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 84,
    v1pid: 513,
    lpSymbol: 'ERA-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x53a63ac301d6410915385294527f947aff616599', // TODO
    },
    token: serializedTokens.era,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 83,
    v1pid: 510,
    lpSymbol: 'BTT-BUSD',
    lpAddresses: {
      97: '',
      80085: '0xB7E73DaEe6A6Ca37A21f8E4bfba4DA448DFE4d92', // TODO
    },
    token: serializedTokens.btt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 82,
    v1pid: 509,
    lpSymbol: 'ACH-USDT',
    lpAddresses: {
      97: '',
      80085: '0x28BDb16b623176426305a70D8B475bE73Aca71f3', // TODO
    },
    token: serializedTokens.ach,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 81,
    v1pid: 507,
    lpSymbol: 'RACA-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x8e744ec2795c8b836689d1b4ebe1489204357dac', // TODO
    },
    token: serializedTokens.raca,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 80,
    v1pid: 506,
    lpSymbol: 'ERTHA-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x70531B39E2Bb4d8dA59E2Ce41a98eBA2990F8497', // TODO
    },
    token: serializedTokens.ertha,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 79,
    v1pid: 505,
    lpSymbol: 'FUSE-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x6483F166b9E4310A165a55FEa04F867499aded06', // TODO
    },
    token: serializedTokens.fuse,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 78,
    v1pid: 503,
    lpSymbol: 'FROYO-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x1Ce76390Dd210B9C9ae28373FDf79714206ECb73', // TODO
    },
    token: serializedTokens.froyo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 77,
    v1pid: 502,
    lpSymbol: 'APX-BUSD',
    lpAddresses: {
      97: '',
      80085: '0xa0ee789a8f581cb92dd9742ed0b5d54a0916976c', // TODO
    },
    token: serializedTokens.apx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 76,
    v1pid: 501,
    lpSymbol: 'BCOIN-BERA',
    lpAddresses: {
      97: '',
      80085: '0x2Eebe0C34da9ba65521E98CBaA7D97496d05f489', // TODO
    },
    token: serializedTokens.bcoin,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 75,
    v1pid: 497,
    lpSymbol: 'AOG-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x88c9bf5E334e2591C6A866D5E20683E31226Be3d', // TODO
    },
    token: serializedTokens.aog,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 74,
    v1pid: 495,
    lpSymbol: 'WOOP-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x2AE94A6C768D59f5DDc25bd7f12C7cBE1D51dc04', // TODO
    },
    token: serializedTokens.woop,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 72,
    v1pid: 489,
    lpSymbol: 'DPT-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x141e9558f66Cc21c93628400cCa7d830c15c2c24', // TODO
    },
    token: serializedTokens.dpt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 71,
    v1pid: 488,
    lpSymbol: 'THG-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x486697ae24469cB1122F537924Aa46E705B142Aa', // TODO
    },
    token: serializedTokens.thg,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 70,
    v1pid: 484,
    lpSymbol: 'IDIA-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x71E6de81381eFE0Aa98f56b3B43eB3727D640715', // TODO
    },
    token: serializedTokens.idia,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 69,
    v1pid: 481,
    lpSymbol: 'SANTOS-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x06043B346450BbCfdE066ebc39fdc264FdFFeD74', // TODO
    },
    token: serializedTokens.santos,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 68,
    v1pid: 476,
    lpSymbol: 'QI-BERA',
    lpAddresses: {
      97: '',
      80085: '0xf924E642f05ACC57fc3b14990c2B1a137683b201', // TODO
    },
    token: serializedTokens.qi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 67,
    v1pid: 474,
    lpSymbol: 'PORTO-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x0A292e96ABb35297786a38fDD67Dc4f82689E670', // TODO
    },
    token: serializedTokens.porto,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 66,
    v1pid: 472,
    lpSymbol: 'XWG-USDC LP',
    lpAddresses: {
      97: '',
      80085: '0x936928146a21AfCcd30DfA84824A780572B1630B', // TODO
    },
    token: serializedTokens.xwg,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 65,
    v1pid: 471,
    lpSymbol: 'DAR-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x062f88E2B4896e823ac78Ac314468c29eEC4186d', // TODO
    },
    token: serializedTokens.dar,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 64,
    v1pid: 470,
    lpSymbol: 'FINA-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x6dB23b5360c9D2859fDcbf41c56494e7b8573649', // TODO
    },
    token: serializedTokens.fina,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 63,
    v1pid: 466,
    lpSymbol: 'DKT-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x365c3F921b2915a480308D0b1C04aEF7B99c2876', // TODO
    },
    token: serializedTokens.dkt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 62,
    v1pid: 464,
    lpSymbol: 'LAZIO-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x11c0b2bb4fbb430825d07507a9e24e4c32f7704d', // TODO
    },
    token: serializedTokens.lazio,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 61,
    v1pid: 461,
    lpSymbol: 'BETA-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x88a02d94f437799f06f8c256ff07aa397e6d0016', // TODO
    },
    token: serializedTokens.beta,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 60,
    v1pid: 457,
    lpSymbol: 'NFT-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x0ecc84c9629317a494f12bc56aa2522475bf32e8', // TODO
    },
    token: serializedTokens.nft,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 59,
    v1pid: 450,
    lpSymbol: 'SFUND-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x74fA517715C4ec65EF01d55ad5335f90dce7CC87', // TODO
    },
    token: serializedTokens.sfund,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 58,
    v1pid: 449,
    lpSymbol: 'BP-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x2bF2dEB40639201C9A94c9e33b4852D9AEa5fd2D', // TODO
    },
    token: serializedTokens.bp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 57,
    v1pid: 448,
    lpSymbol: 'RUSD-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x59FaC9e98479fc9979aE2a0C7422Af50bCBB9B26', // TODO
    },
    token: serializedTokens.rusd,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 56,
    v1pid: 442,
    lpSymbol: 'TRX-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0xb5d108578be3750209d1b3a8f45ffee8c5a75146', // TODO
    },
    token: serializedTokens.trx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 55,
    v1pid: 441,
    lpSymbol: 'WIN-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x6a445ceb72c8b1751755386c3990055ff92e14a0', // TODO
    },
    token: serializedTokens.win,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 54,
    v1pid: 432,
    lpSymbol: 'SPS-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xfdfde3af740a22648b9dd66d05698e5095940850', // TODO
    },
    token: serializedTokens.sps,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 53,
    v1pid: 431,
    lpSymbol: 'C98-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x92247860A03F48d5c6425c7CA35CDcFCB1013AA1', // TODO
    },
    token: serializedTokens.c98,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 52,
    v1pid: 430,
    lpSymbol: 'AXS-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xC2d00De94795e60FB76Bc37d899170996cBdA436', // TODO
    },
    token: serializedTokens.axs,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 51,
    v1pid: 429,
    lpSymbol: 'CHESS-USDC LP',
    lpAddresses: {
      97: '',
      80085: '0x1472976e0b97f5b2fc93f1fff14e2b5c4447b64f', // TODO
    },
    token: serializedTokens.chess,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 50,
    v1pid: 427,
    lpSymbol: 'ONE-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x9d2296e2fe3cdbf2eb3e3e2ca8811bafa42eedff', // TODO
    },
    token: serializedTokens.harmony,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 49,
    v1pid: 425,
    lpSymbol: 'DVI-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x89ebf9cd99864f6e51bd7a578965922029cab977', // TODO
    },
    token: serializedTokens.dvi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 48,
    v1pid: 423,
    lpSymbol: 'USDC-USDT LP',
    lpAddresses: {
      97: '',
      80085: '0xec6557348085aa57c72514d67070dc863c0a5a8c', // TODO
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 47,
    v1pid: 422,
    lpSymbol: 'POLLEN-USDT LP',
    lpAddresses: {
      97: '',
      80085: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b', // TODO
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 46,
    v1pid: 421,
    lpSymbol: 'BSCPAD-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xba01662e978de7d67f8ffc937726215eb8995d17', // TODO
    },
    token: serializedTokens.bscpad,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 45,
    v1pid: 414,
    lpSymbol: 'WOO-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x89eE0491CE55d2f7472A97602a95426216167189', // TODO
    },
    token: serializedTokens.woo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 44,
    v1pid: 409,
    lpSymbol: 'ETH-USDC LP',
    lpAddresses: {
      97: '',
      80085: '0xEa26B78255Df2bBC31C1eBf60010D78670185bD0', // TODO
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 43,
    v1pid: 408,
    lpSymbol: 'BTCB-ETH LP',
    lpAddresses: {
      97: '',
      80085: '0xD171B26E4484402de70e3Ea256bE5A2630d7e88D', // TODO
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 42,
    v1pid: 405,
    lpSymbol: 'MBOX-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x8FA59693458289914dB0097F5F366d771B7a7C3F', // TODO
    },
    token: serializedTokens.mbox,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 41,
    v1pid: 397,
    lpSymbol: 'TUSD-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x2e28b9b74d6d99d4697e913b82b41ef1cac51c6c', // TODO
    },
    token: serializedTokens.tusd,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 39,
    v1pid: 389,
    lpSymbol: 'POLLEN-BUSD LP',
    lpAddresses: {
      97: '0x25293964dcaFd8a6cDf97AFF8b6559FD4A5Af864',
      80085: '0x804678fa97d91B974ec2af3c843270886528a9E6', // TODO
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 37,
    v1pid: 376,
    lpSymbol: 'DOGE-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xac109c8025f272414fd9e2faa805a583708a017f', // TODO
    },
    token: serializedTokens.doge,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 36,
    v1pid: 365,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0xf45cd219aef8618a92baa7ad848364a158a24f33', // TODO
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 35,
    v1pid: 362,
    lpSymbol: 'ALPACA-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x7752e1fa9f3a2e860856458517008558deb989e3', // TODO
    },
    token: serializedTokens.alpaca,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 34,
    v1pid: 352,
    lpSymbol: 'TLM-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xE6b421a4408c82381b226Ab5B6F8C4b639044359', // TODO
    },
    token: serializedTokens.tlm,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 33,
    v1pid: 350,
    lpSymbol: 'EPS-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xddE420cbB3794ebD8FFC3Ac69F9c78e5d1411870', // TODO
    },
    token: serializedTokens.eps,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 32,
    v1pid: 346,
    lpSymbol: 'TKO-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xFFd4B200d3C77A0B691B5562D804b3bd54294e6e', // TODO
    },
    token: serializedTokens.tko,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 31,
    v1pid: 326,
    lpSymbol: 'BIFI-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x3f1A9f3D9aaD8bD339eD4853F345d2eF89fbfE0c', // TODO
    },
    token: serializedTokens.bifi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 30,
    v1pid: 322,
    lpSymbol: 'ALICE-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xcAD7019D6d84a3294b0494aEF02e73BD0f2572Eb', // TODO
    },
    token: serializedTokens.alice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 29,
    v1pid: 318,
    lpSymbol: 'BELT-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xF3Bc6FC080ffCC30d93dF48BFA2aA14b869554bb', // TODO
    },
    token: serializedTokens.belt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 28,
    v1pid: 317,
    lpSymbol: 'RAMP-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0xE834bf723f5bDff34a5D1129F3c31Ea4787Bc76a', // TODO
    },
    token: serializedTokens.ramp,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 27,
    v1pid: 309,
    lpSymbol: 'IOTX-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0xc13aA76AAc067c86aE38028019F414D731b3D86A', // TODO
    },
    token: serializedTokens.iotx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 26,
    v1pid: 306,
    lpSymbol: 'SUSHI-ETH LP',
    lpAddresses: {
      97: '',
      80085: '0x16aFc4F2Ad82986bbE2a4525601F8199AB9c832D', // TODO
    },
    token: serializedTokens.sushi,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 25,
    v1pid: 299,
    lpSymbol: 'SFP-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x942b294e59a8c47a0F7F20DF105B082710F7C305', // TODO
    },
    token: serializedTokens.sfp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 24,
    v1pid: 298,
    lpSymbol: 'LINA-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0xC5768c5371568Cf1114cddD52CAeD163A42626Ed', // TODO
    },
    token: serializedTokens.lina,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 23,
    v1pid: 293,
    lpSymbol: 'UST-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x05faf555522Fa3F93959F86B41A3808666093210', // TODO
    },
    token: serializedTokens.ust,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 22,
    v1pid: 285,
    lpSymbol: 'BTCST-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xB2678C414ebC63c9CC6d1a0fC45f43E249B50fdE', // TODO
    },
    token: serializedTokens.btcst,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 21,
    v1pid: 284,
    lpSymbol: 'LTC-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x71b01eBdDD797c8E9E0b003ea2f4FD207fBF46cC', // TODO
    },
    token: serializedTokens.ltc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 20,
    v1pid: 283,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1', // TODO
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 19,
    v1pid: 282,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489', // TODO
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 18,
    v1pid: 276,
    lpSymbol: 'VAI-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x133ee93FE93320e1182923E1a640912eDE17C90C', // TODO
    },
    token: serializedTokens.vai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 17,
    v1pid: 268,
    lpSymbol: 'SXP-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xD8E2F8b6Db204c405543953Ef6359912FE3A88d6', // TODO
    },
    token: serializedTokens.sxp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 16,
    v1pid: 270,
    lpSymbol: 'INJ-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x1BdCebcA3b93af70b58C41272AEa2231754B23ca', // TODO
    },
    token: serializedTokens.inj,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 15,
    v1pid: 268,
    lpSymbol: 'UNI-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x014608E87AF97a054C9a49f81E1473076D51d9a3', // TODO
    },
    token: serializedTokens.uni,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 14,
    v1pid: 265,
    lpSymbol: 'XRP-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x03F18135c44C64ebFdCBad8297fe5bDafdBbdd86', // TODO
    },
    token: serializedTokens.xrp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 13,
    v1pid: 264,
    lpSymbol: 'USDT-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE', // TODO
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 12,
    v1pid: 263,
    lpSymbol: 'ALPHA-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xACF47CBEaab5c8A6Ee99263cfE43995f89fB3206', // TODO
    },
    token: serializedTokens.alpha,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 11,
    v1pid: 262,
    lpSymbol: 'BTCB-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082', // TODO
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 10,
    v1pid: 261,
    lpSymbol: 'ETH-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc', // TODO
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 9,
    v1pid: 260,
    lpSymbol: 'XVS-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2', // TODO
    },
    token: serializedTokens.xvs,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 8,
    v1pid: 259,
    lpSymbol: 'TWT-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x3DcB1787a95D2ea0Eb7d00887704EeBF0D79bb13', // TODO
    },
    token: serializedTokens.twt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 7,
    v1pid: 258,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      80085: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00', // TODO
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 6,
    v1pid: 257,
    lpSymbol: 'LINK-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe', // TODO
    },
    token: serializedTokens.link,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5,
    v1pid: 255,
    lpSymbol: 'DOT-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF', // TODO
    },
    token: serializedTokens.dot,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4,
    v1pid: 253,
    lpSymbol: 'ADA-BERA LP',
    lpAddresses: {
      97: '',
      80085: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F', // TODO
    },
    token: serializedTokens.ada,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms
