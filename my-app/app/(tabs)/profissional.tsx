import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfissionalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          
          <View style={styles.card}>
            <Text style={styles.titulo}>Em busca de oportunidades</Text>
            <Text style={styles.descricao}>
            No momento, estou desenvolvendo meu conhecimento e estudando para estar aberto a 
            a qualquer área, para conhecer e aprender diversos novos tipos de tecnologias.
            </Text>
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
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  descricao: {
    fontSize: 15,
    lineHeight: 22,
    color: '#666',
  },
});