import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './layout.vue'
import './font/font.css'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
}