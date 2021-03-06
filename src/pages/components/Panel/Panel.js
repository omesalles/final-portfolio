import { Accordio } from "../Accordio";
import "./Panel.css";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export function Panel(props) {
  const width = useWidth();
  return (
    <>
      {width > 768 ? (
        <PanelDesktop
          title={props.title}
          panelLeft={props.panelLeft}
          panelRight={props.panelRight}
          panelMiddle={props.panelMiddle}
        />
      ) : width > 328 ? (
        <PanelTablet
          title={props.title}
          panelLeft={props.panelLeft}
          panelRight={props.panelRight}
          panelMiddle={props.panelMiddle}
        />
      ) : (
        <PanelMobile
          title={props.title}
          panelLeft={props.panelLeft}
          panelRight={props.panelRight}
          panelMiddle={props.panelMiddle}
        />
      )}
    </>
  );
}

function ContextMenu({ panelLeft }) {
  return (
    <nav className="context-menu">
      <span className="paragraph-content"></span>
      <h3>Page Index</h3>
      {panelLeft.map((v, i) => {
        return (
          <a key={i} href={"#" + v}>
            <p>{v}</p>
          </a>
        );
      })}
    </nav>
  );
}

function PanelDesktop(props) {
  return (
    <main>
      <ContextMenu panelLeft={props.panelLeft} />
      <div className="page-content">
        <PageContent
          title={props.title}
          panelMiddle={props.panelMiddle}
          panelLeft={props.panelLeft}
        />
        <br />
        <br />
      </div>
      <aside className="aside-menu">
        <Resources listOfResources={props.panelRight} />
      </aside>
    </main>
  );
}

function PanelTablet(props) {
  /* transform left side menu into one additional  menu item in the left */
  let copyPanelLeft = [...props.panelLeft];
  if (props.panelRight != null) {
    copyPanelLeft.push("Resources");
  }

  return (
    <main>
      <ContextMenu panelLeft={copyPanelLeft} />
      <div className="page-content">
        <PageContent
          title={props.title}
          panelMiddle={props.panelMiddle}
          panelLeft={copyPanelLeft}
        />
        <Resources listOfResources={props.panelRight} />
        <br />
        <br />
        <br />
      </div>
    </main>
  );
}

function PanelMobile(props) {
  /*build and accordio object */
  let accordioObject = props.panelLeft.reduce(
    (o, key, i) => ({ ...o, [key]: { text: props.panelMiddle[i] } }),
    {}
  );
  if (props.panelRight != null) {
    let resourcesList = "<p>" + props.panelRight.join("</p><p>") + "</p>";
    let Resources = { text: resourcesList };
    accordioObject = { ...accordioObject, Resources };
  }

  return (
    <main>
      <div className="page-content">
        <span id="top"></span>
        <h1>{props.title}</h1>
        <Accordio menuItems={accordioObject} />
        <br />
        <br />
      </div>
    </main>
  );
}

function useWidth() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [width, setWidth] = useState(undefined);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return width;
}

function Resources(props) {
  return (
    <>
      {props.listOfResources != null && (
        <>
          <span className="paragraph-content" id="Resources"></span>
          <h3>Resources</h3>
          {props.listOfResources.map((v, i) => {
            return (
              <HashLink key={i} to={"/Resources#" + v}>
                <p>{v}</p>
              </HashLink>
            );
          })}
        </>
      )}
    </>
  );
}

function PageContent(props) {
  return (
    <>
      <span id="top"></span>
      <h1>{props.title}</h1>
      {props.panelMiddle.map((v, i) => {
        return (
          <div key={i}>
            <span
              className="paragraph-content-position"
              id={props.panelLeft[i]}
            ></span>
            <h2 className="title-paragraph">{props.panelLeft[i]}</h2>
            <section>
              <p
                className="paragraph-content"
                dangerouslySetInnerHTML={{ __html: v }}
              />
            </section>
          </div>
        );
      })}
    </>
  );
}
