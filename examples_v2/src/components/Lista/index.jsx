import React, { useState } from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Lista({ item }) {
  const [feed, setFeed] = useState(item)

  function mostraLikes() {
    if (feed.qtdLike <= 0) {
      return
    }

    return (
      <Text style={styles.likes}>{feed.qtdLike} {feed.qtdLike > 1 ? 'curtidas' : 'curtida'}</Text>
    )
  }

  function carregaIcone(){
    return feed.like ? require('../../img/likeada.png') : require('../../img/like.png')
  }

  function like() {
    if (feed.like) {
      setFeed({
        ...feed,
        like: false,
        qtdLike: feed.qtdLike - 1,
      })
    } else {
      setFeed({
        ...feed,
        like: true,
        qtdLike: feed.qtdLike + 1,
      })
    }
  }

  return (
    <View style={styles.areaFeed}>
      <View style={styles.viewPerfil}>
        <Image source={{ uri: item.imgPerfil }} style={styles.imgPerfil} />

        <Text style={styles.nomeUsuario}>{item.nome}</Text>
      </View>

      <Image style={styles.imgPublicacao} source={{ uri: item.imgPublicacao }} resizeMode='cover' />

      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={like}>
          <Image source={carregaIcone()} style={styles.iconeLike} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image source={require('../../img/send.png')} style={styles.iconeLike} />
        </TouchableOpacity>
      </View>

      {mostraLikes()}

      <View style={styles.viewRodape}>
        <Text style={styles.nomeRodape}>{item.nome}</Text>
        <Text style={styles.descricaoRodape}>{item.descricao}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000000'
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  imgPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imgPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5
  },
  iconeLike: {
    width: 33,
    height: 33
  },
  btnSend: {
    paddingLeft: 10
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  descricaoRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5
  }
})