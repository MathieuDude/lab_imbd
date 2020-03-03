import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button } from 'react-native';
import SearchForm from './components/SearchForm';
import Header from './components/Header'
import FilmItem from './components/FilmItem'


export default function App(){

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
  },
  button: {
    width: '45%'
  },
});
