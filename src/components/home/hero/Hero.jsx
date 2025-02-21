import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle="WELCOME TO ACDAMIE" title="Best online Education" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum assumenda enim tempore optio odio, accusamus, reiciendis deserunt ex totam illo recusandae dicta reprehenderit. Quam, libero reiciendis? Illo sint et ullam laboriosam dicta debitis, facere soluta eveniet nostrum officiis. </p>
                <div className="button">
                    <button className="primary-btn">
                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button >
                        VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
      </section>
      <div className="marigin"></div>
    </>
  )
}

export default Hero
