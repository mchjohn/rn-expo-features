import Animated,
{
  runOnJS,
  withSpring,
  withTiming,
  SlideInDown,
  SlideOutDown,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

import { styles, SHEET_HEIGHT, SHEET_OVER_DRAG } from './styles'

type Props = {
  onClose(): void;
}

export function Sheet({ onClose }: Props) {
  const offset = useSharedValue(0)

  function closeSheet() {
    offset.value = 0
    onClose()
  }

  const pan = Gesture.Pan().onChange((event) => {
    const offsetDelta = event.changeY + offset.value
    const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta)
    
    offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)
  })
  .onFinalize(() => {
    if (offset.value < SHEET_HEIGHT / 3) {
      offset.value = withSpring(0)
    } else {
      offset.value = withTiming(SHEET_HEIGHT, {}, () => {
        runOnJS(closeSheet)()
      })
    }
  })

  const translateY = useAnimatedStyle(() => ({
    transform: [{
      translateY: offset.value
    }]
  }))

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[styles.container, translateY]}
        exiting={SlideOutDown}
        entering={SlideInDown.springify().damping(15)}
      >
        <MaterialCommunityIcons
          name='drag-horizontal'
          color='#F2D8D8'
          size={24}
          style={styles.dragIcon}
        />

        <Text style={styles.title}>OPÇÕES</Text>
      </Animated.View>
    </GestureDetector>
  )
}
