import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p>This is the about page for our Next.js app.</p>
    </div>
  );
}