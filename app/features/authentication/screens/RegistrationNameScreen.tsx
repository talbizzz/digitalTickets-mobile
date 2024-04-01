import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {getLoggedIn} from '../../../store/slices/AppSlice';

export const RegistrationNameScreen = () => {
  const loggedIn = useSelector(getLoggedIn);

  console.log('loggedIn', loggedIn);
  return (
    <View style={styles.container}>
      <Text>RegistrationNameScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
