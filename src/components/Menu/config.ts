import { MenuEntry } from '@pieswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://pieswap.org/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://pieswap.org/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://pieswap.org/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://pieswap.org/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://pieswap.org/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://pieswap.org/teams',
      },
      {
        label: 'Your Profile',
        href: 'https://pieswap.org/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pieswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pieswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pieswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pieswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://pieswap.org/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.pieswap.org',
      },
      {
        label: 'Github',
        href: 'https://github.com/paieswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pieswap.org',
      },
      {
        label: 'Blog',
        href: 'https://pieswap.medium.com',
      },
    ],
  },
]

export default config
