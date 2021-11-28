import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export default {
  colors: {
    neutral: {
      very_dark_blue: '#1d2025',
      dark_grayish_blue: '#68707d',
      grayish_blue: ' #b6bcc8',
      light_grayish_blue: '#f7f8fd',
      white: '#fff',
      black: '#000',
    },
    primary: {
      orange: '#ff7d1a',
      pale_orange: '#ffede0',
    },
  },

  fonts: {
    regular: 'KhumbSansRegular',
    bold: 'KhumbSansBold',
  },
  responsive: {
    value: RFValue,
    percentage: RFPercentage,
  },
};
