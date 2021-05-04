import React, {useEffect, useState} from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { firebase } from '../../firebase'

const MessageField = ({ message }) => {
    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldText}>{message}</Text>
        {/* <Text style={styles.field}>{value}</Text> */}
      </View>
    )
  }
  
  
const RenderMessages = (messages) => {
    return (
      <ScrollView>
        {Object.values(messages)[0].map((message) => (
          <MessageField message={message} />
        ))}
      </ScrollView>
    )
  }

  

// View message screen
const ViewMessageScreen = ({ navigation }) => {


    const [messages, setMessages] = useState([])


    useEffect(() => {
        const db = firebase.database().ref('nonprofits/evanston-church/messages')
        const handleData = (snap) => {
          if (snap.val()) {
            const val = snap.val()
            const messageList = Object.values(val)
            setMessages(messageList)
            console.log(messageList)
          }
        }
        db.on('value', handleData, (error) => console.log(error))
        return () => db.off('value', handleData)
      }, [])

  return (
    <View style={styles.container}>
     
      <View>
            <RenderMessages messages={messages}></RenderMessages>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
    // justifyContent: 'center',
  },

  userContainer: {
    flex: 1,
    alignItems: 'center',
  },
  fieldContainer: {
      borderWidth: 1,
      borderRadius: 5,
      padding: 15,
      margin: 5,
  },
  fieldText: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  roleButton: {
    backgroundColor: '#2196F3',
    fontSize: 16,
    margin: 15,
    width: 250,
    padding: 15,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'ghostwhite',
    textAlign: 'center',
  },
})

export default ViewMessageScreen
