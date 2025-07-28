import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function MenScreen() {
  const router = useRouter();
  const categories = [
    {
      title: 'Hoodies',
      image: 'https://i.pinimg.com/564x/16/f4/00/16f4005091da0ca569ad51e5f24150bf.jpg',
      description: 'Comfortable and stylish hoodies for every occasion',
    },
    {
      title: 'Jackets',
      image: 'https://i.pinimg.com/564x/4a/3d/84/4a3d8448debfebd3b6593bcad8310551.jpg',
      description: 'Premium jackets to keep you warm and fashionable',
    },
    {
      title: 'shirts',
      image: 'https://i.pinimg.com/564x/e5/85/c3/e585c3ab72f786506fe5f6a842c6fb51.jpg',
      description: 'Essential t-shirts in various styles and colors',
    },
  ];
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

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
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

      <View style={styles.divider} />

      {/* Breadcrumb */}
      <View style={styles.breadcrumbContainer}>
        <Text style={styles.breadcrumb}>
          <Text style={styles.boldText}>The party collection | Shop Women | Men</Text>
        </Text>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Latest in Men's Fashion</Text>
        <View style={styles.titleDivider} />
        <Text style={styles.subtitle}>Discover our curated collection of premium menswear</Text>
      </View>

      {/* Categories Grid */}
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <Pressable
            key={index}
            style={styles.categoryCard}
            onPress={() => router.push(`/men/${category.title.toLowerCase()}`)}
          >
            <Image
              source={{ uri: category.image }}
              style={styles.categoryImage}
              resizeMode="cover"
            />
            <View style={styles.categoryOverlay}>
              <View style={styles.categoryContent}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryDescription}>{category.description}</Text>
                <Pressable
                  onPress={() => router.push(`/men/${category.title.toLowerCase()}`)}
                  onHoverIn={() => {}}
                  onHoverOut={() => {}}
                  style={({ hovered }) => [
                    styles.shopButton,
                    hovered && styles.shopButtonHover,
                  ]}
                >
                  <Text style={styles.shopButtonText}>Shop Now</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      {/* Improved Featured Section */}
      <View style={styles.featuredSection}>
        <Text style={styles.featuredTitle}>Why Choose Our Men's Collection?</Text>
        <View style={styles.featuresGrid}>
          <View style={styles.featureItem}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/100/9050cc/trophy.png' }}
              style={{ width: 48, height: 48, marginBottom: 16 }}
            />
            <Text style={styles.featureTitle}>Premium Quality</Text>
            <Text style={styles.featureDescription}>High-quality materials and craftsmanship</Text>
          </View>
          <View style={styles.featureItem}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/100/9050cc/light-on.png' }}
              style={{ width: 48, height: 48, marginBottom: 16 }}
            />
            <Text style={styles.featureTitle}>Latest Trends</Text>
            <Text style={styles.featureDescription}>Stay ahead with cutting-edge fashion</Text>
          </View>
          <View style={styles.featureItem}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/100/9050cc/checked-2--v1.png' }}
              style={{ width: 48, height: 48, marginBottom: 16 }}
            />
            <Text style={styles.featureTitle}>Perfect Fit</Text>
            <Text style={styles.featureDescription}>Designed for comfort and style</Text>
          </View>
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
  divider: {
    height: 1,
    backgroundColor: '#e9ecef',
    marginHorizontal: 40,
  },
  breadcrumbContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  breadcrumb: {
    fontSize: 16,
    color: '#666',
  },
  boldText: {
    fontWeight: '600',
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  titleDivider: {
    height: 3,
    backgroundColor: '#9050cc',
    width: 120,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: 40,
    marginBottom: 60,
    gap: 30,
  },
  categoryCard: {
    flex: 1,
    minWidth: 250,
    maxWidth: 350,
    height: 400,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    marginRight: 30,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'flex-end',
    padding: 30,
  },
  categoryContent: {
    backgroundColor: 'transparent',
  },
  categoryTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  categoryDescription: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  shopButton: {
    backgroundColor: '#9050cc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  shopButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  shopButtonHover: {
    backgroundColor: '#7a3fc8',
    transform: [{ scale: 1.05 }],
    shadowColor: '#9050cc',
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  featuredSection: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  featuredTitle: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  featuresGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
  },
  featureItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
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
    cursor: 'pointer',
    textDecorationLine: 'none',
  },
});