import PersianDate from "persian-date";

const Utils = {
  methods : {
    getToday() {
      const date = Date.now();
      const today = new PersianDate(date).format("dddd DD MMMM YYYY");
      return today;
    },
    getTodayDate() {
      const date = Date.now();
      const today = new PersianDate(date).format("YYYY / MM / DD");
      return today;
    }
  }
}

export default Utils;