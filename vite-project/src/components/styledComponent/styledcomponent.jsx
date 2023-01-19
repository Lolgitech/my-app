// THIS COMPONENT WILL BE USING CSS MODULES

import styles from './styles.module.css'

console.log(styles)

// function StyledComponent(props) {
//   return (
//     <section className={styles.wrapper}>
//       <h1 className={styles.title}>section </h1>
//     </section>
//   );
// }
// export defaul StyledComponent


function StyledComponent(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </header>
  );
}

export default StyledComponent

//const someVariable = "text"

//export default someVariable;
// export default StyledComponent;

// function StyledComponent(props) {
//   return (
//     <section className={styles.wrapper}>
//       <h1> Section </h1>
//       </section>
//   )
// }

// export default StyledComponent