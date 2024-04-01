import React from 'react'

const menuLinks = [
  { href: '/',text: 'Home'},
  { href: '/data',text: 'Data'},
  { href: '/blog',text: 'Blog'},
  { href: '/contact',text: 'Contact'}
  ]

const HomePage = () => {
  return (
    <main className=''>
      <nav className=''>
        <div>
          {/* logo */}
          <div>
            the Dataverse
          </div>
          {/* navbar */}
          <ul> 
              {menuLinks.map((link)=>(
                <li key={link.href} className=''>
                  <a href={link.href} className=''>{link.text}</a>
                </li>
              ))}
          </ul>
        </div>
      </nav>
      <div className=''>

      </div>

    </main>
  )
}

export default HomePage