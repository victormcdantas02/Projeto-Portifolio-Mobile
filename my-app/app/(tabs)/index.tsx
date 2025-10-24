import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  
  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Boas vindas ao meu portfólio!</Text>
          <Text style={styles.heroSubtitle}>Me chamo Victor Dantas</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
          <View style={styles.aboutContent}>
            <View style={styles.photoContainer}>
              <Image 
                source={require('../../assets/images/victor.jpg')}
              />
            </View>
            <View style={styles.aboutText}>
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
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projetos</Text>
          
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Projeto Estrutura de Dados</Text>
            <Text style={styles.projectDescription}>
              Trabalho que consiste em uma aplicação que utiliza listas encadeadas 
              para gerenciar um sistema que engloba uma clínica médica, eventos e 
              um restaurante, armazenando os dados atribuídos ao longo do programa.
            </Text>
            <TouchableOpacity 
              style={styles.linkButton}
              onPress={() => openURL('https://github.com/victormcdantas02/Projeto-ED1')}
            >
              <Text style={styles.linkButtonText}>Ver Código</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Projeto Banco de Dados</Text>
            <Text style={styles.projectDescription}>
              Projeto acadêmico de banco de dados simulando um parque de diversões 
              com gerenciamento de visitantes, brinquedos e vendas de ingressos.
            </Text>
            <TouchableOpacity 
              style={styles.linkButton}
              onPress={() => openURL('https://github.com/victormcdantas02/Projeto-Banco')}
            >
              <Text style={styles.linkButtonText}>Ver Código</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meus Contatos</Text>
          
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => openURL('mailto:victormcdantas@gmail.com')}
          >
            <Text style={styles.contactEmoji}>📧</Text>
            <Text style={styles.contactText}>victormcdantas@gmail.com</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => openURL('https://www.linkedin.com/in/victormcdantas/')}
          >
            <Text style={styles.contactEmoji}>💼</Text>
            <Text style={styles.contactText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => openURL('https://github.com/victormcdantas02')}
          >
            <Text style={styles.contactEmoji}>🐱</Text>
            <Text style={styles.contactText}>GitHub</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  heroSection: {
    padding: 40,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 250,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
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

  aboutContent: {
    alignItems: 'center',
  },
  photoContainer: {
    marginBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  aboutText: {
    width: '100%',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 15,
    textAlign: 'justify',
  },

  projectCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#666',
    marginBottom: 15,
  },
  linkButton: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  contactEmoji: {
    fontSize: 24,
    marginRight: 15,
  },
  contactText: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '500',
  },
});