import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { Video, ResizeMode } from 'expo-av';

export default function App() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <View style={styles.container}>

      <Video
        source={require('./assets/background.mp4')}
        style={StyleSheet.absoluteFillObject}
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted
        shouldPlay
      />


      <View style={styles.content}>
        <Text style={styles.titulo}>Prueba Beta</Text>    

        <Text style={styles.subtitulo}>Bienvenido</Text>

        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#aaa"
          style={styles.input}
          onChangeText={(texto) => setCorreo(texto)}
        />

        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={contrasena}
          onChangeText={(texto) => setContrasena(texto)}
          secureTextEntry={true}
        />

        <Pressable
          style={styles.pressable}
          onPress={() => alert(`Hola ${correo}`)}
        >
          <Text style={styles.textoBoton}>Iniciar sesión</Text>
        </Pressable>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    elevation: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  subtitulo: {
    fontSize: 18,
    color: '#ddd',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    color: '#fff',
  },
  pressable: {
    backgroundColor: '#6f00ff',
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
  },
});