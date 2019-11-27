import styled from 'styled-components'

export const HeaderContainer = styled.div.attrs(props => ({
	// bgStart: props.bgStart || '#FFF',
	// bgMiddle: props.bgMiddle || '#FFF',
	// bgEnd: props.bgEnd || '#FFF',
	// padding_bottom: props.padding_bottom || '',
	// padding_top: props.padding_top || '',
  // background_color: '#00ff00'
}))`
  width: 100%;
  height: 100%;
  background-color: ${props => props.background_color};
`
