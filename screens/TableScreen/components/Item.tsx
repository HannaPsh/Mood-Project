
import React, { FC} from "react";
import * as S from "../styled"


type FlatListItem = {
    item:string,
    onPress(item:string):void
   }

const Item: FC<FlatListItem>  = ({item,onPress}) => {return (

    <S.ItemContainer onPress={onPress}>
      <S.Emotion >{item.toLocaleUpperCase()}</S.Emotion> 
    </S.ItemContainer>
  
  ) };  
export default Item  