import { NENGO_ITEMS, nengoItem } from './nengoItems'

export class NengoUtil {
  static getNengo(year: number, month: number = 1, day: number = 1): nengoItem {
    NENGO_ITEMS.forEach((item) => {
      if (item.start.year === year) {
        // 年が同じ場合、月の判定
        if (item.start.month === month) {
          // 月が同じ場合、日の判定
          if (item.start.day) {}
        }
      }
    });
    // console.log(year, month, day);
    // console.log(NENGO_ITEMS);
    return NENGO_ITEMS[0];
  }
}