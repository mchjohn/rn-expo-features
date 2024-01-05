import { StyleSheet } from 'react-native'

export const SHEET_HEIGHT = 220
export const SHEET_OVER_DRAG = 20

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SHEET_HEIGHT,
    backgroundColor: '#545B77',

    position: 'absolute',
    bottom: -SHEET_OVER_DRAG * 1.2,
  },
  title: {
    color: '#F2D8D8',
    fontSize: 18,
    fontWeight: 'bold',

    margin: 24,
  },
  dragIcon: {
    marginTop: 16,
    alignSelf: 'center',
  }
})
