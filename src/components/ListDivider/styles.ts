import { theme } from './../../global/styles/theme';
import { StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container:{
      width: '80%',
      height: 1,
      backgroundColor: theme.colors.secondary40,
      marginVertical: 21,
      alignSelf: 'flex-end'
    },
})