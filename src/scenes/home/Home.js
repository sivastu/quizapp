import React,{useState,useEffect} from 'react'
import {StyleSheet, TextInput,Text, View,
  Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import { colors } from 'theme'

const wi = Dimensions.get('window').width;
const hi = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input:{
    height: 40,
    width:wi-150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:20
  },
  error:{
    color:'red'
  }
})

const Home = ({ navigation }) =>{
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')

  const [verifyuserName,setVerifyUserName] = useState(false)
  const [verifyPassword,setVerifPassword] = useState(false)

  useEffect(()=>{
    setUserName('')
    setPassword('')
    setVerifyUserName(false)

  },[])

  const logins=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userName)){
      setVerifyUserName(true)
      return
    }else{
      setVerifyUserName(false)
      navigation.navigate('Exam', { from: 'Home' })
    }
    console.log('worked')
  }
 return(
  <View style={styles.root}>
    <View>
      <Text style={styles.title}>Login</Text>
      {verifyuserName?
      <Text style={styles.error}>Type Email Correctly</Text>
      :
      <Text style={styles.error}></Text>
      }
      <Text>User Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName} />
          <Text style={styles.error}>Enter Valid Password</Text>
          <Text>Password</Text>
          <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password} />
        <Button
          title="Go to Details"
          color="white"
          backgroundColor='red'
          onPress={() => {
           logins()
          }}
        />
    </View>
  </View>
)}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home



// <Row size={12}>
//       <Col sm={5} md={6} lg={3}>
//         <Text>Dat</Text>
//         <Text>Payment</Text>
//       </Col>
//       <Col sm={4} md={6} lg={3}>
//         <Text>Rubee</Text>
//       </Col>
//        <Col sm={3} md={6} lg={3}>
//         <Text >Status</Text>
//       </Col>
//     </Row>

    // <Button
    //   title="Go to Details"
    //   color="white"
    //   backgroundColor={colors.lightPurple}
    //   onPress={() => {
    //     navigation.navigate('Details', { from: 'Home' })
    //   }}
    // />