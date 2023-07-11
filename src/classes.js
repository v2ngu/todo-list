export class Projects {
  constructor(name) {
    this.name = name;
    this.Todos = [];
  }

  appendToDo(todo) {
    this.Todos.push(todo);
  }

  //Should create a new todo in the project
  buildProject() {
    
  }


}
class Todo {
  constructor(priority, title, description, date) {
    this.priority = priority;
    this.title = title;
    this.description = description;
    this.date = date;
  }

  get priority() {
    return this.priority;
  }

  get title() {
    return this.title;
  }

  get description() {
    return this.description;
  }

  get date() {
    return this.date;
  }
}

export class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
    this.eventListeners = {};
  }

  buildElement() {
    // Create element in DOM
    const realDom = document.createElement(this.elementType);

    // Add attributes to element
    for (const attribute in this.attributes) {
      if (this.attributes[attribute] === true ||
        this.attributes[attribute] === false) {
        realDom.toggleAttribute(attribute, this.attributes[attribute]);
      } else {
        realDom.setAttribute(attribute, this.attributes[attribute]);
      }
    }

    // Add event listeners:
    for (const event in this.eventListeners) {
      this.eventListeners[event].forEach((cb) => {
        realDom.addEventListener(event, cb);
      });
    }

    // Append children? Append text?
    if (this.text === undefined) {
      for (const child of this.children) {
        realDom.appendChild(child.buildElement());
      }
    } else {
      const realText = document.createTextNode(this.text);
      realDom.appendChild(realText);
    }
    return realDom;
  }

  setAttributes(object) {
    Object.assign(this.attributes, object);
    return this;
  }

  addChild(element) {
    this.text = undefined;
    this.children.push(element);

    return this;
  }

  setTextContent(string) {
    this.children = [];
    this.text = string;
    return this;
  }

  appendEventListener(event, callback) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].push(callback);
    } else {
      this.eventListeners[event] = [callback];
    }
    return this;
  }
}
