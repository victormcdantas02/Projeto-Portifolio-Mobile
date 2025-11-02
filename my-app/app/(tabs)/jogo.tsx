import { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ForcaSVG from '../../components/jogo/ForcaSVG';

export default function JogoScreen() {
  
  const palavras = [
    'ABACATE', 'ABACAXI', 'ACEROLA', 'AMEIXA', 'BANANA', 'CAQUI', 'CARAMBOLA',
    'GOIABA', 'GRAVIOLA', 'LIMAO', 'MAMAO', 'MANGA', 'MARACUJA', 'MELANCIA',
    'MELAO', 'MEXERICA', 'MORANGO', 'PESSEGO', 'SAPOTI', 'SERIGUELA',
    'TAMARINDO', 'TANGERINA', 'ABOBORA', 'CENOURA', 'MANDIOCA', 'PIMENTAO',
    'TOMATE', 'ALFACE', 'ESPINAFRE', 'CEBOLA'
  ];

  const [palavraAtual, setPalavraAtual] = useState('');
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(6);
  const [inputLetra, setInputLetra] = useState('');
  const [jogoTerminado, setJogoTerminado] = useState(false);
  const [jogadorVenceu, setJogadorVenceu] = useState(false);

  const iniciarNovoJogo = () => {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraAtual(palavraAleatoria);
    setLetrasAdivinhadas([]);
    setLetrasErradas([]);
    setTentativasRestantes(6);
    setInputLetra('');
    setJogoTerminado(false);
    setJogadorVenceu(false);
  };

  const tentarLetra = () => {
    if (!inputLetra || inputLetra.length !== 1 || jogoTerminado) return;

    const letra = inputLetra.toUpperCase();

    if (letrasAdivinhadas.includes(letra) || letrasErradas.includes(letra)) {
      Alert.alert('Atenção!', 'Você já tentou essa letra!');
      setInputLetra('');
      return;
    }

    if (palavraAtual.includes(letra)) {
      setLetrasAdivinhadas([...letrasAdivinhadas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativasRestantes(tentativasRestantes - 1);
    }

    setInputLetra('');
  };

  const exibirPalavra = () => {
    return palavraAtual
      .split('')
      .map(letra => letrasAdivinhadas.includes(letra) ? letra : '_')
      .join(' ');
  };

  useEffect(() => {
    if (palavraAtual) {
      const palavraCompleta = palavraAtual.split('').every(letra => 
        letrasAdivinhadas.includes(letra)
      );

      if (palavraCompleta) {
        setJogadorVenceu(true);
        setJogoTerminado(true);
      }

      if (tentativasRestantes === 0) {
        setJogadorVenceu(false);
        setJogoTerminado(true);
      }
    }
  }, [letrasAdivinhadas, tentativasRestantes, palavraAtual]);

  useEffect(() => {
    iniciarNovoJogo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.title}>🎮 Jogo da Forca</Text>
          <Text style={styles.subtitle}>
            Adivinhe a palavra letra por letra!
          </Text>
        </View>

        <View style={styles.content}>
          
          {/* Desenho da Forca com SVG */}
          <ForcaSVG 
            erros={letrasErradas.length} 
            jogoTerminado={jogoTerminado}
            jogadorVenceu={jogadorVenceu}
          />

          {/* Palavra com underlines */}
          <View style={styles.palavraContainer}>
            <Text style={styles.palavraLabel}>Palavra:</Text>
            <Text style={styles.palavraTexto}>{exibirPalavra()}</Text>
          </View>

          {/* Informações do jogo */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Tentativas restantes: {tentativasRestantes}
            </Text>
            {letrasErradas.length > 0 && (
              <Text style={styles.infoText}>
                Erradas: {letrasErradas.join(', ')}
              </Text>
            )}
          </View>

          {/* Letras tentadas */}
          {(letrasAdivinhadas.length > 0 || letrasErradas.length > 0) && (
            <View style={styles.letrasTentadas}>
              <Text style={styles.letrasTentadasTitle}>Letras tentadas:</Text>
              
              {letrasAdivinhadas.length > 0 && (
                <View style={styles.letrasCorretas}>
                  <Text style={styles.letrasLabel}>✅ Corretas: </Text>
                  <Text style={styles.letrasValor}>{letrasAdivinhadas.join(', ')}</Text>
                </View>
              )}
              
              {letrasErradas.length > 0 && (
                <View style={styles.letrasErradasView}>
                  <Text style={styles.letrasLabel}>❌ Erradas: </Text>
                  <Text style={styles.letrasValor}>{letrasErradas.join(', ')}</Text>
                </View>
              )}
            </View>
          )}

          {/* Input de letra */}
          {!jogoTerminado && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={inputLetra}
                onChangeText={(text) => setInputLetra(text.replace(/[^a-zA-Z]/g, ''))}
                maxLength={1}
                placeholder="Digite uma letra"
                autoCapitalize="characters"
                onSubmitEditing={tentarLetra}
              />
              <TouchableOpacity style={styles.btnTentar} onPress={tentarLetra}>
                <Text style={styles.btnText}>Tentar</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Mensagem de fim de jogo */}
          {jogoTerminado && (
            <View style={[styles.mensagem, jogadorVenceu ? styles.vitoria : styles.derrota]}>
              {jogadorVenceu ? (
                <View>
                  <Text style={styles.mensagemTitle}>🎉 Parabéns! Você venceu!</Text>
                  <Text style={styles.mensagemText}>
                    A palavra era: <Text style={styles.palavraFinal}>{palavraAtual}</Text>
                  </Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.mensagemTitle}>💀 Que pena! Você perdeu!</Text>
                  <Text style={styles.mensagemText}>
                    A palavra era: <Text style={styles.palavraFinal}>{palavraAtual}</Text>
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* Botão novo jogo */}
          <TouchableOpacity style={styles.btnReiniciar} onPress={iniciarNovoJogo}>
            <Text style={styles.btnReiniciarText}>🔄 Novo Jogo</Text>
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
  header: {
    backgroundColor: '#2563eb',
    padding: 30,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
  },
  content: {
    padding: 20,
  },
  palavraContainer: {
    backgroundColor: '#f1f5f9',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  palavraLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#64748b',
    marginBottom: 10,
  },
  palavraTexto: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    letterSpacing: 8,
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 5,
  },
  letrasTentadas: {
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  letrasTentadasTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  letrasCorretas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  letrasErradasView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  letrasLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
  },
  letrasValor: {
    fontSize: 14,
    color: '#475569',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  btnTentar: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 30,
    borderRadius: 10,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mensagem: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  vitoria: {
    backgroundColor: '#dcfce7',
    borderWidth: 2,
    borderColor: '#16a34a',
  },
  derrota: {
    backgroundColor: '#fee2e2',
    borderWidth: 2,
    borderColor: '#dc2626',
  },
  mensagemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
    textAlign: 'center',
  },
  mensagemText: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
  },
  palavraFinal: {
    fontWeight: 'bold',
    color: '#1e293b',
  },
  btnReiniciar: {
    backgroundColor: '#64748b',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnReiniciarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});