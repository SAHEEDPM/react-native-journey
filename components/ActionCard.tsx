import React from 'react'
import {Text, View, Button, Image,StyleSheet, Linking, Pressable} from 'react-native'

export default function ActionCard(){
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
    return(
        <View>
            <Text style={styles.headingText}>Action Card</Text>
            <View style={[styles.card,styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.header}>KYA BOLTE PUBLIC</Text>
                </View>
                    <Image source={{uri: 'https://th.bing.com/th/id/OIP.6nWVXVemjj3a1TGiUDN2AwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',}}
                    style={styles.cardImage}/>
                <View style={styles.cardBody}>
                        <Text numberOfLines={3}>A concert, often known informally as a gig or show, is a live performance of music in front of an audience.[1] The performance may be carried by a single musician, in which case it is sometimes called a recital, or by a</Text>
                </View>  
                <View style={styles.cardFooter}>
                    <Pressable onPress={() => openWebsite('https://en.wikipedia.org/wiki/Concert')}>
                        <Text style={styles.flow}>Read More</Text>
                    </Pressable>
                    <Pressable onPress={() =>openWebsite('https://linkedin.com/')}>
                    <Text style={styles.flow}>Social</Text>
                    </Pressable>
                </View>              
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{ 
        width:350,
        height:360,
        marginHorizontal:16,
        marginVertical:12,
        borderRadius:4,
    },
    elevatedCard:{
         backgroundColor:'#e07c24',
         elevation:3,
         shadowOffset:{
          width:1,
          height:1,
         },
         shadowColor:'#333',
         shadowOpacity:0.4,
     },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
     },
    header:{
        color:'#000',
        fontSize:16,
        fontWeight:600,
     },
    cardImage:{
        height:190,
        resizeMode:'stretch',
    },
    cardBody:{ 
       padding:10,
    },
    cardFooter:{ 
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    flow:{
        fontSize:16,
        color:'#000',
        backgroundColor:'#fff',
        paddingVertical:4,
        paddingHorizontal:12,
        borderRadius:4,
    },
})