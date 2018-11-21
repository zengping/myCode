import curline from './curline'
import marquee from './marquee'
import upload from './upload'

export default {
  init (Vue) {
    Vue.directive('curline', curline)
    Vue.directive('marquee', marquee)
    Vue.directive('upload', upload)
  }
}
