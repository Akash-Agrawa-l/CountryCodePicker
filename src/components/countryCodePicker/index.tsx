import {
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React from 'react';
import styles from './style';
import {countryDetailsProps, Props, renderItemProps} from './interface';
import {_handleData} from './functions';
import images from './images';
import ListCard from './listCard';

export default function CountryCodePicker(props: Props) {
  const {
    onSelect,
    isVisible,
    renderListItem,
    contentContainerStyle,
    onBackDropPress,
    showSearchBar = true,
    placeholder,
  } = props;

  const [searchText, setSearchText] = React.useState('');
  const listRef = React.useRef<any>(null);

  const _clear = () => {
    setSearchText('');
  };

  const _handleBackDrop = () => {
    setSearchText('');
    onBackDropPress();
  };

  const onPress=(data:countryDetailsProps)=>{
    _handleBackDrop();
      onSelect ? onSelect(data) : null;
  }

  const renderItem = ({item, index}: renderItemProps) => {
    if (renderListItem) {
      return renderListItem(item, index);
    } else {
      return (
        <ListCard data={item} onPress={onPress} />
      );
    }
  };

  const listHeader = () => {
    return (
      <View style={styles.headerContainerStyle}>
        <View style={styles.textInputContainerStyle}>
          <Image source={images.SEARCH_ICON} style={styles.searchIconStyle} />
          <TextInput
            placeholder={placeholder ? placeholder : 'Search...'}
            style={styles.textInputStyle}
            returnKeyType="search"
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
            }}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              style={styles.removeButton}
              activeOpacity={0.8}
              onPress={_clear}>
              <Image
                source={images.REMOVE_ICON}
                style={styles.crossIconStyle}
              />
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={styles.crossButton}
            activeOpacity={0.8}
            onPress={_handleBackDrop}>
            <Image source={images.CROSS_ICON} style={styles.crossIconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Modal visible={isVisible} animationType={'slide'} transparent>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalBackgroundStyle}
        onPress={_handleBackDrop}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.containerStyle, contentContainerStyle]}>
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
