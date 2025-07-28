import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter, Link } from 'expo-router';

const productData: Record<string, any[]> = {
  // ...hoodies and jackets arrays...

  
   hoodies: [
    {
      id: 1,
      name: 'Sailor',
      price: 'Rs. 6999',
      image: 'https://i.pinimg.com/564x/a4/01/59/a40159beb89bcc58e6b933bac22f2417.jpg',
    },
    {
      id: 2,
      name: 'Grey Lavender',
      price: 'Rs. 5499',
      image: 'https://i.pinimg.com/564x/c7/46/7e/c7467efda321f5debe839aad848874e8.jpg',
    },
    {
      id: 3,
      name: 'Washout Grey',
      price: 'Rs. 6499',
      image: 'https://i.pinimg.com/564x/81/34/53/813453063600eb0cd0643316b548becf.jpg',
    },
    {
      id: 4,
      name: 'Golf Green',
      price: 'Rs. 6999',
      image: 'https://i.pinimg.com/564x/b0/95/84/b09584e40236bbd26384d123684dcc98.jpg',
    },
    {
      id: 5,
      name: 'Emerald',
      price: 'Rs. --',
      image: 'https://i.pinimg.com/564x/81/16/09/811609c48aced695b3fb87c47847635a.jpg',
    },
    {
      id: 6,
      name: 'Snow',
      price: 'Rs. 7999',
      image: 'https://i.pinimg.com/736x/17/cc/45/17cc4528b5ebe0fcf56d9fa8d5550a4b.jpg',
    },
    {
      id: 7,
      name: 'Knight',
      price: 'Rs. 7999',
      image: 'https://i.pinimg.com/564x/b9/21/8d/b9218dd08377de07c8220c6a2d47f87f.jpg',
    },
    {
      id: 8,
      name: 'Grey',
      price: 'Rs. 5999',
      image: 'https://i.pinimg.com/564x/85/d2/3b/85d23b5ffe4cc11fe28d9ab07fb59f21.jpg',
    },
  ],
  jackets: [
    {
      id: 1,
      name: 'Black Leather Moto',
      price: 'Rs. 7999',
      image: 'https://i.pinimg.com/564x/a6/6a/cd/a66acd2886e1359fac63be6844edcee3.jpg',
    },
    {
      id: 2,
      name: 'Chocolate Sherpa',
      price: 'Rs. 6999',
      image: 'https://i.pinimg.com/564x/15/d2/f1/15d2f1b1da74fa4e701317e9c09de9a2.jpg',
    },
    {
      id: 3,
      name: 'Hazel Sherpa',
      price: 'Rs. 5999',
      image: 'https://i.pinimg.com/564x/bc/f2/ba/bcf2bad7168ff8ec0268052f848b765e.jpg',
    },
    {
      id: 4,
      name: 'Green Suede Moto',
      price: 'Rs. 7999',
      image: 'https://i.pinimg.com/564x/51/4a/2b/514a2b5684b3ed1012ab9709afc145c3.jpg',
    },
    {
      id: 5,
      name: 'Black Leather Blazer',
      price: 'Rs. 11,999',
      image: 'https://i.pinimg.com/736x/49/6c/c3/496cc3159e4a2eebd6c009874c152e62.jpg',
    },
    {
      id: 6,
      name: 'Lightwash Denim',
      price: 'Rs. 5499',
      image: 'https://i.pinimg.com/564x/30/54/79/305479cc3607aab760ae8ce3a3741b7f.jpg',
    },
    {
      id: 7,
      name: 'Brown Flannel',
      price: 'Rs. 3499',
      image: 'https://i.pinimg.com/736x/98/90/ea/9890ea8daeb28fca0c86dca8b4a5efe2.jpg',
    },
    {
      id: 8,
      name: 'Black Puffer',
      price: 'Rs. 6499',
      image: 'https://i.pinimg.com/564x/81/d6/74/81d674b360e5cd6ecff3c7ad0353b2b4.jpg',
    },
  ],
  shirts: [
    {
      id: 1,
      name: 'Blue-1979',
      price: 'Rs. 2999',
      image: 'https://i.pinimg.com/564x/ae/46/a5/ae46a5f8c5b644b66181036a6c012c0c.jpg',
    },
    {
      id: 2,
      name: 'Blues Clues',
      price: 'Rs. 2499',
      image: 'https://i.pinimg.com/564x/45/03/0c/45030c1876efe6501999f1ab75cd0d73.jpg',
    },
    {
      id: 3,
      name: 'Move Ahead',
      price: 'Rs. 2499',
      image: 'https://i.pinimg.com/564x/24/0f/c9/240fc941fb4fb6c56ff73a392b56c16e.jpg',
    },
    {
      id: 4,
      name: 'Beige Tree',
      price: 'Rs. 2999',
      image: 'https://i.pinimg.com/736x/49/b6/af/49b6afb0809c032748927a3abec8347d.jpg',
    },
    {
      id: 5,
      name: 'Inside Imagination',
      price: 'Rs. 2999',
      image: 'https://i.pinimg.com/564x/3e/eb/18/3eeb18b248ffa92e05a4885fce3992df.jpg',
    },
    {
      id: 6,
      name: 'Never Ending Madness',
      price: 'Rs. 3999',
      image: 'https://i.pinimg.com/564x/02/85/4b/02854bb47821aa58540909179fc5550d.jpg',
    },
    {
      id: 7,
      name: "We Don't Play",
      price: 'Rs. 2499',
      image: 'https://i.pinimg.com/564x/41/39/03/413903322027fbb4ca498018262a6e7f.jpg',
    },
    {
      id: 8,
      name: 'Aristotle',
      price: 'Rs. 3999',
      image: 'https://i.pinimg.com/564x/a3/f7/54/a3f7543503cffda122a3c27731e26029.jpg',
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

const CategoryPage = () => {
  const { category } = useLocalSearchParams();
  const router = useRouter();
  const products = productData[category as string];

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

      <Text style={styles.title}>{category?.toString().toUpperCase()}</Text>
      <View style={styles.grid}>
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
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

export default CategoryPage;