import { MONTH_ITEMS, monthItem } from './monthItems'
import { WEEK_ITEMS, weekItem } from './weekItems'
import { NengoUtil } from './nengo'
import { nengoItem } from './nengoItems'

type yearItem = {
  num: number,
  str: string,
  strShort: string,
}

type dayItem = {
  num: number,
  str: string,
  en: string,
}

class DateFormat {
  date: Date;
  year: yearItem;
  month: monthItem;
  day: dayItem;
  week: weekItem;
  nengo: nengoItem;

  constructor(date: Date) {
    this.date = date;
    this.setYear();
    this.setMonth();
    this.setDate();
    this.setWeek();
    this.setNengo();
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
    let dayEn: string;
    switch (targetDay) {
      case 1:
        dayEn = targetDay + 'st';
        break;
      case 2:
        dayEn = targetDay + 'nd';
        break;
      case 3:
        dayEn = targetDay + 'rd';
        break;
      default:
        dayEn = targetDay + 'th';
    }
    this.day = {
      num: targetDay,
      str: dayStr,
      en: dayEn,
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

  /**
   * 年号に関する値を設定
   */
  setNengo(): void {
    this.nengo = NengoUtil.getNengo(
      this.year.num,
      this.month.num,
      this.day.num,
    );
  }

  /**
   * 日付表記（日本語）を取得
   */
  getDateTextJp(): string {
    return `${this.nengo.nengo}${this.year.num - this.nengo.start.year + 1}年${this.month.num}月${this.day.num}日（${this.week.jp}）`;
  }

  /**
   * 日付表記（英語）を取得
   */
  getDateTextEn(): string {
    return `${this.day.en} ${this.month.en}, ${this.year.num}`;
  }

  /**
   * 日付表記（数字）を取得
   */
  getDateTextNum(separator: string = '/'): string {
    return [this.year.num, this.month.num, this.day.num].join(separator);
  }

  print(): void {
    const result = this.getDateTextNum('.');
    console.log(result);
  }
}

const today = new Date();
const todayFormat = new DateFormat(today);
todayFormat.print();