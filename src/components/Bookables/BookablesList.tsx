import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { bookables } from '../../static.json'

export default function BookablesList() {
  const [bookableIndex, setBookableIndex] = useState<number>(0)
  const group = 'Rooms'
  const bookablesInGroup = bookables.filter(b => b.group === group)

  function nextBookable() {
    setBookableIndex(i => ((i + 1) % bookablesInGroup.length))
  }

  return (
    <div>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((b, i) => (
          <li key={b.id} className={i === bookableIndex ? 'selected' : ''}>
            <button className="btn" onClick={() => setBookableIndex(i)}>
              {b.title}
            </button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={nextBookable} autoFocus>
        <FaArrowRight />
        <span>Next</span>
      </button>
    </div>
  )
}
