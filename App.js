import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const[numero,setNumero] = useState('');
  const[nome,setNome] = useState('');
  const[contatos,setContatos] = useState([]);
  const[contadorNomes,setContadorNomes] = useState(0);
  const[contadorNumeros,setContadorNumeros] = useState(1000);

  const capturarNumero = (numero)=>{
    setNumero(numero);
  }

  const capturarNome = (nome)=>{
    setNome(nome);
  }

  const adicionarContato = () =>{
    setContatos((contatos)=>{
      setContadorNomes(contadorNomes+1);
      setContadorNumeros(contadorNumeros+1);
      return[{key: contadorNomes.toString(),value:nome},{key: contadorNumeros.toString(),value:numero},...contatos]
    });
    setNome('');
    setNumero('');
  }

  return (
    <View style={styles.telaPrincipalView}>
      <View>
        <Text>Novo contato</Text>
        <TextInput style={styles.estiloTextInput}
          placeholder='Nome'
          value={nome}
          onChangeText={capturarNome}
        />
        <TextInput style={styles.estiloTextInput}
          placeholder='Número'
          value = {numero}
          onChangeText={capturarNumero}
        />
        <Button
          title='Adicionar'
          onPress={adicionarContato}
        />
      </View>
        <Text>Contatos</Text>
      <View style={styles.lembreteView}>
        <FlatList
          data={contatos}
          renderItem={
            nome =>(
              <View style={styles.itemNaLista}>
                  <Text>{nome.item.value}</Text>
              </View>
            ),
            numero =>(
              <View style={styles.itemNaLista}>
                  <Text>{numero.item.value}</Text>
              </View>
            )          
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  estiloTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 4,
    padding: 4
  },
  telaPrincipalView: {
    padding: 50
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#EEE',
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
  },
  lembreteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
