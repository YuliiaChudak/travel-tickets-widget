import { convertDateToViewFormat } from '../date';

describe('Date helper', () => {
  describe('convertDateToViewFormat', () => {
    const dates = [
      '2021-06-22T11:00:00+00:00',
      'Tue Jun 22 2021 13:00:00 GMT+0200 (Central European Summer Time)',
      '2021-06-22',
      '2021-06-22T11:00:00.000Z',
      'Tue, 22 Jun 2021 11:00:00 GMT',
    ];

    dates.forEach((date: string) => {
      it(`correctly convert ${date} date`, () => {
        const format = convertDateToViewFormat(date);

        expect(format.dayNumber).toEqual('22');
        expect(format.monthName).toEqual('Jun');
        expect(format.year).toEqual('2021');
        expect(format.weekDay).toEqual('Tue');
      });
    });
  });
});
