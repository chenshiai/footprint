/**
 * articles 目录
 */
import FrontEndSidebar from '../articles/front-end/sidebar'
import ExamplesSidebar from '../articles/examples/sidebar'
import VirepressSidebar from '../articles/vitepress/sidebar'
import GitSidebar from '../articles/git/sidebar'

import ExampleSidebar from '../example/sidebar'

/**
 * life 目录
 */
import NotesSidebar from '../life/notes/sidebar'

export default {
  ...FrontEndSidebar,
  ...ExamplesSidebar,
  ...VirepressSidebar,
  ...ExampleSidebar,
  ...GitSidebar,
  ...NotesSidebar
}