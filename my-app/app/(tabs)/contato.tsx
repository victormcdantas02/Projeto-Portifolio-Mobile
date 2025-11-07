import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ContatoScreen() {
  
  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            onPress={() => openURL('https://www.linkedin.com/in/victormcdantas/')}>       
            <Text style={styles.contactEmoji}>💼</Text>
            <Text style={styles.contactText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => openURL('https://github.com/victormcdantas02')}>
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
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
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
    color: '#2563eb',
    fontWeight: '500',
  },
});