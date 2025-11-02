import { View, StyleSheet } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';

interface ForcaSVGProps {
  erros: number;
  jogoTerminado: boolean;
  jogadorVenceu: boolean;
}

export default function ForcaSVG({ erros, jogoTerminado, jogadorVenceu }: ForcaSVGProps) {
  return (
    <View style={styles.container}>
      <Svg width="200" height="250" viewBox="0 0 200 250">

        {}
        <Line x1="20" y1="230" x2="80" y2="230" stroke="#1e293b" strokeWidth="4"/>

        {}
        <Line x1="30" y1="230" x2="30" y2="20" stroke="#1e293b" strokeWidth="4"/>

        {}
        <Line x1="30" y1="20" x2="120" y2="20" stroke="#1e293b" strokeWidth="4"/>

        {}
        <Line x1="120" y1="20" x2="120" y2="45" stroke="#1e293b" strokeWidth="3"/>

        {}
        {erros >= 1 && (
          <Circle cx="120" cy="60" r="15" fill="none" stroke="#1e293b" strokeWidth="3"/>
        )}

        {}
        {erros >= 2 && (
          <Line x1="120" y1="75" x2="120" y2="140" stroke="#1e293b" strokeWidth="3"/>
        )}

        {}
        {erros >= 3 && (
          <Line x1="120" y1="90" x2="95" y2="115" stroke="#1e293b" strokeWidth="3"/>
        )}

        {}
        {erros >= 4 && (
          <Line x1="120" y1="90" x2="145" y2="115" stroke="#1e293b" strokeWidth="3"/>
        )}

        {}
        {erros >= 5 && (
          <Line x1="120" y1="140" x2="95" y2="170" stroke="#1e293b" strokeWidth="3"/>
        )}

        {}
        {erros >= 6 && (
          <Line x1="120" y1="140" x2="145" y2="170" stroke="#1e293b" strokeWidth="3"/>
        )}

        {}
        {jogoTerminado && !jogadorVenceu && (
          <>
            {}
            <Line x1="113" y1="55" x2="118" y2="60" stroke="#dc2626" strokeWidth="2"/>
            <Line x1="118" y1="55" x2="113" y2="60" stroke="#dc2626" strokeWidth="2"/>

            {}
            <Line x1="122" y1="55" x2="127" y2="60" stroke="#dc2626" strokeWidth="2"/>
            <Line x1="127" y1="55" x2="122" y2="60" stroke="#dc2626" strokeWidth="2"/>
          </>
        )}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});