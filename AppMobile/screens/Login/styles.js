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
    paddingBottom: 50,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  marca: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 1,
  },
  marcaSub: {
    color: '#AEB9CC',
    fontSize: 11,
    letterSpacing: 1,
    marginTop: 2,
  },
  titulo: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.white,
    marginTop: -24,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 24,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardTitulo: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.navy,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.gray,
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  espaco: {
    height: 12,
  },
  cadastroTexto: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: 13,
    marginTop: 16,
  },
  cadastroLink: {
    color: colors.blue,
    fontWeight: '700',
  },
});
