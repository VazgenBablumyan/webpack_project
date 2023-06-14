export function createElement(tagName, props = {}, ...children) {
    const tag = document.createElement(tagName);
  
    Object.keys(props).forEach((prop) => {
      tag.setAttribute(prop, props[prop]);
    });
  
    children.forEach((child) => {
      tag.append(child);
    });
  
    return tag;
  }
