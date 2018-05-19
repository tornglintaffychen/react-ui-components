import React from 'react'
import { storiesOf } from '@storybook/react'
import Text from '.'

const story = storiesOf('atoms/Text', module)
  .add('Torng-Lin Chen', () => {
    return (
      <Text color='#c00'>Torng-Lin Chen</Text>
    )
  })

export default story
