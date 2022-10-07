// http://www.kumamotokokufu-h.ed.jp/kumamoto/bungaku/nengoui.html

export type nengoItem = {
  age: string,
  nengo: string,
  kana: string,
  start: {
    year: number,
    month: number,
    day: number,
  },
  end?: {
    year: number,
    month: number,
    day: number,
  },
}

export const NENGO_ITEMS: nengoItem[] = [
  // {
  //   age: '',
  //   nengo: '',
  //   kana: '',
  //   start: {
  //     year: ,
  //     month: ,
  //     day: ,
  //   },
  //   end: {
  //     year: ,
  //     month: ,
  //     day: ,
  //   },
  // },
  {
    age: '明治',
    nengo: '明治',
    kana: 'めいじ',
    start: {
      year: 1868,
      month: 9,
      day: 8,
    },
    end: {
      year: 1912,
      month: 7,
      day: 29,
    },
  },
  {
    age: '大正',
    nengo: '大正',
    kana: 'たいしょう',
    start: {
      year: 1912,
      month: 7,
      day: 30,
    },
    end: {
      year: 1926,
      month: 12,
      day: 24,
    },
  },
  {
    age: '昭和',
    nengo: '昭和',
    kana: 'しょうわ',
    start: {
      year: 1926,
      month: 12,
      day: 25,
    },
    end: {
      year: 1989,
      month: 1,
      day: 7,
    },
  },
  {
    age: '平成',
    nengo: '平成',
    kana: 'へいせい',
    start: {
      year: 1989,
      month: 1,
      day: 8,
    },
    end: {
      year: 2019,
      month: 4,
      day: 30,
    },
  },
  {
    age: '令和',
    nengo: '令和',
    kana: 'れいわ',
    start: {
      year: 2019,
      month: 5,
      day: 1,
    },
  },
]

export class NengoUtil {
  static getNengo(year: number, month: number = 1, day: number = 1): void {
    NENGO_ITEMS.forEach((item) => {
      if (item.start.year === year) {
        // 年が同じ場合、月の判定
        if (item.start.month === month) {
          // 月が同じ場合、日の判定
          if (item.start.day) {}
        }
      }
    });
    console.log(year, month, day);
    console.log(NENGO_ITEMS);
  }
}