import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,        
    marginBottom: 10,    
    fontWeight: 'bold', 
  },
  button: {
    backgroundColor: '#800080', 
    paddingVertical: 12, 
    paddingHorizontal: 40, 
    borderRadius: 10, 
    width: '80%', 
    alignItems: 'center', 
    marginTop: 20, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 12, 
    fontWeight: 'bold', 
  },
  image: {
    width: 100, 
    height: 100, 
    marginBottom: 20, 
  },
});

export default styles;