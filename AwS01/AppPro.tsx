import React  from 'react'
import {View, Text, useColorScheme, StyleSheet} from 'react-native'

function AppPro(): JSX.Element{

const isDarkMode = useColorScheme() === 'dark'
    return( <View style={styles.container}>
    <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Welcome Back</Text>
    </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
                 flex:1,
                 alignItems:'center',
                 justifyContent:'center', 
        },
        whiteText:{
            color:'#ffffff'
        },
        darkText:{
            color:'#000000'
        }
    }
);

export default AppPro;