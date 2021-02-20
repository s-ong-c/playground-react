import { css } from '@emotion/react'
import palette from '../../lib/palette'

export type InputBaseProps = {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

function InputBase({ className, style, children }: InputBaseProps) {
  return (
    <div className={className} css={wrapper} style={style}>
      {children}
    </div>
  )
}

const wrapper = css`
  border: 1px solid ${palette.blueGrey[50]};
  border-radius: 0.5rem;
  height: 2.5rem;
  background: white;
  color: ${palette.blueGrey[700]};
  font-size: 1rem;
  display: flex;
`

export default InputBase
