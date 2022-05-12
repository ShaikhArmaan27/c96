import {Component} from 'react'
import {Text,View} from 'react-native'

export default class CreateNews extends Component{
    constructor(props) {
        super(props);
        this.state = {
          title:'',
          description:'',
          preview_images:'image'
        };
      }

    addNews=()=>{
        if(this.state.title && this.state.description ){
            let newsData ={
              preview_images:this.state.previewImage,
              title:this.state.title,
              description:this.state.description,
            }

        }
          else{
            Alert.alert("Error","All fields are required"),[{ text: "OK", onPress: () => console.log("OK Pressed") }], { cancelable: false }
          }
    }

    render(){
        return(
            <View style = {{flex:1,alignItem:"center",justifyContent:"center"}}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style = {styles.appTitleTextContainer}>
                    <Text style = {styles.appTitleText}>
                        Create News
                    </Text>
                </View>
                <View style={styles.fieldsContainer}>
                    <TextInput
                        style={styles.inputFont}
                        onChangeText={title => this.setState({ title })}
                        placeholder={"Title"}
                        placeholderTextColor={"black"}
                    />
                    <TextInput
                        style={[
                        styles.inputFont,
                        ]}
                        onChangeText={description => this.setState({ description })}
                        placeholder={"Description"}
                        multiline={true}
                        numberOfLines={4}
                        placeholderTextColor={"black"}
                    />
                </View>
                <View style={{justifyContent:"center",alignItems:"center",marginTop:RFValue(20)}}>
                   <TouchableOpacity style={{backgroundColor:"white"}} onPress={()=>this.addNews()}>
                        <Text style={styles.inputFont}>
                            Submit
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles=Stylesheet.create({

    container: {
        flex: 1,
        backgroundColor: "#15193c"
      },
      droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },
      appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
      },
      appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans"
      },
      fieldsContainer: {
        flex: 0.85
      },
      inputFont: {
        height: RFValue(40),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white",
        fontFamily: "Bubblegum-Sans"
      },

})

