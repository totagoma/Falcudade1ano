import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const Menu = ({ closeModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const menuOptions = [
    { label: 'Meus dados', icon: 'person' },
    { label: 'Forma de pagamento', icon: 'card-outline' },
    { label: 'Historico', icon: 'list' },
    { label: 'Configurações', icon: 'settings' },
    { label: 'Loja', icon: 'cart-outline' },
    { label: 'Dúvidas', icon: 'help-circle' },
    { label: 'Sair do app', icon: 'exit' },
  ];

  const handleMenuOptionPress = (label) => {
    setSelectedOption(label);
    // Implementar a lógica específica para cada opção aqui
  };

  return (
    <View style={styles.menuContainer}>
      {menuOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.menuOption,
            selectedOption === option.label && styles.selectedOption,
          ]}
          onPress={() => handleMenuOptionPress(option.label)}
        >
          <Ionicons name={option.icon} size={24} color="#333" />
          <Text style={styles.menuOptionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Fechar                  </Text>
      </TouchableOpacity>
    </View>
  );
};

Menu.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '50%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop:5,

  },
  selectedOption: {
    backgroundColor: '#f0f0f0',
  },
  menuOptionText: {
    marginLeft: 10,
    fontSize: 18,
  },
  cartIcon: {
    marginLeft: 'auto', 
  },
  closeButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: 'red',
  },
});

export default Menu;
