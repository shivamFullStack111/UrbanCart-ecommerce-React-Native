import {
  widthPercentageToDP as wpp,
  heightPercentageToDP as hpp,
} from 'react-native-responsive-screen';

export const gray = {
  light: '#D3D3D3',
  gray: '#808080',
  dim: '#2F4F4F',
  most: '#36454F',
};

export const blue = '#74a2fc';

export function hp(num) {
  return hpp(num) || 1;
}
export function wp(num) {
  return wpp(num) || 1;
}
