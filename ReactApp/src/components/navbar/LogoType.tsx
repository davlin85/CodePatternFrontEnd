//Använder Single-responsibility principle då componenten ansvarar för en sak.
//Skulle även kunna vara Open–closed principle då det går att bygga på componenten.

import React from 'react'

export const LogoType = () => {
  return (
    <section id="logoType">
        <div className='logoTypeContainer'>
            Fixxo. 
        </div>
    </section>
  )
}
