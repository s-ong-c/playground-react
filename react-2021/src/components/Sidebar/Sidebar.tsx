import { css } from '@emotion/react'
import palette from '../../lib/palette'
import Icon from '../Icons/Icon'

export type SidebarProps = {}

function Sidebar(props: SidebarProps) {
  return (
    <div css={sidebarStyle}>
      <div className="logo">SONGC</div>
      <ul css={menuStyle}>
        <li>
          <Icon name={'flask'} />
        </li>
      </ul>
    </div>
  )
}

const sidebarStyle = css`
  flex: 1;
  .logo {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${palette.blueGrey[900]};
  }
`

const menuStyle = css`
  list-style: none;
  padding: 0;
  margin-top: 5rem;
`

export default Sidebar
