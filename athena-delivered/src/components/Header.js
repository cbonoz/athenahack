import { Link } from 'react-router-dom'
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/patients'>Dashboard</Link></li>
        <li><Link to='/patients'>Patients</Link></li>
        <li><Link to='/create'>Create</Link></li>
      </ul>
    </nav>
  </header>
)