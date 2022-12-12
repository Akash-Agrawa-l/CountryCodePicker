import React from "react";
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface countryDetailsProps{
    name: string,
    country_code: string,
    code: string,
    image: string,
}

export interface Props{
    isVisible: boolean,
    onSelect?: (val: countryDetailsProps)=>void,
    renderListItem?: (item:countryDetailsProps,index: number,)=>React.ReactElement,
    contentContainerStyle?: StyleProp<ViewStyle>,
    onBackDropPress: ()=>void,
    showSearchBar?: boolean,
    flagImageStyle?: StyleProp<ImageStyle>,
    textStyle?: StyleProp<TextStyle>,
    placeholder: string,
}

export interface renderItemProps{
    item: countryDetailsProps,
    index: number,
}