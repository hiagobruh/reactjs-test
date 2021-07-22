import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFound from './notFound'
import Landing from '../pages/landing/landing.container'
import CharacterList from '../pages/characterList/characterList.container'
import StoryList from '../pages/storyList/storyList.container'
import CreatorList from '../pages/creatorList/creatorList.container'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/characters' component={CharacterList} />
        <Route path='/stories' component={StoryList} />
        <Route path='/creators' component={CreatorList} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
