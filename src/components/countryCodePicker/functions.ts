import {countryCodes} from './json';
import {countryDetailsProps} from './interface';

export const _handleData = (data: string) => {
  let newData = countryCodes.filter((item: countryDetailsProps) => {
    return (
      item.name.toLowerCase().includes(data.toLowerCase()) ||
      item.country_code.includes(data)
    );
  });
  newData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return newData;
};
