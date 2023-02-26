import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC,useState } from "react";
import { Text, View, Image,Modal, Pressable, FlatList, ScrollView} from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import colors from "../../constants/colors";
import * as S from "./styled"
import { addEmotion } from "../../redux/slices/userSlice";
import Item from "./components/Item";
import Title from "./components/Title";
import BackgroundAnimation from "../../Components/AnimationBAckground/Animation";

type Props = {onPress(): void };
type Content = {emotion:string,description:string };



const TableScreen: FC<Props> = ({onPress}) => {
  const dispatch = useDispatch();

  const store = useSelector((state) => state);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<Content|null>(null);
 console.log(store)



const Страх = [  { emotion: 'ужас', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book. '},  { emotion: 'отчаяние', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'испуг', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'обеспечение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'подозрение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer' },  { emotion: 'тревога', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'ошарашенность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'беспокойство', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'боязнь', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'унижение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when a specimen book.' },  { emotion: 'замешательство', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'растерянности', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'вина/стыд', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'сомнение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'застенчивость', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'опасение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'смущение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'сломленность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'подвох', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'надменность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'ошеломленность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }]
const Гнев = [  { emotion: 'ужас', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book. '},  { emotion: 'отчаяние', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'испуг', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'обеспечение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'подозрение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer' },  { emotion: 'тревога', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'ошарашенность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'беспокойство', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'боязнь', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'унижение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when a specimen book.' },  { emotion: 'замешательство', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'растерянности', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'вина/стыд', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'сомнение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'застенчивость', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'опасение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'смущение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'сломленность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'подвох', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'надменность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'ошеломленность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }]
const Грусть = [  { emotion: 'горечь', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'тоска', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'скорбь', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'лень', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'жалость', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'отрешенность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'отчаяние', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'беспомощность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'душевная боль', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'безнадежность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'отчуждение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'разочарование', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'потрясение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'сожаление', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'скука', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'безысходность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'печаль', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'загнанность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }]

const handleOnPress=(emotion:string,description:string)=>{
  setModalVisible(true)
setModalContent({emotion, description}) 
 
}


return (
    <View  style={{
        flex:1,
      }} >
          {BackgroundAnimation()}
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
            <S.Title>{modalContent?.emotion.toLocaleUpperCase()}</S.Title>
          
            
            <S.Description>{modalContent?.description}</S.Description>
            <Pressable style={{alignSelf:"flex-end"}}><Text style={{color:colors.secondary}}>Read more</Text></Pressable>
         <View style={{flexDirection:"row", width:"100%",justifyContent:"space-between"}}><Text style={{alignSelf:"center"}}>Feeling like this today? Add this</Text>
           <Pressable onPress={ ()=>dispatch(addEmotion("new emotion"))}><MaterialCommunityIcons
            name="plus-circle"
            color={colors.primary}
            size={40}
          /></Pressable></View> 
       
          </S.ModalView>
        </S.CenteredView>
      </Modal>
      <ScrollView>
      <Title title="Гнев" color={colors.grey} />
   
          <FlatList
        data={Гнев}
        renderItem={({item}) => <Item item={item.emotion} onPress={()=>handleOnPress(item.emotion, item.description)} />}
        keyExtractor={item => item.emotion}
      />

<Title title="Страх" color={colors.primary}/>
<FlatList
        data={Страх}
        renderItem={({item}) => <Item item={item.emotion} onPress={()=>handleOnPress(item.emotion, item.description)} />}
        keyExtractor={item => item.emotion}
      />
      <Title title="Грусть" color={colors.secondary}  />
      <FlatList
        data={Грусть }
        renderItem={({item}) => <Item item={item.emotion} onPress={()=>handleOnPress(item.emotion, item.description)} />}
        keyExtractor={item => item.emotion}
      /></ScrollView>
     {/*  <Image   source={require("../../assets/Brain2.png")}
        style={{
          width: "100%",
          height: 50,
          alignSelf:"flex-start",
          
        
        }}/> */}
      </View>
  );
};




export default TableScreen;