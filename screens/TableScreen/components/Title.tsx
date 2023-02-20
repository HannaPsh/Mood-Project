import React, { FC} from "react";
import { Text, View, Image, StyleSheet, SectionList, Modal, Alert, Pressable, FlatList} from "react-native";
import * as S from "../styled"


type Title= {
    title:string
    color:string
   }

const Title: FC<Title>  = ({title,color}) => {
    return(
<S.CategoryContainer color={color}>
  <S.Title>{title}</S.Title></S.CategoryContainer>
  
  )};  
export default Title 