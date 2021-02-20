import { css } from '@emotion/react'
import palette from '../lib/palette'
import LabSettingsSection from './LabSettingsSection'
import MonthPickerInput from './MonthPickerInput'

export type LabSettingsProps = {}

function LabSettings(props: LabSettingsProps) {
  return (
    <div css={blockStyle}>
      <LabSettingsSection title="Test Period">
        <MonthPickerInput />
      </LabSettingsSection>
    </div>
  )
}

const blockStyle = css`
  position: fixed;
  background: ${palette.grey[100]};
  width: 22.5rem;
  height: calc(100% - 6rem);
  padding: 2rem;
`

export default LabSettings
