import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {listCardProps} from './interface'
import styles from './style'

const ListCard = ({
    data,
    textStyle,
    flagImageStyle,
    onPress,
}:listCardProps) => {
  return (
    <TouchableOpacity
    activeOpacity={0.9}
    style={styles.listItem}
    onPress={() => {
      onPress ? onPress(data) : null
    }}>
    <Image
      source={{uri: data.image}}
      style={[styles.flagImageStyle, flagImageStyle]}
    />
    <Text style={[styles.countryCodeStyle, textStyle]}>
      {data.country_code}
    </Text>
    <View style={styles.seperator} />
    <Text numberOfLines={3} style={[styles.countryNameStyle, textStyle]}>
      {data.name}
    </Text>
  </TouchableOpacity>
  )
}

export default ListCard