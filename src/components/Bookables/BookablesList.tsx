import { useState } from 'react'
import { bookables } from '../../static.json'

export default function BookablesList() {
  const [bookableIndex, setBookableIndex] = useState<number>(0)
  const group = 'Rooms'
  const bookablesInGroup = bookables.filter(b => b.group === group)

  return (
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b, i) => (
        <li key={b.id} className={i === bookableIndex ? 'selected' : ''}>
          <button className="btn" onClick={() => setBookableIndex(i)}>
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  )
}
