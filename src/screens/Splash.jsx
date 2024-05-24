import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useColors } from '../utils/Colors'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

  const nav =useNavigation()

  useEffect(()=>{
   setTimeout(()=>{
      nav.replace("SelectCity")
   },3000) 
  },[])
  return (
    <View className='flex align-center' style={{flex:1, backgroundColor:useColors.primary,justifyContent:'center', alignItems: 'center', display: 'flex'}}>
      <Image
        style={{width: '70%', height: '100%', resizeMode: 'contain', }} 
        source={{
          uri : 'https://mir-s3-cdn-cf.behance.net/projects/404/d6c712183306905.Y3JvcCw5NjAsNzUwLDAsMTA5.png'
                  }}          />
    </View>
  )
}

export default Splash