import Collections from './pages/CollectionsPage'
import Critters from './pages/CrittersPage'
import Settings from './pages/SettingsPage'
import * as React from 'react'

import './styles/global.scss'

export const enum PAGES {
  Collections,
  Critters,
  Settings
}

export default () => {
  const [page, setPage] = React.useState(PAGES.Collections) // TODO: Allow page switching

  return (
    <div>
      <Collections page={page} setPage={setPage} />
      <Critters page={page} setPage={setPage} />
      <Settings page={page} setPage={setPage} />
    </div>
  )
}
