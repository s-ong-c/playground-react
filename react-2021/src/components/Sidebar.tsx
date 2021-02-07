import { css } from '@emotion/react'
import palette from '../lib/palette'
import SidebarItem from './SidebarItem'

export type SidebarProps = {}

function Sidebar(props: SidebarProps) {
  return (
    <div css={sidebarStyle}>
      <div className="logo">SONGC</div>
      <ul css={menuStyle}>
        <SidebarItem icon="flask" text="LAB" to="/" />
        <SidebarItem icon="workspace" text="WORKSPACE" to="workspace" />
        <SidebarItem icon="globe" text="EXPLORE" to="explore" />
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
  margin-left: -1rem;
`

export default Sidebar
