import { useState } from 'react'
import { CgProfile} from 'react-icons/cg';
import { FiEdit2} from 'react-icons/fi';

import { BiEditAlt} from 'react-icons/bi';
import { BsCameraVideo} from 'react-icons/bs';
import { MdDeleteOutline} from 'react-icons/md';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className='Title'>
        <h1>SOLO LINK</h1>
      </div>
      <div className='Nav'>
        <ul>
          <li>Home</li>
          <li>Add Project</li>
        </ul>
      </div>
      <div className='Bio'>
        <div className='profile'>
          <CgProfile className='prof-img'/>
          <h4>Username</h4>
        </div>
        <div className='mybio'>
          <p>This is my very loong bio</p>
          <p className='edit'>Edit Profile  <FiEdit2/> </p>
        </div>
      </div>

      <div className='projects'>
        <div className='text'>
          <h2>PROJECTS</h2>
        </div>
        <div className='card-container'>
          <div className='card'>
            <div className='image'>image</div>
            <h3>Titlee....</h3>
            <h4>DRAKE</h4>
            <button>STREAM</button>
            <div className='icons'>
              <BiEditAlt/>
              <BsCameraVideo/>
              <MdDeleteOutline/>
            </div>
          </div>

          <div className='card'>
            <div className='image'>image</div>
            <h3>Titlee....</h3>
            <h4>DRAKE</h4>
            <button>STREAM</button>
            <div className='icons'>
              <BiEditAlt/>
              <BsCameraVideo/>
              <MdDeleteOutline/>
            </div>
          </div>
          <div className='card'>
            <div className='image'>image</div>
            <h3>Titlee....</h3>
            <h4>DRAKE</h4>
            <button>STREAM</button>
            <div className='icons'>
              <BiEditAlt className='item'/>
              <BsCameraVideo className='item'/>
              <MdDeleteOutline className='item'/>
            </div>
          </div>
          <div className='card'>
            <div className='image'>image</div>
            <h3>Titlee....</h3>
            <h4>ririiiii</h4>
            <button>STREAM</button>
            <div className='icons'>
              <BiEditAlt className='item'/>
              <BsCameraVideo className='item'/>
              <MdDeleteOutline className='item'/>
            </div>
          </div>
          <div className='card'>
            <div className='image'>image</div>
            <h3>Titlee....</h3>
            <h4>DRAKE</h4>
            <button>STREAM</button>
            <div className='icons'>
              <BiEditAlt className='item'/>
              <BsCameraVideo className='item'/>
              <MdDeleteOutline className='item'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
