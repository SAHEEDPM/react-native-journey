import React from 'react'
import {View, Text, StyleSheet, ScrollView,} from 'react-native'

export default function ElevateCards(){
    return(
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>again</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>more..</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    headingText:{
        fontSize:28,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
    },
    cardElevated:{
        backgroundColor:'#cad5e2',
        elevation:44,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.4,
        shadowRadius:2,
    },

})