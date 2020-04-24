import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import Switch from 'react-native-switch'



const App = () => {
  const [checked, setChecked] = useState(false)
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
      <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 15}}>react-native-switch</Text>
        <View style={styles.wrapperViewStyle}>

          <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>Regular</Text>

            <Switch
              isOn={checked}
              onChange={setChecked}
            />

          </View>

          <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>Reversed</Text>

            <Switch
              isOn={checked}
              onChange={setChecked}
              reversed
            />

          </View>

          <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>Disable On</Text>

            <Switch
              isOn={true}
              onChange={setChecked}
              disable
            />

          </View>

          <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>Disable Off</Text>

            <Switch
              isOn={false}
              onChange={setChecked}
              disable
            />

          </View>

        </View>

        <View style={styles.wrapperViewStyle}>

          <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>Vertical</Text>

            <Switch
              isOn={checked}
              onChange={setChecked}
              vertical
              trackWidth={25}
              trackHeight={50}
            />

          </View>

          <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>Vertical Reversed</Text>

            <Switch
              isOn={checked}
              onChange={setChecked}
              reversed
              vertical
              trackWidth={25}
              trackHeight={50}
              trackOnColor="blue"
            />

          </View>

          <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>With Text</Text>

            <Switch
              isOn={checked}
              onChange={setChecked}
              trackWidth={80}
              text={checked ? "On" : "Off"}
              textStyle={{color: checked ? 'white' : 'black'}}
            />

          </View>

          <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>Vertical With Text</Text>

            <Switch
              isOn={checked}
              onChange={setChecked}
              text={checked ? "On" : "Off"}
              textStyle={{color: checked ? 'white' : 'black'}}
              vertical
              trackWidth={25}
              trackHeight={80}
            />

          </View>

        </View>

        <View style={styles.wrapperViewStyle}>

          <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>Custom</Text>

            <Switch
              isOn={checked}
              onChange={setChecked}
              trackStyle={{borderRadius: 0}}
              trackWidth={50}
              trackHeight={40}
              curserHeight={35}
              curserWidth={10}
              curserStyle={{borderRadius: 0}}
            />

          </View>

          <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>Custom</Text>

            <Switch
              isOn={checked}
              onChange={setChecked}
              trackWidth={100}
              trackHeight={10}
              curserHeight={40}
              curserWidth={40}
              curserOnColor="rgba(153,51,153,0.5)"
              curserOffColor="rgba(153,51,153,0.5)"
              trackOnColor="#cc66cc"
              space={-20}
              curserStyle={{justifyContent: 'center'}}
              renderChildCurser={<View
                style={{alignSelf: 'center', width: 20, height: 20, backgroundColor: 'rgb(153,51,153)', borderRadius: 10}}
              />}
            />

          </View>

          


        </View>
        <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>With Image</Text>

            <Switch
              isOn={checked}
              onChange={setChecked}
              trackWidth={300}
              trackHeight={100}
              curserHeight={90}
              curserWidth={90}
              space={5}
              renderChildCurser={<Image
              style={{flex:1, borderRadius: 50}}
              source={{uri: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg"}}
               />}
              
            />

          </View>

      </ScrollView>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  wrapperViewStyle: {
    flexDirection: 'row',
    padding: 15
  },
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center'
  }

});

export default App;
