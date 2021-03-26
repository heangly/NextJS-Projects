import classes from './Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/me.jpg'
          alt='heang image'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Heang</h1>
      <p>
        I blog about web development - especially frontend framworks like
        Angular or React
      </p>
    </section>
  )
}

export default Hero
