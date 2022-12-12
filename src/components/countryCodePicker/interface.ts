import React from "react";
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface countryDetailsProps{
    name: string,
    code: string,
    image: string,
    country_code: string,
}

export interface Props{
    isVisible: boolean,
    placeholder?: string,
    showSearchBar?: boolean,
    onBackDropPress: ()=>void,
    textStyle?: StyleProp<TextStyle>,
    flagImageStyle?: StyleProp<ImageStyle>,
    onSelect?: (val: countryDetailsProps)=>void,
    contentContainerStyle?: StyleProp<ViewStyle>,
    renderListItem?: (item:countryDetailsProps,index: number,)=>React.ReactElement,
}

export interface renderItemProps{
    item: countryDetailsProps,
    index: number,
}