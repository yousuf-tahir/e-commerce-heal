import React, { useState } from 'react';
import { StyleSheet, ScrollView, Pressable, Linking, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { Video, ResizeMode } from 'expo-av';
// import promoVideo from '@/assets/video/Untitled video - Made with Clipchamp (1).mp4';
// import { useState } from 'react';

export default function HomeScreen() {
  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/yousuf._.tahir/');
  };

  const founders = [
    {
      name: 'Ali Waqar',
      image: require('@/assets/images/ali (1).jpeg'),
    },
    {
      name: 'Yousuf Tahir',
      image: require('@/assets/images/usuf.jpeg'),
    },
    {
      name: 'Maaz Siddiqui',
      image: require('@/assets/images/maaz.jpeg'),
      // description: 'Designed an interactive personal blog using HTML and CSS with unique styling.',
    },
  ];
const NAVBAR_COLOR = '#9050cc';

function FooterLink({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      // Only use view styles here!
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
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Image
          source={require('@/assets/images/purplebg.jpeg')}
          style={styles.heroBackground}
          resizeMode="cover"
        />
        <View style={styles.heroOverlay}>
          <View style={styles.navigation}>
            <Link href="/" asChild>
              <Pressable style={styles.navItem}>
                <Text style={styles.navText}>Home</Text>
              </Pressable>
            </Link>
            <Pressable style={styles.navItem}>
              <Text style={styles.navText}>About</Text>
            </Pressable>
            <Pressable style={styles.navItem}>
              <Text style={styles.navText}>Contact us</Text>
            </Pressable>
            <Link href="/login" asChild>
              <Pressable style={styles.navItem}>
                <Text style={styles.navText}>User</Text>
              </Pressable>
            </Link>
          </View>

          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Freebee</Text>
            <Text style={styles.heroSubtitle}>The next Gen-Z drip</Text>
            <Pressable style={styles.heroButton} onPress={openInstagram}>
              <Text style={styles.heroButtonText}>
                Visit our instagram to know More
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* Vision Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vision</Text>
        <Text style={styles.visionText}>
          "To revolutionize online shopping for Gen Z by creating a vibrant, interactive, and personalized digital marketplace that celebrates individuality, fosters community, and promotes sustainable and ethical consumerism. We envision a platform where style meets innovation, empowering our users to discover, share, and express their unique fashion identities with ease and confidence."
        </Text>

        {/* Category Cards */}
        <View style={styles.categoryContainer}>
          <Link href="/women" asChild>
            <Pressable style={styles.categoryCard}>
              <Image
                source={{uri: "https://i.pinimg.com/564x/31/9e/c4/319ec444d769df89b71f317204db8a24.jpg"}}
                style={styles.categoryImage}
                resizeMode="cover"
              />
              <View style={styles.categoryOverlay}>
                <Text style={styles.categoryText}>Women</Text>
              </View>
            </Pressable>
          </Link>

          <Link href="/men" asChild>
            <Pressable style={styles.categoryCard}>
              <Image
                source={{uri: "https://i.pinimg.com/564x/77/af/47/77af47aff9e326d8c1e0f84d8faaf54b.jpg"}}
                style={styles.categoryImage}
                resizeMode="cover"
              />
              <View style={styles.categoryOverlay}>
                <Text style={styles.categoryText}>Men</Text>
              </View>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Video Section */}
      {/* Video Section */}
     <View style={styles.videoSection}>
  <View style={styles.divider} />
  <Video
      source={require('../../assets/Untitled video - Made with Clipchamp (1).mp4')}
    style={{ width: '100%', height: 400, borderRadius: 16 }}
    resizeMode={ResizeMode.COVER}
    shouldPlay
    isLooping
    isMuted
    useNativeControls={false}
  />
  <View style={styles.divider} />
</View>

      {/* Founders Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FOUNDERS</Text>
        <Text style={styles.foundersDescription}>
          "Founded by visionary fashion enthusiasts, our clothing website brings together the latest trends and timeless styles. We are committed to providing high-quality apparel that reflects individuality and elegance."
        </Text>

        <View style={styles.foundersContainer}>
          {founders.map((founder, index) => (
            <View key={index} style={styles.founderCard}>
              <Image source={founder.image} style={styles.founderImage} resizeMode="cover" />
              <Text style={styles.founderName}>{founder.name}</Text>
            </View>
          ))}
        </View>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    height: 600,
    position: 'relative',
  },
  heroBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(4, 9, 30, 0.7)',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  navItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  navText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  heroContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  heroTitle: {
    fontSize: 72,
    color: '#9050cc',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },
  heroButton: {
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
  },
  heroButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  section: {
    padding: 40,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
    letterSpacing: 1,
  },
  visionText: {
    color: '#666',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 40,
    fontStyle: 'italic',
    maxWidth: 800,
    alignSelf: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 40,
  },
  categoryCard: {
    flex: 1,
    height: 300,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  videoSection: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 60,
    alignItems: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: '#9050cc',
    width: 100,
    marginVertical: 20,
  },
  videoPlaceholder: {
    fontSize: 24,
    fontWeight: '600',
    color: '#9050cc',
    marginBottom: 8,
  },
  videoDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  foundersDescription: {
    color: '#666',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    fontStyle: 'italic',
    lineHeight: 28,
    maxWidth: 700,
    alignSelf: 'center',
  },
  foundersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 24,
  },
  founderCard: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  founderImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#9050cc',
  },
  founderName: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  founderDescription: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
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
    color: '#fff',
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
  cursor: 'pointer', // Add this for web
  textDecorationLine: 'none',
},
});


