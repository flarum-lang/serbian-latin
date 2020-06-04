// Custom Serbian Moment.js Locales
// Based on: https://github.com/moment/moment/blob/develop/locale/fr.js
// Thanks to: https://github.com/qiaeru

moment.locale('sr', {
  months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split(
    '_'
  ),
  monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split(
    '_'
  ),
  monthsParseExact: true,
  weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
  weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
  weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm',
  },
  calendar: {
    sameDay: '[Danas u] LT',
    nextDay: '[Sutra u] LT',
    nextWeek: 'dddd [u] LT',
    lastDay: '[Juče u] LT',
    lastWeek: 'dddd [prošle nedelje] LT',
    sameElse: 'L',
  },
  relativeTime: {
    future: 'za %s',
    past: 'pre %s',
    s: 'nekoliko sekundi',
    ss: '%d sekundi',
    m: 'minut',
    mm: '%d minuta',
    h: 'sat vremena',
    hh: '%d sati',
    d: 'jedan dan',
    dd: '%d dana',
    M: 'mesec dana',
    MM: '%d meseci',
    y: 'godinu dana',
    yy: '%d godina',
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4, // The week that contains Jan 4th is the first week of the year.
  },
});
