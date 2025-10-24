import React from 'react'
import {Text, View,StyleSheet, Image,ScrollView} from 'react-native'

export default function FancyCards(){
    return(
    <ScrollView style={styles.container}>
            <Text style={styles.headingText}>FancyCards</Text>
         <View style={[styles.card,styles.cardElevated]}>
                <Image source={{uri:'https://image.cnbcfm.com/api/v1/image/106316032-1577766478082gettyimages-891304114.jpeg?v=1577766598&w=1920&h=1080'}}
                style={styles.cardImage}/>
             <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Vietnam </Text>
              <Text style={styles.cardLabel}>Vietnam rice terraces</Text>
              <Text style={styles.cardDescription}>Vietnam is renowned for its stunning rice terraces, particularly in the northern regions, where breathtaking landscapes and rich cultural heritage come together.</Text>
              <Text style={styles.cardFooter}>12 minutes away</Text>
            </View>
        </View>
            
   </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
paddingBottom:50,
    },
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        marginVertical:6,
    },
    card:{
        width:360,
        height:370,
        marginHorizontal:15,
        borderRadius:6,
    },
    cardElevated:{
        backgroundColor:'#ffffff',
        elevation:3,
        shadowOffset:{
            height:1,
            width:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.2,
    },
    cardImage:{
        height:200, 
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        overflow:'hidden',
    },
    cardBody:{
        flex:1,
        flexGrow:1,
     paddingHorizontal:12,
    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        color:'#000000',
        marginBottom:4,
    },
    cardLabel:{
        color:'#000000',
        fontSize:14,
        marginBottom:6,
    },
    cardDescription:{
        color:'#000000',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
    },
    cardFooter:{
        color:'#000000',
    },
})