export const APP_TITLE = 'התחזית של נתן';
// export const APP_LOGO = 'https://cdn.weatherapi.com/weather/64x64/day/116.png';

export const ERROR_PAGE_NAVBAR_COLOR = '#d9165d';
export const DEFAULT_PAGE_NAVBAR_COLOR = '#4da6eb';

export const INITIAL_DAYS_TO_SHOW = 5;
export const MAX_DAYS_AMOUNT = 7;
export const MIN_DAYS_AMOUNT = 1;

export const INITIAL_CITY = 'Haifa';

export const ERROR_MESSAGE_TITLE = 'שגיאה בקבלת מזג האוויר';
export const ERROR_MESSAGE_DEFAULT_TEXT = 'מצטערים, אין לנו מידע על העיר ';
export const getErrorMessageForCity = (city) => (
  <bdi>
    {ERROR_MESSAGE_DEFAULT_TEXT} {city}
  </bdi>
);
