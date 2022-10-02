export const getWeekday = (date) =>
  date.toLocaleString('default', {
    weekday: 'long',
  });

export const getDateString = (date) => date.toLocaleDateString();

export const isEmpty = (data) => {
  if (data === undefined) return true;

  switch (typeof data) {
    case 'object':
      return data.isArray ? data.length === 0 : Object.keys(data).length === 0;

    case 'number':
      return data === 0;

    case 'string':
      return data === '';

    default:
      return false;
  }
};

export const getTime = (date) =>
  date.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });

export const getDailyDetails = (weather) => {
  if (isEmpty(weather)) return;

  return [
    {
      detail: <bdi>{Math.round(weather.day.maxwind_kph)} קמ"ש</bdi>,
      text: 'מהירות הרוח',
    },
    { detail: weather.day.avghumidity + '%', text: 'לחות' },
    { detail: weather.day.uv, text: 'אינדקס קרינה' },
  ];
};

export const getDailyIcon = (weather) => {
  if (isEmpty(weather)) return;

  return weather.day.condition.icon;
};

export const getDailyTemp = (weather) => {
  if (isEmpty(weather)) return;

  return weather.day.avgtemp_c;
};

export const getHourlyIcon = (weather) => {
  if (isEmpty(weather)) return;

  return weather.condition.icon;
};

export const getHourlyDetails = (weather) => {
  if (isEmpty(weather)) return;

  return [
    {
      detail: Math.round(weather.temp_c) + '°',
      text: `טמפ' ממוצעת`,
    },
    {
      detail: <bdi>{Math.round(weather.wind_kph)} קמ"ש</bdi>,
      text: 'מהירות הרוח',
    },
    { detail: weather.humidity + '%', text: 'לחות' },
    { detail: weather.uv, text: 'אינדקס קרינה' },
    { detail: Math.round(weather.feelslike_c) + '°', text: 'מרגיש כמו' },
  ];
};

// export const getAstroDetails = (weather) => {
//   return {
//     astro: {
//       sunrise: '06:34 AM',
//       sunset: '06:25 PM',
//       moonrise: '12:14 PM',
//       moonset: '10:10 PM',
//       moon_phase: 'Waxing Crescent',
//       moon_illumination: '36',
//     },
//   };
// };
