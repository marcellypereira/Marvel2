import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  loginBox: {
    height: '80%',
    alignItems: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundColor: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  frontShapes1: {
    position: 'absolute',
    top: 14,
    left: 0,
  },
  saly: {
    position: 'absolute',
    right: 0,
    top: '2%',
  },
  frontShapes2: {
    position: 'absolute',
    right: 0,
    top: '10%',
  },
  overlayContainer: {
    paddingTop: '12%',
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 40,
    marginTop: '12%',
  },
  subTitle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#A4A4A4',
    maxWidth: 230,
    marginTop: '2%',
  },
  form: {
    marginBottom: '15%',
  },
  labelEmail: {
    color: '#A4A4A4',
  },
  label: {
    color: '#A4A4A4',
    marginTop: '4%',
  },
  labelContainer: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#696969',
    paddingHorizontal: 10,
    marginTop: 10,
    width: 330,
    height: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  input: {
    color: '#FFF',
    flex: 1,
  },
  icon: {
    color: '#A4A4A4',
    marginRight: '3%',
  },
  invalidMessage: {
    position: 'absolute',
    right: 0,
    top: '100%',
    color: '#ED1D2F',
    fontSize: 12,
  },
});
