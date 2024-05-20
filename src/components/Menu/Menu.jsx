import React, { Fragment } from 'react'

import "./menu.css"

function Menu() {
  return (
    <Fragment>
        <menu className='mb-10 overflow-x-auto scroll-smooth'>
            <ul className='flex justify-evenly gap-x-10 px-8 py-6'>
                <li><button>Action</button></li>
                <li><button>Adventures</button></li>
                <li><button>Drama</button></li>
                <li><button>Sci-Fi</button></li>
                <li><button>Family</button></li>
                <li><button>Horror</button></li>
            </ul>
        </menu>
    </Fragment>
  )
}

export default Menu