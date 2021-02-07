import React from 'react'
import './App.css'
import { Global, css } from '@emotion/react'
import AppLayout from './components/AppLayout'
import Sidebar from './components/Sidebar'
import { Route, Switch } from 'react-router-dom'
import LabPage from './pages/LabPage'
import WorkspacePage from './pages/WorkspacePage'
import ExplorePage from './pages/ExplorePage'

function App() {
  return (
    <>
      <AppLayout>
        <AppLayout.Side>
          <Sidebar />
        </AppLayout.Side>
        <AppLayout.Main>
          <Switch>
            <Route path={['/', '/lab']} exact>
              <LabPage />
            </Route>
            <Route path={'/workspace'}>
              <WorkspacePage />
            </Route>
            <Route path={'/expore'}>
              <ExplorePage />
            </Route>
          </Switch>
        </AppLayout.Main>
      </AppLayout>
      <Global styles={globalStyle} />
    </>
  )
}

const globalStyle = css`
  html {
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
`

export default App
