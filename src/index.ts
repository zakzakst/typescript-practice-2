import { MONTH_ITEMS, monthItem } from './monthItems'
import { WEEK_ITEMS, weekItem } from './weekItems'
import { NengoUtil } from './nengo'

type yearItem = {
  num: number,
  str: string,
  strShort: string,
}

type dayItem = {
  num: number,
  str: string,
}

class DateFormat {
  date: Date;
  year: yearItem;
  month: monthItem;
  day: dayItem;
  week: weekItem;

  constructor(date: Date) {
    this.date = date;
    this.setYear();
    this.setMonth();
    this.setDate();
    this.setWeek();
  }

  /**
   * 年に関する値を設定
   */
  setYear(): void {
    const targetYear = this.date.getFullYear();
    const yearStr = ('0000' + targetYear).slice(-4);
    const yearStrShort = yearStr.slice(-2);
    this.year = {
      num: targetYear,
      str: yearStr,
      strShort: yearStrShort,
    }
  }

  /**
   * 月に関する値を設定
   */
  setMonth(): void {
    const targetMonth= this.date.getMonth() + 1;
    this.month = MONTH_ITEMS.find((item) => {
      return item.num == targetMonth;
    });
  }

  /**
   * 日に関する値を設定
   */
  setDate(): void {
    const targetDay = this.date.getDate();
    const dayStr = ('00' + targetDay).slice(-2);
    this.day = {
      num: targetDay,
      str: dayStr,
    };
  }

  /**
   * 曜日に関する値を設定
   */
  setWeek(): void {
    const targetWeek= this.date.getDay();
    this.week = WEEK_ITEMS.find((item) => {
      return item.id == targetWeek;
    });
  }

  print(): void {
    const result = NengoUtil.getNengo(this.year.num);
    console.log(result);
  }
}

const today = new Date();
const todayFormat = new DateFormat(today);
todayFormat.print();