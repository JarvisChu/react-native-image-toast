import {Easing} from 'react-native'

const ToastDuration = {
    FOREVER: 100000000,
    LONG: 3500,
    SHORT: 2000
}

const ToastInHeight = 120

const ToastInOutDuration = 240

const ToastPosition = {
    TOP: 1,
    CENTER: 0,
    BOTTOM: -1
}

const ToastDefaultOpt = {
    data: '',  //required
    duration: ToastDuration.SHORT,
    position: ToastPosition.BOTTOM,
    inEasing: Easing.elastic(1),
    textColor: 'white',
    backgroundColor: 'black',
    icon: undefined,
    isShowShadow: true,
    toastInHeight: ToastInHeight,
    toastInOutDuration: ToastInOutDuration,
}

const ModalDefaultOpt = {
    data: '',  //required
    position: ToastPosition.BOTTOM,
    inEasing: Easing.elastic(1),
    textColor: 'white',
    backgroundColor: 'black',
    icon: undefined,
    onRequestClose: undefined
}

export {
    ToastDuration,ToastInOutDuration,ToastInHeight,ToastPosition,ToastDefaultOpt,ModalDefaultOpt
}
