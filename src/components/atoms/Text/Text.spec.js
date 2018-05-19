import React from 'react'
import renderer from 'react-test-renderer'
import Text from '.'

test('Text is expected', () => {
  const text = renderer.create(
    <Text />
  ).toJSON()
  expect(text).toMatchSnapshot()
})
