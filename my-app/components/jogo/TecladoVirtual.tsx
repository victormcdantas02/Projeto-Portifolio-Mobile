import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TecladoVirtualProps {
  onLetraPress: (letra: string) => void;
  letrasUsadas: string[];
  jogoTerminado: boolean;
}

export default function TecladoVirtual({ onLetraPress, letrasUsadas, jogoTerminado }: TecladoVirtualProps) {
  
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const fileiras = [
    alfabeto.slice(0, 9),   // A-I
    alfabeto.slice(9, 18),  // J-R
    alfabeto.slice(18, 26), // S-Z
  ];

  return (
    <View style={styles.container}>
      {fileiras.map((fileira, index) => (
        <View key={index} style={styles.fileira}>
          {fileira.map((letra) => {
            const usada = letrasUsadas.includes(letra);
            return (
              <TouchableOpacity
                key={letra}
                style={[
                  styles.tecla,
                  usada && styles.teclaUsada,
                ]}
                onPress={() => onLetraPress(letra)}
                disabled={usada || jogoTerminado}
              >
                <Text style={[
                  styles.letraTecla,
                  usada && styles.letraUsada,
                ]}>
                  {letra}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  fileira: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
    gap: 6,
  },
  tecla: {
    backgroundColor: '#132e7eff',
    width: 36,
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  teclaUsada: {
    backgroundColor: '#cbd5e1',
  },
  letraTecla: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  letraUsada: {
    color: '#94a3b8',
  },
});