/*

How React Works ::
"React's core idea is to make building user interfaces (UIs) efficient and predictable.
Declarative UI: Instead of manually telling the browser how to change the UI, you just tell React what the UI should look like based on your data (state and props).
Virtual DOM: When your data changes, React first creates a lightweight, in-memory representation of the UI called the Virtual DOM.
Reconciliation (Diffing): React then compares this new Virtual DOM with the previous one. It efficiently figures out the absolute minimum changes needed to update the UI.
Real DOM Update: Finally, React updates only those specific, changed parts in the actual browser's Real DOM. This is much faster than re-rendering the entire page, making UIs feel very responsive.
Component-Based: It encourages breaking UIs into small, reusable pieces called components, making complex UIs easier to manage."

Drawbacks of React ::
Just a UI Library: It's only for UIs, so you need to choose separate libraries for things like routing, state management, or network requests. This adds initial setup complexity.
Learning Curve: For newcomers, concepts like JSX, the Virtual DOM, and hooks can be a bit challenging initially.
Fast-Paced Ecosystem: React and its ecosystem evolve rapidly, meaning developers need to stay updated with new features and best practices.
Prop Drilling: Without proper state management, passing data through many layers of components can become cumbersome (though Context API and state management libraries help with this)."

*/