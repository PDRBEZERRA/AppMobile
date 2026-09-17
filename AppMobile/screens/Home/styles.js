import { StyleSheet } from 'react-native';
import { colors } from '../../components/Button/styles';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  topo: {
    backgroundColor: colors.navy,
    paddingTop: 70,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  saudacao: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
  },
  subtitulo: {
    color: '#AEB9CC',
    fontSize: 14,
    marginTop: 4,
  },
  card: {
    backgroundColor: colors.white,
    marginTop: -20,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardTitulo: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.gray,
  },
  cardValor: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.navy,
    marginTop: 6,
  },
  cardDescricao: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 12,
    lineHeight: 18,
  },
});
