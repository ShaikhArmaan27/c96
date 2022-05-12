import {Component} from 'react'
import {Text,View} from 'react-native'

export default class FeedScreen extends Component{

    render(){
        return(
            <View style = {{flex:1,alignItem:"center",justifyContent:"center"}}>
                <Text>
                   Feed
                </Text>
            </View>
        )
    }
}