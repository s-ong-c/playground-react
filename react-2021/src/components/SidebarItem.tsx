import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import palette from '../lib/palette'
import Icon, { IconType } from './Icons/Icon'

export type SidebarItemProps = {
  icon: IconType
  text: string
  to: string
}

function SidebarItem({ icon, text, to }: SidebarItemProps) {
  return (
    <li css={itemStyle}>
      <NavLink css={linkStyle} to={to} exact>
        <Icon name={icon} />
        <span>{text}</span>
      </NavLink>
    </li>
  )
}

const itemStyle = css``
const linkStyle = css`
  border-radius: 0.5rem;
  height: 3.7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: ${palette.blueGrey[600]};
  &:hover {
    background: ${palette.blueGrey[50]};
  }
  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
  span {
    font-size: 1.125rem;
    margin-left: 1rem;

  }
  &:active {
    background: ${palette.blueGrey[50]};
    color: ${palette.blueGrey[900]};
    span {
      font-weight: bold;
    }
  }
`

export default SidebarItem
