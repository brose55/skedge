Your code looks well-structured and adheres to common React best practices. Here are some aspects that stand out positively:

1. **Component Modularity**: You've broken down the logic into smaller components (`Daily`, `PastInterests`, `InterestForm`, `OptionsForm`, etc.), which is great for maintainability and readability.

2. **State Management**: The state is well-managed using `useState` and `useEffect` hooks. You're also passing down state and handlers as props, which keeps your components loosely coupled and makes the logic easier to follow.

3. **Error Handling**: You've included error handling, particularly with Axios requests, which is crucial for a good user experience.

4. **UX Considerations**: You've thought about user experience details, like resetting the form's input field and focusing on the input after submission.

5. **Code Clarity**: The code is generally clean and easy to understand. You've used clear naming conventions, and the inline comments help clarify specific decisions, like why `includes` wasn't used for object comparison.

6. **CSS Organization**: Each component has its own CSS file, which helps in keeping the styles scoped and organized.

### Suggestions for Improvement:

1. **Type Safety**: Since you are using TypeScript, ensure that you are fully utilizing its type safety. For instance, `err: any` can be replaced with a more specific type or an error-handling function that can handle multiple error types.

2. **Error Messaging**: The error messages could be made more user-friendly by displaying them in a consistent and visible manner, maybe using a global error boundary or context to manage these messages.

3. **Loading State**: You've implemented a loading state in `PastInterests`, but similar patterns might be necessary in other components that perform asynchronous operations, like when storing interests.

4. **DRY (Don't Repeat Yourself)**: Some of your components have similar logic (e.g., `CandidateInterests` and `PastInterests` both handle interest deletion with hover functionality). Consider abstracting this logic into a reusable hook or a higher-order component.

5. **Accessibility Considerations**: Adding more focus states, keyboard navigation, and ARIA attributes could enhance the accessibility of the forms and buttons.

6. **TODOs**: There are a few TODO comments, like using the `displayError` util. Make sure these are addressed before finalizing the project.

7. **CSS Class Naming**: Consider using a consistent naming convention for your CSS classes, such as BEM (Block Element Modifier), to make your styles more maintainable.

8. **Testing**: Ensure that you write unit tests for your components, especially the business logic in your hooks and utility functions.

Overall, this code is solid for a portfolio project, showcasing your ability to write well-structured, maintainable React code with attention to user experience and error handling. Addressing the suggestions above will further strengthen the quality of your project.
