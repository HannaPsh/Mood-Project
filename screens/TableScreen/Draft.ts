/* Section list: handleOnPress is being called as soon as the modal shows up is because you're setting the modalContent state in the handleOnPress function, which is being called when the Item component is pressed. This causes the Modal component to update with the new content and become visible. */



const DATA = [
    {
      title: 'Гнев',
      data: [  { emotion: 'ужас', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book. '},  { emotion: 'отчаяние', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'испуг', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'обеспечение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'подозрение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer' },  { emotion: 'тревога', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'ошарашенность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'беспокойство', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'боязнь', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'унижение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when a specimen book.' },  { emotion: 'замешательство', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'растерянности', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'вина/стыд', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'сомнение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'застенчивость', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'опасение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'смущение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'сломленность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'подвох', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'надменность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'ошеломленность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }]
      ,
    },
    {
      title: 'Страх',
      data: [  { emotion: 'ужас', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'отчаяние', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'испуг', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'обеспечение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'подозрение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'тревога', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'ошарашенность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'беспокойство', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'боязнь', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'унижение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'замешательство', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'растерянности', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'вина/стыд', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'сомнение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'застенчивость', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'опасение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'смущение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'сломленность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'подвох', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'надменность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'ошеломленность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }]
  
      ,
    },
    {
      title: 'Грусть',
      data: [  { emotion: 'горечь', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'тоска', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'скорбь', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'лень', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'жалость', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'отрешенность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'отчаяние', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'беспомощность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'душевная боль', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'безнадежность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'отчуждение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'разочарование', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'потрясение', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'сожаление', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'скука', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'безысходность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'печаль', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },  { emotion: 'загнанность', description: 'Lorem Ispum  is industry Lorem Ipsum has been the when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }]
  
      ,
    },
  ];
/*   <SectionList
  sections={DATA}
  keyExtractor={(item, index) => item + index}
  renderItem={({item}) => (
    <Item item={item.emotion} onPress={()=>handleOnPress(item.emotion, item.description)}/>
  )}
  renderSectionHeader={({section: {title}}) => (
  <S.CategoryContainer><S.Category>{title}</S.Category></S.CategoryContainer>  
  )}
/> */



/*                                            Modal                                        */

/*          <Modal
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
            <Pressable style={{alignSelf:"flex-end"}} onPress={()=>console.log("see more pressed")}><Text style={{color:colors.secondary}}>Read more</Text></Pressable>
         <View style={{flexDirection:"row", width:"100%",justifyContent:"space-between"}}><Text style={{alignSelf:"center"}}>Feeling like this today? Add this</Text>
           <Pressable onPress={ ()=>dispatch(addEmotion("new emotion"))}><MaterialCommunityIcons
            name="plus-circle"
            color={colors.primary}
            size={40}
          /></Pressable></View> 
       
          </S.ModalView>
        </S.CenteredView>
      </Modal> */





      /* 
      
      const history = [
  {
    date: ISODate("2023-01-01T00:00:00Z"),
    anger: [],
    love: [],
    sadness: [],
    fear:[],
    happiness:[]
  },
   {
    date: ISODate("2023-01-01T00:00:00Z"),
    anger: [],
    love: [],
    sadness: [],
    fear:[],
    happiness:[]
  }
   {
    date: ISODate("2023-01-01T00:00:00Z"),
    anger: string[],
    love: string[],
    sadness: string[],
    fear: string[],
    happiness:string[]
  }

type History = {
  date: Date,
    anger: string[],
    love: string[],
    sadness: string[],
    fear: string[],
    happiness:string[]
}

type User = {
userName:string,
email:string,
password:string,
lang:string,
history:History[]


  }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      */