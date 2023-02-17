import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC,useState } from "react";
import { Text, View, Image, StyleSheet, SectionList, Modal, Alert, Pressable} from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import colors from "../../constants/colors";
import * as S from "./styled"

type Props = {onPress(): void };
type FlatListItem = {
 item:string,
 onPress(item:string):void
}

const TableScreen: FC<Props> = ({onPress}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
 


const DATA = [
  {
    title: 'Гнев',
    data: ["бешенство", "ярость", "ненависть", "истерия", "злость", "раздражение", "презрение","негодование", "обида", "ревность", 
      "уязвлённость", "досада", "зависть", "неприязнь", "возмущение", "отвращение" ],
  },
  {
    title: 'Страх',
    data: [  "ужас",  "отчаяние",  "испуг",  "обеспечение",  "подозрение",  "тревога",  "ошарашенность",  "беспокойство",  "боязнь",  "унижение",  "замешательство",  "растерянности",  "вина/стыд",  "сомнение",  "застенчивость",  "опасение",  "смущение",  "сломленность",  "подвох",  "надменность",  "ошеломленность"]
    ,
  },
  {
    title: 'Грусть',
    data: [  "горечь",  "тоска",  "скорбь",  "лень",  "жалость",  "отрешенность",  "отчаяние",  "беспомощность",  "душевная боль",  "безнадежность",  "отчуждение",  "разочарование",  "потрясение",  "сожаление",  "скука",  "безысходность",  "печаль",  "загнанность"]
    ,
  },
];

const handleOnPress=(item:string)=>{
  setModalVisible(true)
/*   setModalContent(item)
  console.log(item) */
}

const Item: FC<FlatListItem>  = ({item,onPress}) => (
  <S.ItemContainer onPress={onPress}>
    <S.Emotion >{item}</S.Emotion> 
  </S.ItemContainer>
);  

return (
    <View  style={{
        flex:1,
        justifyContent:"space-between"
      
      }} >
         <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <S.CenteredView>
          <S.ModalView>
          <S.CloseModal
              onPress={() => setModalVisible(!modalVisible)}>
               <MaterialCommunityIcons
            name="close"
            color={colors.primary}
            size={20}
          />
            </S.CloseModal>
            <S.ModalContent>
            <Text>Hello World!</Text>
          
            <MaterialCommunityIcons
            name="plus-circle"
            color={colors.primary}
            size={40}
          /></S.ModalContent>
          </S.ModalView>
        </S.CenteredView>
      </Modal>
       <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <Item item={item} onPress={(item)=>handleOnPress(item)}/>
      )}
      renderSectionHeader={({section: {title}}) => (
      <S.CategoryContainer><S.Category>{title}</S.Category></S.CategoryContainer>  
      )}
    />
      <Image   source={require("../../assets/Brain2.png")}
        style={{
          width: 200,
          height: 200,
          alignSelf:"flex-start"
        
        }}/>
      </View>
  );
};

const styles = StyleSheet.create({


});


export default TableScreen;