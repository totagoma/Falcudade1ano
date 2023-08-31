import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Modal } from 'react-native';
import Menu from './menu'; // Importe o componente de menu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: -60,
  },
  profileBox: {
    width: 0,
    height: 0,
    backgroundColor: '#800080',
    marginRight: 40,
    marginTop: 100,
  },
  configIcon: {
    width: 40,
    height: 40,
  },
  userTable: {
    backgroundColor: '#800080', //roxo
    padding: 18,
    marginBottom: 600,
  },
  expandedNewsContainer: {
    backgroundColor: '#800080',
    padding: 10,
    marginBottom: 20,
    height: 320, // Aumenta a altura para acomodar notícias maiores
    marginTop: 600,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const UserData = [
  { id: '1', Nome: 'Senna', Pontos: '100', email: 'rmfiap@.com.br' },
  
];

const NewsData = [
  {
    id: '3',
    title: 'Nova Matriz Energética: O Brasil no Palco Global',
    content: '',
    imageUrl: 'https://shelltalks.evehub.com.br/wp-content/uploads/2023/08/OP2_001JPG_ShellTalks_2023-BannerSite.jpg',
  },
  // ... Adicione mais notícias
];

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleShellIconPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderUserData = ({ item }) => (
    <View style={styles.userTable}>
      <Text>Nome: {item.Nome}</Text>
      <Text>Pontos: {item.Pontos}</Text>
      <Text>Email: {item.email}</Text>
    </View>
  );

  const renderNewsData = ({ item }) => (
    <View style={styles.expandedNewsContainer}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Image source={{ uri: item.imageUrl }} style={{ width: '100%', height: '70%' }} />
      <Text>{item.content}</Text> 
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: 'yellow' }]}>
      <Image style={styles.profileBox}
      />
      <View style={styles.header}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={handleShellIconPress}>
          <Image source={require('./assets/shelbox.png')} style={styles.configIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={UserData}
        renderItem={renderUserData}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        data={NewsData}
        renderItem={renderNewsData}
        keyExtractor={(item) => item.id}
      />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        {/* Use o componente Menu aqui */}
        <Menu closeModal={closeModal} />
      </Modal>
    </View>
  );
};

export default App;
