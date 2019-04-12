import {configure, addDecorator, addParameters} from '@storybook/react'
import {withNotes} from '@storybook/addon-notes'
import {withKnobs} from '@storybook/addon-knobs'
import {withInfo} from '@storybook/addon-info'
import {withTests} from '@storybook/addon-jest'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {setConsoleOptions, withConsole} from '@storybook/addon-console'
import {create} from '@storybook/theming'
// import results from '../jest-lock.json'

addDecorator(withInfo)
addDecorator(withNotes)
addDecorator(withKnobs)
addParameters(
  {
    options: {
      theme: create({
        base: 'light',
        brandTitle: "Wagglio",
        brandUrl: "https://wagglio.co"
      }),
      /**
       * show story component as full screen
       * @type {Boolean}
       */
      isFullScreen: false,
      /**
       * display panel that shows a list of stories
       * @type {Boolean}
       */
      showNav: true,
      /**
       * display panel that shows addon configurations
       * @type {Boolean}
       */
      showPanel: true,
      /**
       * show addon panel as a vertical panel on the right
       * @type {Boolean}
       */
      panelPosition: false,
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS
      },
    }
  }
)

setConsoleOptions({
  panelExclude: [],
})
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
