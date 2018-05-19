import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
}
const defaultProps = {
  color: '#333'
}

const StyledText = styled.div`
  color: ${props => props.color};
`

const Text = ({
  children,
  color
}) => {
  return (
    <StyledText color={color}>
      {children}
    </StyledText>
  )
}

Text.propTypes = propTypes
Text.defaultProps = defaultProps

export default Text
