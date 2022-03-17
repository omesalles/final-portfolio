import "./Panell.css";

export function Panell(props) {
  return (
    <div className="page-container">
      <nav className="menu-contextual-menu">
        <ul>
          {props.panellLeft.map((v, i) => {
            return <Link to={{hash: "#"+{i}}}
                      <li key={i}>{v}</li>
                    </Link>;
          })}
        </ul>
      </nav>
      <div className="page-content">
        <h1>{props.title}</h1>
        {props.panellMiddle.map((v, i) => {
          return <p key={i} id={i}>{v}</p>;
        })}
      </div>
      <aside className="aside-menu">
        {props.panellRight.map((v, i) => {
          return <p key={i}>{v}</p>;
        })}
      </aside>
    </div>
  );
}
