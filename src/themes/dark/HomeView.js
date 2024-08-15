import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

export default function HomeScreen({ isExtended, setIsExtended }) {
  // const umbrUrl = 'https://Umbranativetemplate.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(umbrUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(umbrUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${umbrUrl}`);
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.section}>
          <Text size={20} white>
            Home
          </Text>
        </View>
        <View style={styles.section}>
          <Text color={colors.introText} size={15}>
            The smartest Way to build your mobile app
          </Text>
          <Text size={30} bold style={styles.title}>
            React Native Starter
          </Text>
        </View>
        <View style={[styles.section, styles.sectionLarge]}>
          <Text
            color={colors.introText}
            hCenter
            size={15}
            style={styles.description}
          >
            {' '}
            A powerful starter project that bootstraps development of your
            mobile application and saves you $20 000*
          </Text>
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text bold size={50} style={styles.price}>
                {isExtended ? '$199.95' : '$49.95'}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.priceLink}
              onPress={() =>
                isExtended ? setIsExtended(false) : setIsExtended(true)
              }
            >
              <Text style={{ color: colors.primary }} size={14}>
                {isExtended
                  ? 'Multiple Applications License'
                  : 'Single Application License'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: colors.introText,
    textAlign: 'center',
    fontFamily: fonts.secondaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
    color: colors.primary,
  },
  price: {
    marginBottom: 5,
    color: colors.primary,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
