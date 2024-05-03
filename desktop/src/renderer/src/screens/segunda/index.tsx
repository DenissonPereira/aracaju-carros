import { Link } from 'react-router-dom'

import './segunda.sass'

export function Segunda(): JSX.Element {
  return (
    <div className="bg">
      <Link to="/outra">click aqui</Link>
    </div>
  )
}
