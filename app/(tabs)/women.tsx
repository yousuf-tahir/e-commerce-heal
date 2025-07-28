import React, { useState } from 'react';
import { StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function WomenScreen() {
  const categories = [
    {
      title: 'Hoodies',
      image: 'https://i.pinimg.com/564x/48/00/65/48006513208e7da12491987706d37f11.jpg',
      description: 'Cozy and chic hoodies perfect for any season',
    },
    {
      title: 'Jackets',
      image: 'https://i.pinimg.com/564x/e9/67/65/e96765ac2b3a5985e8bc766fd86bb1a6.jpg',
      description: 'Elegant jackets that combine style and functionality',
    },
    {
      title: 'SweatShirts',
      image: 'https://i.pinimg.com/564x/45/45/61/45456136c146dd2f017a47eda6b68e7d.jpg',
      description: 'Comfortable sweatshirts for casual elegance',
    },
  ];

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
        <Text style={styles.title}>Latest in Women's Fashion</Text>
        <View style={styles.titleDivider} />
        <Text style={styles.subtitle}>Embrace your style with our exclusive women's collection</Text>
      </View>

      {/* Categories Grid */}
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <Pressable key={index} style={styles.categoryCard}>
            <Image
              source={{uri: category.image}}
              style={styles.categoryImage}
              resizeMode="cover"
            />
            <View style={styles.categoryOverlay}>
              <View style={styles.categoryContent}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryDescription}>{category.description}</Text>
                <Pressable
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

      {/* Featured Section */}
     <View style={styles.featuredSection}>
  <Text style={styles.featuredTitle}>Empowering Women Through Fashion</Text>
  <View style={styles.featuresGrid}>
    <View style={styles.featureItem}>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/100/9050cc/wardrobe.png' }}
        style={{ width: 48, height: 48, marginBottom: 16 }}
      />
      <Text style={styles.featureTitle}>Elegant Designs</Text>
      <Text style={styles.featureDescription}>Sophisticated styles for the modern woman</Text>
    </View>
    <View style={styles.featureItem}>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/100/9050cc/dress-front-view.png' }}
        style={{ width: 48, height: 48, marginBottom: 16 }}
      />
      <Text style={styles.featureTitle}>Premium Fabrics</Text>
      <Text style={styles.featureDescription}>Luxurious materials for ultimate comfort</Text>
    </View>
    <View style={styles.featureItem}>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/100/9050cc/wardrobe.png' }}
        style={{ width: 48, height: 48, marginBottom: 16 }}
      />
      <Text style={styles.featureTitle}>Versatile Styles</Text>
      <Text style={styles.featureDescription}>From casual to formal, we've got you covered</Text>
    </View>
  </View>
</View>

      {/* Inspiration Section */}
      <View style={styles.inspirationSection}>
        <Text style={styles.inspirationTitle}>Style Inspiration</Text>
        <Text style={styles.inspirationText}>
          "Fashion is about dressing according to what's fashionable. Style is more about being yourself." 
          - Oscar de la Renta
        </Text>
        <View style={styles.inspirationGrid}>
          <View style={styles.inspirationCard}>
            <Text style={styles.inspirationCardTitle}>Casual Chic</Text>
            <Text style={styles.inspirationCardText}>Perfect for everyday elegance</Text>
          </View>
          <View style={styles.inspirationCard}>
            <Text style={styles.inspirationCardTitle}>Office Ready</Text>
            <Text style={styles.inspirationCardText}>Professional yet stylish</Text>
          </View>
          <View style={styles.inspirationCard}>
            <Text style={styles.inspirationCardTitle}>Weekend Vibes</Text>
            <Text style={styles.inspirationCardText}>Comfortable and trendy</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>AIR UNIVERSITY</Text>
            <Text style={styles.footerLink}>About Us</Text>
            <Text style={styles.footerLink}>Departments</Text>
            <Text style={styles.footerLink}>Policies</Text>
            <Text style={styles.footerLink}>Programs</Text>
          </View>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>get help</Text>
            <Text style={styles.footerLink}>FAQ</Text>
            <Text style={styles.footerLink}>Admissions</Text>
            <Text style={styles.footerLink}>Registration</Text>
            <Text style={styles.footerLink}>Alumni</Text>
            <Text style={styles.footerLink}>Financial Aid</Text>
          </View>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>Resources</Text>
            <Text style={styles.footerLink}>Campus Map</Text>
            <Text style={styles.footerLink}>Community Engagement</Text>
            <Text style={styles.footerLink}>Directory</Text>
            <Text style={styles.footerLink}>Air Profiles</Text>
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
    backgroundColor: '#fdf2f8',
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
    backgroundColor: '#f3e8ff',
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
    gap: 30, // For React Native Web, otherwise use marginRight on cards
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
    marginRight: 30, // For spacing between cards (if gap doesn't work)
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(144, 80, 204, 0)',
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
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  shopButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  shopButtonText: {
    color: '#9050cc',
    fontSize: 16,
    fontWeight: '600',
  },
  shopButtonHover: {
    color: '#ecececff',
  backgroundColor: '#7a3fc8', // Slightly darker or any color you want on hover
  transform: [{ scale: 1.05 }],
  shadowColor: '#9050cc',
  shadowOpacity: 0.3,
  shadowRadius: 8,
  
},
  featuredSection: {
    backgroundColor: '#fdf2f8',
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
    borderWidth: 1,
    borderColor: '#f3e8ff',
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
  inspirationSection: {
    paddingVertical: 60,
    paddingHorizontal: 40,
    backgroundColor: '#fff',
  },
  inspirationTitle: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inspirationText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
    lineHeight: 28,
  },
  inspirationGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  inspirationCard: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 24,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#9050cc',
  },
  inspirationCardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  inspirationCardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    backgroundColor: '#f7f7f7ff',
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
  },
});

