import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  // onClick?: React.MouseEventHandler<HTMLButtonElement> 
};

const Button = ({children}: ButtonProps) => (
  <button className={styles.button}>
    {children}
  </button>
);

export default Button;
