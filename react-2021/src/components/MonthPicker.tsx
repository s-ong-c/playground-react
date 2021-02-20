import { css } from '@emotion/react'

export type MonthPickerProps = {
  minimum?: Value
  maximum?: Value
  value: Value
  onChange(value: Value): void
}

type Value = {
  month: number
  year: number
}
function MonthPicker(props: MonthPickerProps) {
  return <div css={block}>asasdd</div>
}

const block = css`
  bottom: 0;
  width: 18rem;
  height: 12rem;
  position: absolute;
  background: black;
  transform: translate3d(0, 100%, 0);
`
export default MonthPicker
