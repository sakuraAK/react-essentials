function Button({children, clickHandler}) {
  return (
    <li>
      <button onClick={clickHandler}>{children}</button>
    </li>
  );
}


export default Button;
