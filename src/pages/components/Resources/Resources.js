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
    "Agile",
    "Flexbox practice",
    "CSS cheatsheet",
    "HTML-cheatsheet",
    "CSS Specificity",
    "Reselect library",
  ];
  let panelRight = null;
  let panelMiddle = [
    "This <a href='https://www.w3schools.com/html/'>website</a> is the starting point for anything related with web development " +
      " comprehensive documenatation for HTML, CSS and JavaScript, and information about many tools related" +
      "to web development and programming in general. The section <a href='https://www.w3schools.com/howto/default.asp'>How To</a> is full of " +
      "ideas how to create common web functionalities",
    "<a href='https://developer.mozilla.org/en-US/docs/Web/'>MDN docs</a> is the technical reference for many things related to web development",
    "A <a href='http://www.csszengarden.com/'>demonstration</a> of what can be accomplished through CSS-based design. Check how the " +
      "style sheet completely transforms a webpage. The layouts can be a bit obscure and not easy to transfer to your own design.",
    "<a href='https://redux.js.org/introduction/getting-started'>Redux</a> is a JavaScript library that allows you to share information between " +
      "different parts of your web application ensuring consistent information in the various parts and taking care of the rendering",
    "<a href='https://redux.js.org/introduction/core-concepts'>Core Concepts | Redux</a>",
    "<a href='https://immutable-js.com/'>Library</a> for copying objects in JavaScript, respecting its immutability",
    "A 172 pages practical <a href='https://media.oiipdf.com/pdf/ceabcdca-01c2-4f97-95dd-a577f08b9169.pdf'> book</a> for those learning " +
      "JavaScript that focuses on the parts of the JavaScript language that will make you more a better programmer",
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
    "<a href='https://www2.deloitte.com/es/es/pages/technology/articles/conoce-todo-sobre-scrum.html'>Agile technicques</a>" +
      " for project management are very common in software development and certainly in web development. Have a look at this " +
      "<a href='https://www.scrum.org/'>website</a>.",
    "Have fun learning about flexbox in <a href='https://flexboxfroggy.com/#ca'>this webpage</a>",
    "<a href='" + process.env.PUBLIC_URL + "/CSS.pdf'>Here</a>",
    "<a href='" + process.env.PUBLIC_URL + "/HTML-CheatSheet.pdf'>Here</a>",
    "<a href='https://polypane.app/css-specificity-calculator/'>CSS Specificity</a> refers to which CSS styles will take preference when there are multiple " +
      "definitions for the same class/tag/id. If you write your CSS files with Visual Studio Code you can see the result of the specificity calculator when " +
      "hovering on the class definition.",
    "A <a href='https://github.com/reduxjs/reselect'>library</a> for creating memoized 'selector' functions. Commonly used with Redux, " +
      "but usable with any plain JS immutable data as well.",
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
