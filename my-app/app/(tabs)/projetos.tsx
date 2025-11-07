import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProjetosScreen() {
  
  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
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

        <View style={{ height: 30 }} />

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
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e293b',
  },
  projectCard: {
    backgroundColor: '#f1f5f9',
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
    color: '#1e293b',
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#475569',
    marginBottom: 15,
  },
  linkButton: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});