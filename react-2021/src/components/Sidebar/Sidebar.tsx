import { css } from "@emotion/react";

export type SidebarProps = {};

function Sidebar(props: SidebarProps) {
  return (
    <div css={sidebarStyle}>
      <div className="logo">LOGO</div>
    </div>
  );
}

const sidebarStyle = css`
  flex: 1;
  background: red;
  .logo {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export default Sidebar;
