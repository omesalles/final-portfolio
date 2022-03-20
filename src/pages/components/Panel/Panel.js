import "./Panel.css";
import { useState, useEffect } from "react";

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
        {panelLeft.map((v, i) => {
          return (
            <a key ={i} href={"#" + v}>
              <p>{v}</p>
            </a>
          );
        })}
        <div className="vertical-line-right"></div>
        <div className="vertical-line-left"></div>
    </nav>
  );
}

function PanelDesktop(props) {
  return (
    <>
      <ContextMenu panelLeft={props.panelLeft}/>
      <div className="page-content">
        <PageContent
          title={props.title}
          panelMiddle={props.panelMiddle}
          panelLeft={props.panelLeft}
        />
        <br />
      </div>
      <aside className="aside-menu">
        <Resources listOfResources={props.panelRight} />
      </aside>
    </>
  );
}

function PanelTablet(props) {
  /* transform left side menu into one additional  menu item in the left */
  let copyPanelLeft = [...props.panelLeft];
  copyPanelLeft.push("Resources");

  return (
    <>
      <ContextMenu panelLeft={copyPanelLeft}/>
      <div className="page-content">
        <PageContent
          title={props.title}
          panelMiddle={props.panelMiddle}
          panelLeft={copyPanelLeft}
        />
        <Resources listOfResources={props.panelRight} />
        <br />
      </div>
    </>
  );
}

function PanelMobile(props) {
  /*show all in a row, the title and the corresponding paragraph*/ 
  return (
    <>
      <div className="page-content">
        <h1>{props.title}</h1>
        {props.panelLeft.map((v, i) => {
          return (
            <div key={i}>
              <span className="paragraph-content"></span>
              <h2 className="title-paragraph">{props.panelLeft[i]}</h2>
              <p>{props.panelMiddle[i]}</p>
            </div>
          );
        })}
        <Resources listOfResources={props.panelRight} />
        <br />
      </div>
    </>
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
      {props.listOfResources != null && 
        <>
          <span className="paragraph-content" id="Resources"></span>
          <h3>Resources</h3>
            {
              props.listOfResources.map(
                (v, i) => {
                  return (
                    <a key={i} href={v}>
                      <p>{v}</p>
                    </a>
                  );
                }
              )
            }
        </>
      }
    </>
  )
}

function PageContent(props) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.panelMiddle.map((v, i) => {
        return (
          <div key={i}>
            <span className="paragraph-content" id={props.panelLeft[i]}></span>
            <h2 className="title-paragraph">{props.panelLeft[i]}</h2>
            <p>{v}</p>
          </div>
        );
      })}
    </>
  );
}
