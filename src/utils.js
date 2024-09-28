import {
  widthPercentageToDP as wpp,
  heightPercentageToDP as hpp,
} from 'react-native-responsive-screen';

export const gray = {
  light: '#D3D3D3',
  gray: '#808080',
  dim: '#2F4F4F',
  most: '#36454F',
  extraLight: '#F2F2F1',
};

export const blue = '#74a2fc';

export const manImage =
  'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D';

export function hp(num) {
  return hpp(num) || 1;
}
export function wp(num) {
  return wpp(num) || 1;
}
