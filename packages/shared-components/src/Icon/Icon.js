import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { Spring, config } from 'react-spring/renderprops.cjs'

const StyledIcon = styled(FontAwesomeIcon)`
  color: red;
`

const Icon = (props) => {
  return (
    <Spring
      config={config.molasses}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {styles => (
        <StyledIcon 
          style={styles}
          icon={[props.iconprefix, props.iconname]}
          fixedWidth
        />
      )}
    </Spring>
  );
}

Icon.propTypes = {
  iconprefix: PropTypes.string.isRequired,
  iconname: PropTypes.string.isRequired
}

// Icon.defaultProps = {}

export default Icon