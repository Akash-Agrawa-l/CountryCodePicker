import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import CountryCodePicker from './src/components/countryCodePicker';

export default function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}>
        <Text>App</Text>
      </TouchableOpacity>
      
      <CountryCodePicker
        isVisible={visible}
        onBackDropPress={function (): void {
          setVisible(false);
        }}
      />
    </SafeAreaView>
  );
}
