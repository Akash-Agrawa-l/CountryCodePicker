import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import CountryCodePicker from './src/components/countryCodePicker';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const [data,setData] = React.useState({
    countryCode: '',
  })
  console.log(data)

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
        contentContainerStyle={{marginTop: 'auto',width: '100%',}}
        onSelect={(val)=>{
          setData({countryCode: val.country_code,})
        }}
      />
    </SafeAreaView>
  );
}
