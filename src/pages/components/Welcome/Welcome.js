import { Panel } from "../Panel";

export function Welcome() {
  let component = "Welcome";
  let title = "Welcome";
  let panelLeft = [
    "Background",
    "About This Site",
    "Challenges",
    "The Course",
    "The Lecturers",
  ];
  let panelMiddle = [
    "This site was created after attending a front-end development course and contains:<br>" +
      "<li>A summary of key concepts I learnt there.</li>" +
      "<li>Links to resources to support further learning and tools to help in developing projects.</li>" +
      "The site is also a demonstration of some web-development techniques I practiced in the course." +
      "As all learning and most projects, it will continuously evolve, so it's not yet in its final form.",
    "This site is a single page application developed using React. Each of the top menu option opens a new page, thanks to React-Router library, " +
      "which is in fact a React component. These React components are all derived from a single one: a Panel component " +
      "that displays the left and right menus, and the page content.<br>" +
      "The contents in the page are laid out using a CSS Flex Box, with a header, a content page and footer. " +
      "The content page is then split into sections also using CSS Flex Box and the right and left menu are position on each side.<br>" +
      "The most distinctive characteristic of the site, apart from its black and white design, is its responsive design. The layout of " +
      " the page adapts to three screen-sizes: screens greater than 798px, than 328px and smaller screens. This responsive behaviour " +
      "is mostly achieved using media queries in the style sheet definition. However, I have used React to enhance this responsive behaviour" +
      " in two ways:<br>" +
      "<li>When the right menu disapears thanks to the styling, I add it as another item on the left menu.</li>" +
      "<li>When the screen decreases to that of an old mobile phone (328px), the whole content is transformed into an accordion control, " +
      "to facilitate the user navigation.</li>",
    "The main challenge, which is not fully resolved in this site, is the layout of the content. The sentences you are reading are plain " +
      " text with minimal HTML formatting. This is because the content comes from the JSX program that create the pages, and in there I can't " +
      "format it. There's the solution to use the dangerouslySetInnerHTML React tab, which is used here. In fact there are markdown tools that " +
      "facilitate editing this kind of variables within a JavaScript program, for instance <a href='https://mdxjs.com/'>mdx</a>, but I havent't " +
      "used it. <br> Another challenge is the presentation of links in the Mobile version. The links in the Resources section should be done " +
      "with the HashLink React component, so they take you to the right paragraph in the Resource page.<br> A third challenge is the alignment " +
      "of the right, middle and left headings. This is because the left and right are fixed in the screen, but the content moves with the page " +
      "scroll. A possible solution could be to add a scroll vertical bar to the content page, instead of relying on the page scroll.",
    "Info about the course",
    "Info about the lecturers",
  ];
  let panelRight = null;
  return (
    <Panel
      component={component}
      title={title}
      panelLeft={panelLeft}
      panelRight={panelRight}
      panelMiddle={panelMiddle}
    />
  );
}
