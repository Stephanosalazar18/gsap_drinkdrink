import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      }
    })

    parallaxTimeline
      .from('#c-left-leaf', {
        x: -100,
        y: 100,
      })
      .from('#c-right-leaf', {
        x: 100,
        y: 100,
      })
  })

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />

      <div className='list'>
        <div classname="popular">
          <h2> Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({ id, name, price, count, detail }) => (
              <li key={id}>
                <div classname="md:me-28">
                  <h3>{name}</h3>
                  <p>{count} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div classname="loved">
          <h2> Most loved mocktails:</h2>
          <ul>
            {mockTailLists.map(({ id, name, price, count, detail }) => (
              <li key={id}>
                <div classname="md:me-28">
                  <h3>{name}</h3>
                  <p>{count} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Cocktails