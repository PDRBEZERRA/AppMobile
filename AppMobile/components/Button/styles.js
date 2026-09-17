import { StyleSheet } from 'react-native';

export const colors = {
  navy: '#14284A',
  blue: '#1E63D8',
  white: '#FFFFFF',
  gray: '#6B7280',
  lightGray: '#F0F2F5',
};

export default StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.blue,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
  buttonTextOutline: {
    color: colors.blue,
  },
});
