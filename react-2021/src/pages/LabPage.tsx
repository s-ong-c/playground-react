import { css } from '@emotion/react'
import LabSettings from '../components/LabSettings'

export type LabPageProps = {}

function LabPage(props: LabPageProps) {
  return (
    <div css={pageStyle}>
      <LabSettings />
      <div css={contentStyle}></div>
    </div>
  )
}

const pageStyle = css``

const contentStyle = css`
  padding-left: 22.5rem;
`

export default LabPage
