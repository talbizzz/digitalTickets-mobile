import {View, Text, StyleSheet} from 'react-native';

export const RegistrationNameScreen = () => {
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
