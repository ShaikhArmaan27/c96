import {Component} from 'react'
import {Text,View} from 'react-native'

export default class Profile extends Component{

    render(){
        return(
            <View style = {{flex:1,alignItem:"center",justifyContent:"center"}}>
                <Text>
                    Profile
                </Text>
            </View>
        )
    }
}