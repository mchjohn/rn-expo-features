import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, TouchableOpacity } from 'react-native'

import { Sheet } from '../../components/Sheet'

import { styles } from './styles'

export function Home() {
  const [sheetIsOpen, setIsOpen] = useState(false)

  const toggleSheet = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={toggleSheet}>
        <Ionicons
          name='options'
          color='#F2D8D8'
          size={24}
        />
      </TouchableOpacity>

      {sheetIsOpen && <Sheet onClose={toggleSheet} />}
    </View>
  )
}
