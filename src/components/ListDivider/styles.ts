import { theme } from './../../global/styles/theme';
import { StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container:{
      width: '78%',
      height: 1,
      backgroundColor: theme.colors.secondary40,
      marginTop: 2,
      marginVertical: 31,
      alignSelf: 'flex-end'
    },
})