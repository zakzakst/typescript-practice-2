export type weekItem = {
  id: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  en: string,
  enShort: string,
  jp: string,
}

export const WEEK_ITEMS: weekItem[] = [
  {
    id: 0,
    en: 'Sunday',
    enShort: 'Sun.',
    jp: '日',
  },
  {
    id: 1,
    en: 'Monday',
    enShort: 'Mon.',
    jp: '月',
  },
  {
    id: 2,
    en: 'Tuesday',
    enShort: 'Tue.',
    jp: '火',
  },
  {
    id: 3,
    en: 'Wednesday',
    enShort: 'Wed.',
    jp: '水',
  },
  {
    id: 4,
    en: 'Thursday',
    enShort: 'Thu.',
    jp: '木',
  },
  {
    id: 5,
    en: 'Friday',
    enShort: 'Fri.',
    jp: '金',
  },
  {
    id: 6,
    en: 'Saturday',
    enShort: 'Sat.',
    jp: '土',
  },
]