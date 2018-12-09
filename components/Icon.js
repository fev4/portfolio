import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'

const StyledIcon = styled(FontAwesomeIcon)`
  color: red;
`

const Icon = (props) => {
  return (
    <Motion
      defaultStyle={{ opacity: 0 }}
      style={{
        opacity: spring(1,{stiffness: 10, damping: 17}),
      }}
    >
      {style => (
        <StyledIcon 
          style={{
            opacity: style.opacity,
          }}
          icon={[props.iconprefix, props.iconname]} fixedWidth />
      )}
    </Motion>
  );
}

Icon.propTypes = {
  iconprefix: PropTypes.string.isRequired,
  iconname: PropTypes.string.isRequired
}

// Icon.defaultProps = {}

export default Icon