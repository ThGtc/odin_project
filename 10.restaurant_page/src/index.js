import { createHeader }  from "./header";
import { createHome } from "./home";
import { createFooter } from "./footer"
const content = document.getElementById("content");

createHeader();
createHome();
createFooter();

export { content };
