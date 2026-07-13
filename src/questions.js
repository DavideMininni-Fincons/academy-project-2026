export const quizData = [
  {
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "font-style", "text-transform", "text-decoration"],
    correct: 0
  },
  {
    question: "Which attribute selector targets an anchor (<a>) element only if it possesses a 'target' attribute, regardless of its assigned value?",
    options: ["a.target", "a::target", "a[target]", "a:target"],
    correct: 2
  },
  {
    question: "How do you apply the same CSS styles to both <h1> and <p> elements at the same time?",
    options: ["h1 p", "h1 + p", "h1, p", "h1 > p"],
    correct: 2
  },
  {
    question: "Which functional pseudo-class is used to match elements that do NOT match a list of specified selectors?",
    options: [":except()", ":exclude()", ":without()", ":not()"],
    correct: 3
  },
  {
    question: "In a standard Flexbox layout container (row direction), which property is used to vertically align the items along the cross-axis?",
    options: ["justify-content", "align-items", "vertical-align", "flex-pack"],
    correct: 1
  },
  {
    question: "Which CSS property is used to create rounded corners for an element?",
    options: ["border-round", "corner-radius", "border-radius", "box-radius"],
    correct: 2
  },
  {
    question: "What is the correct CSS standard syntax convention used to differentiate a pseudo-element from a pseudo-class?",
    options: [
      "Pseudo-classes use a single colon (:), pseudo-elements use double colons (::)",
      "Pseudo-classes use double colons (::), pseudo-elements use a single colon (:)",
      "Pseudo-classes use a period (.), pseudo-elements use an hashtag (#)",
      "There is no syntactic difference in modern CSS standards"
    ],
    correct: 0
  },
  {
    question: "Which CSS property is strictly mandatory for a '::before' or '::after' pseudo-element to render visually on a webpage?",
    options: ["display", "position", "width", "content"],
    correct: 3
  },
  {
    question: "Which property allows you to define clean layout spacing spacing between items inside a Grid or Flexbox container without modifying individual child margins?",
    options: ["margin-space", "gap", "padding-distribution", "flex-spacing"],
    correct: 1
  },
  {
    question: "Which pseudo-class is used to style an element when the user hovers the mouse over it?",
    options: [":active", ":focus", ":hover", ":visited"],
    correct: 2
  },
  {
    question: "An element configured with 'position: absolute;' computes its coordinate map adjustments relative to which boundary block?",
    options: [
      "Always relative to the root HTML <body> tag element boundary",
      "The nearest ancestor element that has an active position property value other than 'static'",
      "The nearest sibling element located directly next to it in the document object tree",
      "Always relative to the initial browser window window viewport"
    ],
    correct: 1
  },
  {
    question: "Which property is used to change the text color of an element in CSS?",
    options: ["color", "text-color", "font-color", "content-color"],
    correct: 0
  },
  {
    question: "What is the main difference between 'display: none' and 'visibility: hidden'?",
    options: [
      "They do the exact same thing.",
      "'display: none' hides the element but keeps its space; 'visibility: hidden' completely removes it.",
      "'display: none' removes the element from the layout; 'visibility: hidden' hides it but leaves a blank space.",
      "'visibility: hidden' only works on images and links."
    ],
    correct: 2
  },
  {
    question: "Which of the following selectors has the highest specificity weight?",
    options: ["button[active]:not(:disabled):hover", "#sidebar ", "*", "dialog:state(has-intermediate-element):has(h1:focus-visible)"],
    correct: 1
  },
  {
    question: "How do you center the text inside a paragraph (<p>) element?",
    options: ["align: center", "content-align: center", "margin: center", "text-align: center"],
    correct: 3
  }
];