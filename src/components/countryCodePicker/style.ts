import {StyleSheet,NativeModules, Platform} from 'react-native';
const { StatusBarManager } = NativeModules;

const styles = StyleSheet.create({
  containerStyle: {
    top: Platform.OS === 'ios' ? (StatusBarManager.HEIGHT * 2) : (StatusBarManager.HEIGHT * 1.2),
    padding: '4%',
    paddingTop: '3%',
    backgroundColor: 'white',
    width: '85%',
    alignSelf: 'center',
    aspectRatio: 1 / 1.7,
    borderRadius: 18,
    zIndex: 10,
    elevation: 10,
  },
  modalBackgroundStyle: {
    // justifyContent: 'center',
    height: '100%',
    backgroundColor: '#00000066',
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: '2.8%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  seperator: {
    height: '80%',
    borderRightWidth: 1,
    marginHorizontal: '2%',
    borderColor: '#77777766',
  },
  flagImageStyle: {
    width: '7%',
    aspectRatio: 1 / 1,
    marginRight: '2%',
    borderRadius: 15,
  },
  countryCodeStyle: {width: '15%', color: '#000000',},
  countryNameStyle: {width: '68%', color: '#000000',},
  headerContainerStyle: {
    paddingBottom: '3.5%',
    borderBottomWidth: 1,
    borderColor: '#77777733',
  },
  textInputContainerStyle: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#444444',
    paddingVertical: '1%',
    paddingHorizontal: '4.4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconStyle: {width: '6.5%', aspectRatio: 1/1,tintColor: '#808080',resizeMode: 'contain',},
  textInputStyle: {
    color: '#000000',
    paddingVertical: Platform.OS === 'ios' ? '2.3%' : 0,
    paddingHorizontal: '4.4%',
    width: '87.5%',
  },
  removeButton: {
    width: '5%', aspectRatio: 1/1,
    marginLeft: '-6%',
  },
  crossButton: {
    width: '5%', aspectRatio: 1/1,marginLeft: '3%',
  },
  crossIconStyle: {width: '100%',height: '100%',resizeMode: 'contain',},
  listContainerStyle: {height: '92%', flexDirection: 'row'},
});

export default styles;
