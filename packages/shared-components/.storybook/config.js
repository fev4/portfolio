import {configure, addDecorator, addParameters} from '@storybook/react'
import {withNotes} from '@storybook/addon-notes'
import {withKnobs} from '@storybook/addon-knobs'
import {withOptions} from '@storybook/addon-options'
import centered from '@storybook/addon-centered'
import {withInfo} from '@storybook/addon-info'
import {withTests} from '@storybook/addon-jest'
import {configureViewport, INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {setConsoleOptions, withConsole} from '@storybook/addon-console'
import {themes} from '@storybook/components'
// import results from '../jest-lock.json'

addDecorator(withInfo)
addDecorator(withNotes)
addDecorator(withKnobs)
addParameters(
  withOptions({
    theme: themes.dark,
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'Wagglio',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: '#',
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    goFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showStoriesPanel: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showAddonPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: true,
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: null,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
  }),
)
addDecorator(centered)
setConsoleOptions({
  panelExclude: [],
})
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
}

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports,
  },
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
