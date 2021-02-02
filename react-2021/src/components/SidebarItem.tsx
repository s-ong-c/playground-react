import { css } from '@emotion/react'
import palette from '../lib/palette'
import Icon, { IconType } from './Icons/Icon'

export type SidebarItemProps = {
  icon: IconType
  text: string
}

function SidebarItem({ icon, text }: SidebarItemProps) {
  return (
    <li css={itemStyle}>
      <Icon name={icon} />
      <span>{text}</span>
    </li>
  )
}

const itemStyle = css`
  display: flex;
  svg {
    color: ${palette.cyan[600]};
  }
`

export default SidebarItem
