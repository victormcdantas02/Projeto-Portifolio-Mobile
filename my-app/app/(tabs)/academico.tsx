import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AcademicoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          
          <View style={styles.card}>
            <Text style={styles.curso}>Ciência da Computação</Text>
            <Text style={styles.instituicao}>UNICAP</Text>
            <Text style={styles.periodo}>2022 - Presente</Text>
            <Text style={styles.descricao}>
              Cursando graduação em Ciência da Computação
            </Text>
          </View>

        </View>


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Idiomas</Text>
          
          <View style={styles.card}>
            <Text style={styles.idioma}>Português</Text>
            <Text style={styles.nivel}>Nativo</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.idioma}>Inglês</Text>
            <Text style={styles.nivel}>Intermediário</Text>
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
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  curso: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  instituicao: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  periodo: {
    fontSize: 14,
    color: '#777',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 15,
    lineHeight: 22,
    color: '#666',
  },
  idioma: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  nivel: {
    fontSize: 15,
    color: '#666',
  },
});
