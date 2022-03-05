import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,Dimensions
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import {Column as Col, Row} from 'react-native-flexbox-grid';

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
  radio:{
    width:'30px !important'
  }
})

const Details = ({ route, navigation }) => {
  const from = route?.params?.from

  const [arry,setArr] = useState([1,2,3,4,5,6,7,8,9])
  const [ans,setAns] = useState([2,1,4,3,2,3,1,4,2])
  const [count,setCount] = useState(0)

  const [questionLength,setQuestionLength] = useState(arry.length-1)
  const [finishText,setFinishText] = useState('Next')
  const [radioValue,setRadioValue] = useState('radio')

  const incress = () =>{
    console.log(questionLength)
    if(questionLength<count+2){
      setFinishText('Result')
    }
    if(questionLength>count){
      setCount(count+1)
    }else{
      console.log('susss')
    }
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{`Details (from ${from})`}</Text>
      <Text>{arry[count]}</Text>
      <Row size={12}>
        <Col sm={5} md={6} lg={2}>
          <Text>One</Text>
          <input
            type="radio"
            name="check"
            value='1'
            checked={radioValue === "1"}
          />
        </Col>
        <Col sm={4} md={6} lg={2}>
          <Text>Two</Text>
          <input
            type="radio"
            name="check"
            value='2'
            checked={radioValue === "2"}
          />
        </Col>
         <Col sm={3} md={6} lg={2}>
          <Text>Three</Text>
          <input
            type="radio"
            name="check"
            value='3'
            checked={radioValue === "3"}
          />
        </Col>
        <Col style = {styles.radio} sm={3} md={6} lg={2}>
          <Text>Three</Text>
          <input
            type="radio"
            name="check"
            value='4'
            checked={radioValue === "4"}
          />
        </Col>
      </Row>
      <Button
        title={finishText}
        color="white"
        backgroundColor={colors.pink}
        onPress={()=>{incress()}}
      />
      {
        arry.map((res)=>{
          return(
            <Text>{res}</Text>
          )
        })
      }
      <Button
        title="Go Back"
        color="white"
        backgroundColor={colors.pink}
        onPress={navigation.goBack}
      />
    </View>
  )
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Details
