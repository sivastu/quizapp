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
    alignItems: 'center',    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,

  },
  button:{
    width:150,
    marginTop:10,
    marginBottom:10
  }
})

const wi = Dimensions.get('window').width;
const hi = Dimensions.get('window').height;

const Exam = ({ route, navigation }) => {
  const from = route?.params?.from

  const examPress = () =>{
    navigation.navigate('Details', { from: 'Exam' })
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Exam</Text>
        <Button
          style = {styles.button}
          title="Exam 1"
          color="white"
          backgroundColor={colors.pink}
          onPress={()=>{examPress()}}
        />
        <Button
          style = {styles.button}
          title="Exam 2"
          color="white"
          backgroundColor={colors.pink}
          onPress={()=>{examPress()}}
        />
      <Button
        title="Go Back"
        color="white"
        backgroundColor={colors.pink}
        onPress={navigation.goBack}
      />
    </View>
  )
}

Exam.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Exam.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Exam
