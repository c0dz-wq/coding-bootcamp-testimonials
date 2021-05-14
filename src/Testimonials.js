import React, { useState } from 'react'
import data from './data'
import IconPrev from './assets/svg/icon-prev.svg'
import IconNext from './assets/svg/icon-next.svg'

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const { image, name, title, quote } = data[index]

  const checkID = (id) => {
    if (id > data.length - 1) {
      return 0
    } else if (id < 0) {
      return data.length - 1
    }
    return id
  }

  const nextReview = () => {
    setIndex((index) => {
      const newIndex = index + 1
      return checkID(newIndex)
    })
  }

  const prevReview = () => {
    setIndex((index) => {
      const newIndex = index - 1
      return checkID(newIndex)
    })
  }

  return (
    <article>
      <section className='container'>
        <div className='img-container'>
          <img className='img' src={image} alt={name} />
          <div className='btn-container'>
            <button className='btn-prev' onClick={prevReview}>
              <img className='icon-prev' src={IconPrev} alt='Icon Previous' />
            </button>
            <button className='btn-next' onClick={nextReview}>
              <img className='icon-next' src={IconNext} alt='Icon Next' />
            </button>
          </div>
        </div>
        <div className='info-container'>
          <p className='quote'>{quote}</p>
          <div className='info'>
            <p className='name'>{name}</p>
            <p className='title'>{title}</p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Testimonials
