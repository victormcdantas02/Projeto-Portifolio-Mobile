import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SobreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
          
          <View style={styles.photoContainer}>
            <Image 
              source={require('../../assets/images/victor.jpg')}
            />
          </View>

          <Text style={styles.paragraph}>
            Atualmente tenho 23 anos, sou de Teresina-PI, curso Ciência da 
            Computação desde 2022 e gosto de várias coisas e falar sobre elas.
          </Text>
          <Text style={styles.paragraph}>
            Gosto muito de filmes, jogos, quadrinhos e animações. Tenho sonho 
            de conhecer diferentes países e ajudar pessoas. Profissionalmente 
            estou aberto a qualquer tipo de experiência.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tecnologias Utilizadas</Text>
          <View style={styles.techItem}>
            <Text style={styles.techName}>React Native</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techName}>Expo</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techName}>Expo Router</Text>
          </View>
          <View style={styles.techItem}>
            <Text style={styles.techName}>TypeScript</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffed',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 15,
    textAlign: 'justify',
  },
  techItem: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  techName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  techDescription: {
    fontSize: 14,
    color: '#666',
  },
});