import classes from './hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/heang.jpg'
          width={300}
          height={300}
          alt='An image showing Heang'
          layout='responsive'
        />
      </div>
      <h1>Hi, I'm Heang</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  )
}

export default Hero
