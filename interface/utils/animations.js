import _animateStyle from '_/animate-style'
import _animateCoords from '_/animate-coords'
import _fromTo from '__/from-to'
import _style from '_/style'
import _append from '_/append'
import _remove from '_/remove'

const { round } = Math

export const animationDuration = 150

export const show = ($element, token) => {
  _animateStyle($element, { opacity: 0 }, { opacity: 1 }, { duration: animationDuration, token })

  _style($element, { display: 'initial' })
}

export const hide = ($element, token) =>
  _animateStyle($element, { opacity: 1 }, { opacity: 0 }, { duration: animationDuration, token }, () =>
    _style($element, { display: 'none' }))

export const hideShowSwitch = ($from, $to, hideToken, showToken) => {
  hide($from, hideToken)

  show($to, showToken)
}

export const showAppend = ($parent, $element) => {
  _animateStyle($element, { opacity: 0 }, { opacity: 1 }, { duration: animationDuration })

  _append($parent, $element)
}

export const hideRemove = $element =>
  _animateStyle($element, { opacity: 1 }, { opacity: 0 }, { duration: animationDuration }, $animatedElement => _remove($animatedElement))

export const moveTop = ($element, from, to) =>
  _animateCoords($element, { top: from }, { top: to }, { duration: animationDuration })

export const changeColor = ($element, key, from, to) =>
  _fromTo(from, to, { duration: animationDuration }, ({ r, g, b, a }) =>
    _style($element, { [key]: `rgba(${round(r)}, ${round(g)}, ${round(b)}, ${a.toFixed(5)})` }))

export const whitePrimary = ($element, key) =>
  _fromTo({ g: 255, b: 255 }, { g: 0, b: 222 }, { duration: animationDuration }, ({ g, b }) =>
    _style($element, { [key]: `rgba(255, ${round(g)}, ${round(b)}, 0.8)` }))

export const primaryWhite = ($element, key) =>
  _fromTo({ g: 0, b: 222 }, { g: 255, b: 255 }, { duration: animationDuration }, ({ g, b }) =>
    _style($element, { [key]: `rgba(255, ${round(g)}, ${round(b)}, 0.8)` }))
