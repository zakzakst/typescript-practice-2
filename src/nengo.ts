import { NENGO_ITEMS, nengoItem } from './nengoItems'

export class NengoUtil {
  static getNengo(
    year: number,
    month: number = 1,
    day: number = 1
  ): nengoItem | null {
    let result = null;
    NENGO_ITEMS.forEach((item) => {
      // 年号の開始日
      const startTime = new Date(
        item.start.year,
        item.start.month,
        item.start.day,
      ).getTime();
      // 年号の終了日
      const endTime = item.end
        ? new Date(
            item.end.year,
            item.end.month,
            item.end.day,
          ).getTime()
        : null;
      // 対象の日
      const targetTime = new Date(
        year,
        month,
        day,
      ).getTime();
      
      if (
        (endTime && (startTime <= targetTime) && (targetTime < endTime)) ||
        (!endTime && (startTime <= targetTime))
      ) {
        result = item;
      }
    });
    return result;
  }
}