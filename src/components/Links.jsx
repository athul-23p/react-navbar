function Links(props) {
  return (
    <div id="links-container">
      <ul className="d-flex">
        {props.links.map((el) => (
          <li className="nav-links">
            <a href="/">{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Links;