import Styles from './Card.module.css'

export function Card() {
  return (
    <div className={Styles.container}>
      <img className={Styles.image} src="/images/brutal.png" />
      <h3 className={Styles.title}>Брутальная крепость</h3>
      <p>выбор для смелых и непоколебимых личностей, вроде Аски</p>
    </div>
  )
}