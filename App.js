import React from 'react';
import { StyleSheet, Text, View , ScrollView, Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View style={{backgroundColor: 'grey',marginTop: 50}}>
            <Text style={{fontSize:24, textAlign:"center"}}>Popular Destinations</Text>
            <ScrollView horizontal={true}>
              {
                [1,2,3,4,5,6].map((e,i)=>{
                    return (
                      <View style={{ backgroundColor: 'green', height: 200, width: 200, margin: 10 }} key={i}>
                        <Image sorce={{ uri: 'https://source.unsplash.com/random/200x200?'+e }} style={{ flex: 10 }} />
                        <Text style={{ flex: 2, fontSize: 14, padding: 10 }}>this is LIT</Text>
                      </View>
                    )
                })
              }
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
