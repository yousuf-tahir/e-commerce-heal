import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';

const womenProducts = {
  womenhoodies: [
    {
      id: '1',
      title: 'Pop Orange',
      image: 'https://i.pinimg.com/564x/cd/bf/bb/cdbfbbc2f2d3ac6810646c9c4551bf37.jpg',
      price: '4999',
    },
    {
      id: '2',
      title: 'Wine Red',
      image: 'https://i.pinimg.com/564x/a9/7f/dd/a97fddfe621a873216d2ebbde42387a9.jpg',
      price: '4999',
    },
    {
      id: '3',
      title: 'Seige Green',
      image: 'https://i.pinimg.com/564x/30/bd/ee/30bdeeeecf400bd46dcc169cb8270428.jpg',
      price: '6999',
    },
    {
      id: '4',
      title: 'Lightwash Beige',
      image: 'https://i.pinimg.com/564x/74/a5/51/74a5519f30c2528f9538bd4185344f57.jpg',
      price: '5999',
    },
    {
      id: '5',
      title: 'Chocolate Brown-3',
      image: 'https://i.pinimg.com/564x/64/96/d1/6496d180eca3ab8b59da6deeb53c1398.jpg',
      price: '4999',
    },
    {
      id: '6',
      title: 'Flowery Blue',
      image: 'https://i.pinimg.com/564x/04/60/4e/04604ee69ccde21457c6fc142a1e4a8a.jpg',
      price: '5499',
    },
    {
      id: '7',
      title: 'Lavender',
      image: 'https://i.pinimg.com/564x/d8/69/ed/d869edd9eb4a2a626c530e19d4f5bd7c.jpg',
      price: '7499',
    },
    {
      id: '8',
      title: 'Strawberry Pink',
      image: 'https://i.pinimg.com/564x/34/68/19/346819d40ca355ffc08a52f46de99148.jpg',
      price: '6499',
    },
  ],
  sweatshirts: [
    {
      id: '1',
      title: 'Champion-Red',
      image: 'https://i.pinimg.com/564x/be/bd/cf/bebdcf2c7fdffd1f6c325e612f7664e4.jpg',
      price: '1999',
    },
    {
      id: '2',
      title: 'Pasadera',
      image: 'https://i.pinimg.com/564x/0a/82/2e/0a822e186b9c60086a1236a160191336.jpg',
      price: '2999',
    },
    {
      id: '3',
      title: 'P-Stripe',
      image: 'https://i.pinimg.com/564x/27/41/67/274167e55d237889d2cb513ad88a2b5d.jpg',
      price: '1999',
    },
    {
      id: '4',
      title: 'Trileca',
      image: 'https://i.pinimg.com/564x/28/2b/d0/282bd0ba5c26cb1622f652a0908aa92b.jpg',
      price: '1999',
    },
    {
      id: '5',
      title: 'Florida USA',
      image: 'https://i.pinimg.com/564x/6a/76/75/6a7675384ebbd8748b14b0c791e3fce4.jpg',
      price: '2999',
    },
    {
      id: '6',
      title: 'Arizona',
      image: 'https://i.pinimg.com/236x/62/e9/53/62e95300966e4cadbae8e735f406d6b7.jpg',
      price: '2499',
    },
    {
      id: '7',
      title: 'Dallas',
      image: 'https://i.pinimg.com/564x/66/19/72/66197278ec702d9a31270f6e87167ac9.jpg',
      price: '2499',
    },
    {
      id: '8',
      title: 'Houstan',
      image: 'https://i.pinimg.com/236x/57/67/27/57672764a35c7ab7a85855c3873acb83.jpg',
      price: '3499',
    },
  ],
  womenjacket: [
    {
      id: '1',
      title: 'Black Leather Moto',
      image: 'https://i.pinimg.com/564x/e7/68/ee/e768eec49db0a093933f8fc0bb6be956.jpg',
      price: '7999',
    },
    {
      id: '2',
      title: 'Chocolate Sherpa',
      image: 'https://i.pinimg.com/564x/d0/de/88/d0de88b1f1e12755b21b2d23193141a5.jpg',
      price: '6999',
    },
    {
      id: '3',
      title: 'Hazel Sherpa',
      image: 'https://i.pinimg.com/564x/f7/e0/32/f7e0326218a4bbf71b000a0b55f72a7b.jpg',
      price: '5999',
    },
    {
      id: '4',
      title: 'Green Suede Moto',
      image: 'https://i.pinimg.com/564x/1b/44/86/1b44861647e4e46642f1f5a07a4dd4aa.jpg',
      price: '7999',
    },
    {
      id: '5',
      title: 'Black Leather Blazer',
      image: 'https://i.pinimg.com/564x/54/4a/5b/544a5bc5e46fbffea3b2b0f0ef851140.jpg',
      price: '11,999',
    },
    {
      id: '6',
      title: 'Lightwash Denim',
      image: 'https://i.pinimg.com/564x/0e/dd/86/0edd86a94a275b399c489489a7b91952.jpg',
      price: '5499',
    },
    {
      id: '7',
      title: 'Brown Flannel',
      image: 'https://i.pinimg.com/564x/dc/2e/13/dc2e13c207d1421b4d6d983b43f29658.jpg',
      price: '3499',
    },
    {
      id: '8',
      title: 'Black Puffer',
      image: 'https://i.pinimg.com/564x/6d/57/07/6d5707df46f38e5ff99b019167278b6e.jpg',
      price: '6499',
    },
  ],
};

const NAVBAR_COLOR = '#9050cc';

function FooterLink({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={{ backgroundColor: 'transparent' }}
    >
      <Text
        style={[
          styles.footerLink,
          hovered && { color: NAVBAR_COLOR, textDecorationLine: 'underline', cursor: 'pointer' },
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const WomenCategoryPage = () => {
  const { category } = useLocalSearchParams();
  const products = womenProducts[category as keyof typeof womenProducts];

  if (!products) {
    return <Text style={styles.notFound}>No products found for "{category}"</Text>;
  }

  return (
    <ScrollView>
      {/* Navbar */}
      <View style={styles.header}>
        <Text style={styles.brandName}>Freebee.</Text>
        <View style={styles.navigation}>
          <Link href="/" asChild>
            <Pressable style={styles.navItem}>
              <Text style={styles.navText}>Home</Text>
            </Pressable>
          </Link>
          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>About</Text>
          </Pressable>
          <Link href="/login" asChild>
            <Pressable style={styles.navItem}>
              <Text style={styles.navText}>User</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <Text style={styles.title}>{category?.toString().replace(/women/i, '').replace(/^\w/, c => c.toUpperCase())}</Text>
      <View style={styles.grid}>
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.title}</Text>
            <Text style={styles.price}>Rs. {product.price}</Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>AIR UNIVERSITY</Text>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Departments</FooterLink>
            <FooterLink>Policies</FooterLink>
            <FooterLink>Programs</FooterLink>
          </View>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>get help</Text>
            <FooterLink>FAQ</FooterLink>
            <FooterLink>Admissions</FooterLink>
            <FooterLink>Registration</FooterLink>
            <FooterLink>Alumni</FooterLink>
            <FooterLink>Financial Aid</FooterLink>
          </View>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>Resources</Text>
            <FooterLink>Campus Map</FooterLink>
            <FooterLink>Community Engagement</FooterLink>
            <FooterLink>Directory</FooterLink>
            <FooterLink>Air Profiles</FooterLink>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;
const contentWidth = screenWidth * 0.8;
const cardWidth = contentWidth / 3 - 20;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  header: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  brandName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#9050cc',
    marginBottom: 20,
    letterSpacing: 1,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 600,
  },
  navItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: 'rgba(144, 80, 204, 0.1)',
  },
  navText: {
    color: '#9050cc',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  grid: {
    width: contentWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  card: {
    width: cardWidth,
    marginBottom: 40,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  notFound: {
    marginTop: 50,
    fontSize: 18,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: 'linear-gradient(135deg, #9050cc, #7240a0)',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  footerSection: {
    flex: 1,
    marginRight: 40,
  },
  footerTitle: {
    fontSize: 18,
    color: '#7240a0',
    fontWeight: '700',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  footerLink: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.8)',
    marginBottom: 12,
    lineHeight: 24,
    cursor: 'pointer',
    textDecorationLine: 'none',
  },
});

export default WomenCategoryPage;