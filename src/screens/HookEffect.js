//////////////////////////////////Original API-FETCH//////////////////////////////////////

import {FlatList, StyleSheet, View, Image, Text} from 'react-native';
import React, {useState, useEffect} from 'react';

const UserData = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://mocki.io/v1/163619dd-a30b-484f-abe9-274525a61568',
      );
      const realData = await response.json();
      setMyData(realData);
      setIsLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // render the retailer cards

  const showUserData = ({item}) => {
    return (
      <View style={styles.allDataContianer}>
        <View style={styles.card}>
          <View style={styles.imgContainer}>
            <Image style={styles.imgStyle} source={{uri: item.image}} />
          </View>

          <View>
            <View style={styles.bioDataContainer}>
              <Text style={styles.bioData}> Retailer Info </Text>
              <Text style={styles.idNumber}>
                {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
              </Text>
            </View>

            <View style={styles.mainContain}>
              <Text style={styles.myName}> Name: {item.name}</Text>
              <Text style={styles.myName}> Email: {item.email}</Text>
              <Text style={styles.myName}> Phone: {item.mobile}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.mainHeader}>List of Retailers</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={myData}
        renderItem={showUserData}
        //horizontal
        //showsHorizontalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  allDataContianer: {
    paddingHorizontal: 50,
  },
  mainContainer: {
    width: '100%',
    minheight: '100%',
    paddingVertical: 50,
    backgroundColor: '#ebedee',
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: 'grey',
    borderRadius: 5,
    margin: 20,
  },
  bioDataContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  bioData: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#353535',
    paddingVertical: 10,
  },
  idNumber: {
    paddingLeft: 0,
    paddingTop: 7,
    fontSize: 20,
    color: '#fff',
  },
  bioData: {
    fontSize: 30,
  },
  mainHeader: {
    padding: 20,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: '100%',
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: '#grey',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },
});

export default UserData;

/////////DUMMY-API CALL/////////////

// import {FlatList, StyleSheet, View, Image, Text, Alert} from 'react-native';
// import React, {useState, useEffect} from 'react';

// const UserData = () => {
//   const [isLoaded, setIsLoaded] = useState(true);
//   const [myData, setMyData] = useState([]);

//   const getUserData = async () => {
//     try {
//       /////////Simulate a delay of 5 seconds/////////////
//       const simulateDelay = new Promise(resolve => setTimeout(resolve, 3000));
//       const timeout = new Promise((_, reject) =>
//         setTimeout(() => reject(new Error('Timeout')), 2000),
//       );

//       await Promise.race([simulateDelay, timeout]);
//     } catch (error) {
//       if (error.message === 'Timeout') {
//         Alert.alert("It's taking too long!", 'Please try again.');
//       } else {
//         console.error(error);
//       }
//     }
//   };
//   useEffect(() => {
//     getUserData();
//   }, []);

//   // render the retailer cards

//   const showUserData = ({item}) => {
//     return (
//       <View style={styles.allDataContianer}>
//         <View style={styles.card}>
//           <View style={styles.imgContainer}>
//             <Image style={styles.imgStyle} source={{uri: item.image}} />
//           </View>

//           <View>
//             <View style={styles.bioDataContainer}>
//               <Text style={styles.bioData}> Retailer Info </Text>
//               <Text style={styles.idNumber}>
//                 {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
//               </Text>
//             </View>

//             <View style={styles.mainContain}>
//               <Text style={styles.myName}> Name: {item.name}</Text>
//               <Text style={styles.myName}> Email: {item.email}</Text>
//               <Text style={styles.myName}> Phone: {item.mobile}</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View>
//       <Text style={styles.mainHeader}>List of Retailers</Text>
//       <FlatList
//         keyExtractor={item => item.id}
//         data={myData}
//         renderItem={showUserData}
//         //horizontal
//         //showsHorizontalScrollIndicator={true}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   allDataContianer: {
//     paddingHorizontal: 50,
//   },
//   mainContainer: {
//     width: '100%',
//     minheight: '100%',
//     paddingVertical: 50,
//     backgroundColor: '#ebedee',
//   },
//   card: {
//     width: 250,
//     height: 350,
//     backgroundColor: 'grey',
//     borderRadius: 5,
//     margin: 20,
//   },
//   bioDataContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   bioData: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#353535',
//     paddingVertical: 10,
//   },
//   idNumber: {
//     paddingLeft: 0,
//     paddingTop: 7,
//     fontSize: 20,
//     color: '#fff',
//   },
//   bioData: {
//     fontSize: 30,
//   },
//   mainHeader: {
//     padding: 20,
//     fontSize: 30,
//     color: 'black',
//     textAlign: 'center',
//   },
//   imgContainer: {
//     padding: 10,
//   },
//   imgStyle: {
//     width: '100%',
//     height: 180,
//   },
//   mainContain: {
//     padding: 10,
//     backgroundColor: '#grey',
//     borderBottomLeftRadius: 5,
//     borderBottomRightRadius: 5,
//   },
//   myName: {
//     fontSize: 14,
//     color: '#fff',
//     marginBottom: 10,
//     alignSelf: 'flex-start',
//     textTransform: 'capitalize',
//   },
// });

// export default UserData;
