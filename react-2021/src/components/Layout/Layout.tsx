import { css } from "@emotion/react";

export type LayoutProps = {
  children: React.ReactNode;
};

export type SideProps = {
  children: React.ReactNode;
};

export type MainProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}

function Side({ children }: SideProps) {
  return <aside css={sidebarStyle}>{children}</aside>;
}

function Main({ children }: MainProps) {
  return <main css={mainStyle}>{children}</main>;
}

Layout.Side = Side;
Layout.Main = Main;

const sidebarStyle = css`
  width: 16rem;
  height: 100%;
  position: fixed;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
`;

const mainStyle = css`
  margin-left: 16rem;
  padding-left: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export default Layout;
