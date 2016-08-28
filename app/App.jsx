import React from 'react'
import { Link } from 'react-router'
import { I18n } from 'react-redux-i18n'

export default function App({ children }) {
  return (
    <div>
      <h1>{I18n.t('home.obey')}</h1>
      <Link to="/users/new">{I18n.t('home.new_user')}</Link>
      &nbsp;
      <Link to="/">{I18n.t('home.home')}</Link>
      &nbsp;
      <Link to="/recipes">{I18n.t('home.recipes')}</Link>
      {children}
    </div>
  )
}
