import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React from 'react';
import styles from './style';
import {Props, renderItemProps} from './interface';
import {_handleData} from './functions';
import images from './images';

export default function CountryCodePicker(props: Props) {
  const {
    onSelect,
    isVisible,
    renderListItem,
    contentContainerStyle,
    onBackDropPress,
    showSearchBar = true,
    flagImageStyle,
    textStyle,
    placeholder
  } = props;

  const [searchText, setSearchText] = React.useState('');
  const listRef = React.useRef<any>(null);

  const _handleBackDrop = () => {
    setSearchText('');
    onBackDropPress();
  };

  const renderItem = ({item, index}: renderItemProps) => {
    if (renderListItem) {
      return renderListItem(item, index);
    } else {
      return (
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.listItem}
          onPress={() => (onSelect ? onSelect(item) : null)}>
          <Image
            source={{uri: item.image}}
            style={[styles.flagImageStyle, flagImageStyle]}
          />
          <Text style={[styles.countryCodeStyle, textStyle]}>
            {item.country_code}
          </Text>
          <View style={styles.seperator} />
          <Text numberOfLines={3} style={[styles.countryNameStyle, textStyle]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const listHeader = () => {
    return (
      <View style={styles.headerContainerStyle}>
        <View style={styles.textInputContainerStyle} >
          <Image source={images.SEARCH_ICON} style={styles.searchIconStyle} />
        <TextInput
          placeholder={placeholder ? placeholder : "Search..."}
          style={styles.textInputStyle}
          returnKeyType="search"
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
        <TouchableOpacity style={styles.crossButton} activeOpacity={0.8} onPress={_handleBackDrop} >
          <Image source={images.CROSS_ICON} style={styles.crossIconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Modal visible={isVisible} transparent>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalBackgroundStyle}
        onPress={_handleBackDrop}
      >
        <TouchableOpacity activeOpacity={1} style={[styles.containerStyle, contentContainerStyle]}>
          {showSearchBar ? listHeader() : null}
          <View style={styles.listContainerStyle}>
            <FlatList
              ref={listRef}
              data={_handleData(searchText)}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps={'handled'}
              maxToRenderPerBatch={20}
              windowSize={5}
              />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}
