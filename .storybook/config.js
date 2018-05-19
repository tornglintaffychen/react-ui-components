import { configure, addDecorator } from '@storybook/react'
import React from 'react'
import styled, {
  ThemeProvider
} from 'styled-components'
import '@storybook/addon-knobs/register'
import { withKnobs } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

const theme = {
  colors: 'red'
}

addDecorator(withSmartKnobs)
addDecorator(withKnobs)
addDecorator((story) => (
    <div>
      { story() }
    </div>
))

function loadStories() {
    require('glob-loader!./stories.pattern')
}

configure(loadStories, module)
