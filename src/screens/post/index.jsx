import React from 'react';
import { ScrollView, Text, View,useWindowDimensions} from 'react-native';
import styles from './styles'
import { useState } from 'react';

import Progressbar from '../../components/progressbar';
// import { Container } from './styles';

const post = () => {
  const dimensions=useWindowDimensions();
  const[percent,setPercent]=useState(0)
  function scrollPercentage({contentSize,contentOffset,layoutMeasurement}){
    const visibleContent=Math.ceil((dimensions.height/contentSize.height)*100)
    const value=((layoutMeasurement.height + contentOffset.y)/contentSize.height)*100;
    console.log(visibleContent)
    console.log(value)
    setPercent(value-3<visibleContent ? 0 : value);
  }
  return <View style={styles.container}>
    <ScrollView
    onScroll={(event)=>scrollPercentage(event.nativeEvent) }
    showsVerticalScrollIndicator={false}
    style={styles.content}>
    <Text style={styles.title}>
      lorem
    </Text>
    <View>
    <Text style={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
    </Text>
    <Text style={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
    </Text>
    <Text style={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
    </Text>
    <Text style={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque aliquid velit possimus perferendis nesciunt officia error cum ipsam! Et officia deleniti quisquam! Ipsa deserunt libero consequuntur qui tempora aut!
    </Text>
    </View>
    </ScrollView>
    <Progressbar valor={percent}/>
  </View>;
}

export default post;