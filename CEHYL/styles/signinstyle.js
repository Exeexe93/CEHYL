import {StyleSheet} from 'react-native';
import {MyTheme} from '../theme/maintheme';

export const styles = StyleSheet.create({
  textInput: {
    backgroundColor: MyTheme.colors.background,
    textAlign: 'center',
    borderColor: MyTheme.colors.card,
    borderWidth: 2,
    borderRadius: 15,
    width: '80%',
    marginTop: 10,
    color: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    marginTop: 10,
    backgroundColor: MyTheme.colors.card,
    width: '40%',
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: MyTheme.colors.text,
  },
});