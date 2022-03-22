import { Panel } from "../Panel";

export function Resources() {
  let title = "Resources";
  let panelLeft = [
    "W3Schools",
    "MDN Web Docs",
    "CSS Zen Garden",
    "Redux",
    "Redux Core Concepts",
    "immutable",
    "JavaScript - The Good Parts",
    "WebFlow",
    "A Complete Guide to Flexbox",
    "The CSS battle",
    "Yarn and npm",
    "node.js",
    "Material Design",
  ];
  let panelRight = null;
  let panelMiddle = [
    "This <a href='https://www.w3schools.com/html/'>website</a> is the starting point for anything related with web development " +
      " comprehensive documenatation for HTML, CSS and JavaScript, and information about many tools related" +
      "to web development and programming in general. The section <a href='https://www.w3schools.com/howto/default.asp'>How To</a> is full of " +
      "ideas how to create common web functionalities",
    "<a href='https://developer.mozilla.org/en-US/docs/Web/'>MDN docs</a> is the technical reference for many things related to web development",
    "A demonstration of what can be accomplished through CSS-based design. Check how the style sheet completely transforms a webpage.",
    "<a href='https://redux.js.org/introduction/getting-started'>Redux</a> is a JavaScript library that allows you to share information between " +
      "different parts of your web application ensuring consistent information in the various parts and taking care of the rendering",
    "<a href='https://redux.js.org/introduction/core-concepts'>Core Concepts | Redux</a>",
    "<a href='https://immutable-js.com/'>Library</a> for copying objects in JavaScript, respecting its immutability",
    "A 172 pages practical book for those learning JavaScript that focuses on the parts of the JavaScript language that will make you more a better programmer",
    "Webflow is a SaaS application that allows building websites using visual editing software.",
    "This <a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'>page</a> explanations about Flex Box are very graphical and easy to follow. ",
    "This <a href='https://cssbattle.dev/play/1'>page</a> proposes you to small CSS challenges.",
    "<a href='https://yarnpkg.com/getting-started'>Yarn</a> and <a href='https://docs.npmjs.com/about-npm'>npm</a> are package managers. " +
      "They allow you to add pre-build packages to your web applications. npm is also a registry of many useful JavaScript packages.",
    "<a href='https://nodejs.org/en/'>Node.js</a> is a back-end JavaScript runtime environment that executes JavaScript code outside a web browser. " +
      " Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce " +
      "dynamic web page content before the page is sent to the user's web browser.",
    "<A HREF='https://material.io/design'>Material Design</a> is a design language developed by Google based on principles of good design. " +
      "Even without learning the language, one cas extrapolate the good design practices into web apps.",
  ];
  return (
    <article className="resources">
      <Panel
        title={title}
        panelLeft={panelLeft}
        panelRight={panelRight}
        panelMiddle={panelMiddle}
      />
    </article>
  );
}
