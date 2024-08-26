# On splitting theme styles

**Note**: you can't actually use classes here, see next Section for organization

You can definitely split your themes into separate files to keep your styles organized. Here’s how you can structure it:

### 1. Split Themes into Separate Files

You can create separate files for each theme (e.g., `dark.scss` and `light.scss`). These files will define the CSS variables and specific styles for each theme.

#### `dark.scss`

```scss
// dark.scss

// Define CSS variables for the dark theme
:root {
	--background-color-dark: #282c34;
	--text-color-dark: #0af29f;
	--background-color-input-dark: #23272e;
	--background-color-header-footer-dark: #242526;
	--placeholder-color-dark: #818589;
	--border-color-dark: #0af29f;
	--box-shadow-color-dark: #0af29f;
	--daily-blocks-background-dark: #303846;
	--past-interests-background-dark: #23272e;
	--past-interests-border-dark: #242526;
	--daily-blocks-border-dark: aquamarine;

	// Set default theme (optional)
	--background-color: var(--background-color-dark);
	--text-color: var(--text-color-dark);
}

// Apply the dark theme
.dark {
	--background-color: var(--background-color-dark);
	--text-color: var(--text-color-dark);

	* {
		color: var(--text-color-dark);
	}

	main {
		background-color: var(--background-color-dark);
	}

	input {
		background-color: var(--background-color-input-dark);

		&::placeholder {
			color: var(--placeholder-color-dark);
		}
	}

	button {
		background-color: var(--background-color-input-dark);
	}

	nav a,
	nav a:visited,
	.appLink,
	.appLink:visited {
		color: var(--text-color-dark);
	}

	.appHeader {
		background-color: red; /* Adjust as needed */
	}

	.formField:focus {
		border-color: var(--border-color-dark);
	}

	.signInForm p {
		color: white;
	}

	.daily-forms {
		input,
		select {
			background-color: var(--background-color-dark);
			border-bottom: 1px solid var(--border-color-dark);
		}

		section {
			box-shadow: 0 8px 8px -4px var(--box-shadow-color-dark);
		}
	}

	.interest button {
		background-color: var(--background-color-dark);
	}

	.past-interests p {
		border: 1px solid var(--past-interests-border-dark);
		background-color: var(--past-interests-background-dark);
	}

	.daily-blocks {
		background-color: var(--daily-blocks-background-dark);

		p {
			border: 1px solid var(--daily-blocks-border-dark);
		}
	}

	.footer {
		background-color: var(--background-color-header-footer-dark);
	}

	#success {
		box-shadow: 0 8px 8px -4px var(--box-shadow-color-dark);
	}
}
```

#### `light.scss`

```scss
// light.scss

// Define CSS variables for the light theme
:root {
	--background-color-light: #ffffff;
	--text-color-light: #000000;
	--background-color-input-light: #f0f0f0;
	--background-color-header-footer-light: #e0e0e0;
	--placeholder-color-light: #a0a0a0;
	--border-color-light: #007acc;
	--box-shadow-color-light: #cccccc;
	--daily-blocks-background-light: #e0e0e0;
	--past-interests-background-light: #f5f5f5;
	--past-interests-border-light: #cccccc;
	--daily-blocks-border-light: #007acc;

	// Set default theme (optional)
	--background-color: var(--background-color-light);
	--text-color: var(--text-color-light);
}

// Apply the light theme
.light {
	--background-color: var(--background-color-light);
	--text-color: var(--text-color-light);

	* {
		color: var(--text-color-light);
	}

	main {
		background-color: var(--background-color-light);
	}

	input {
		background-color: var(--background-color-input-light);

		&::placeholder {
			color: var(--placeholder-color-light);
		}
	}

	button {
		background-color: var(--background-color-input-light);
	}

	nav a,
	nav a:visited,
	.appLink,
	.appLink:visited {
		color: var(--text-color-light);
	}

	.appHeader {
		background-color: blue; /* Adjust as needed */
	}

	.formField:focus {
		border-color: var(--border-color-light);
	}

	.signInForm p {
		color: black;
	}

	.daily-forms {
		input,
		select {
			background-color: var(--background-color-light);
			border-bottom: 1px solid var(--border-color-light);
		}

		section {
			box-shadow: 0 8px 8px -4px var(--box-shadow-color-light);
		}
	}

	.interest button {
		background-color: var(--background-color-light);
	}

	.past-interests p {
		border: 1px solid var(--past-interests-border-light);
		background-color: var(--past-interests-background-light);
	}

	.daily-blocks {
		background-color: var(--daily-blocks-background-light);

		p {
			border: 1px solid var(--daily-blocks-border-light);
		}
	}

	.footer {
		background-color: var(--background-color-header-footer-light);
	}

	#success {
		box-shadow: 0 8px 8px -4px var(--box-shadow-color-light);
	}
}
```

### 2. Import and Use Theme Files

Now that you have separate theme files, you can import them into your main `themes.scss` file and apply them as needed:

#### `themes.scss`

```scss
@import "./dark";
@import "./light";
```

### 3. Ensure Proper Import in Your Global Stylesheet

Make sure to import `themes.scss` in your global stylesheet or directly in your main entry point as discussed previously:

#### `index.scss`

```scss
@import "./themes";
@import "./style/fonts";
@import "./style/base";
```

### 4. Apply Theme Classes in React

You can still switch themes dynamically in your React component by applying the `dark` or `light` class to a top-level element:

```tsx
import Header from "./components/Header/Header"
import MainRoutes from "./routes/MainRoutes"
import Footer from "./components/Footer/Footer"
import styles from "./Main.module.scss"

interface MainProps {
	theme: string
	setTheme: (theme: string) => void
}

const Main: React.FC<MainProps> = ({ theme, setTheme }) => {
	return (
		<div className={`${theme === "dark" ? "dark" : "light"} ${styles.main}`}>
			<Header setTheme={setTheme} theme={theme} />
			<MainRoutes />
			<Footer theme={theme} />
		</div>
	)
}

export default Main
```

### Summary

By splitting your themes into different files (`dark.scss` and `light.scss`), you keep your styles more organized and maintainable. This approach allows you to manage complex theme styles separately while still enabling dynamic theming in your React application. Each theme file defines the necessary CSS variables and theme-specific styles, and you can import these files into a central `themes.scss` to apply them globally.

# On organization

You're spot on with the way you're thinking about the problem, and you've accurately identified the trade-offs between the two approaches. Let's break down your two options and address your concerns about specificity and how CSS Modules interact with global styles.

### Option 1: Use Generic Variables and Apply Styles in Modules

**Pros:**

- **No Style Leaks**: By keeping all the component-specific styles within their respective CSS Modules, you completely avoid any unintended style leaks or clashes. The styles are scoped to the component, ensuring that each component's styling remains self-contained.
- **Modular and Reusable**: This approach makes your components highly modular and reusable across different projects. The components only depend on generic CSS variables, which you can redefine for each project.

**Cons:**

- **Code Repetition**: There will be some repetition because each component needs to reference and apply the generic variables like `--background-color`, `--text-color`, etc., individually.
- **Partial Dependence**: To reduce repetition, you'll likely rely on Sass partials. However, this adds another layer of dependency that needs to be managed across projects.

### Option 2: Set Both Variables and Tag Styles Globally

**Pros:**

- **Reduced Repetition**: By applying certain global styles (like font colors, background colors) to common elements (e.g., `body`, `*`, `h1`, `p`), you reduce the amount of repetition in your component styles. This can be particularly useful for consistent theming across an app.
- **Simplified Theming**: Global styles like `body` or `*` can handle broad theming tasks, simplifying the component-level styling.

**Cons:**

- **Potential Specificity Issues**: If you set global styles with broad selectors like `*` or `body`, they can indeed lead to specificity challenges. For example, if you apply a background color to `*` and then want to override it in a specific component, you'll need to ensure the component's style is more specific.
- **Global Impact**: Changing a global style might unintentionally affect multiple components, leading to bugs or unexpected changes that can be harder to debug.

### CSS Specificity Concerns

When you use a global selector like `*` to set a background or font color, it has a low specificity (the lowest, in fact). This means that styles defined in your CSS Modules, which are scoped and typically more specific (e.g., `.appHeader_xyz123`), will generally override these global styles without any issues.

**Example:**

```scss
// themes.scss
* {
	background-color: var(--background-color);
	color: var(--text-color);
}

// Header.module.scss
.appHeader {
	background-color: red; // This will override the global background-color
}
```

In this example, `.appHeader` will override the `*` selector because `.appHeader` is more specific.

### Final Recommendation

Given the pros and cons, here's what I would suggest:

- **Use Option 1**: Define your CSS variables globally (in `:root` or via your theme classes) but apply styles within your components using these variables. This gives you control over each component's styles while leveraging the power of CSS variables for theming. Yes, there's a bit of repetition, but it keeps your components modular, reusable, and avoids specificity issues.
- **Leverage Sass Partials**: To reduce repetition, use Sass partials where it makes sense. For example, you could create a partial for common button styles that all buttons in your app can import, ensuring consistency while avoiding global style leaks.

- **Be Cautious with Global Styles**: If you decide to set global styles (like background or font color), apply them to specific, well-chosen selectors (e.g., `body` or `html`) and avoid broad selectors like `*`. This minimizes the risk of unintended side effects.

### Example of Option 1 in Practice

```scss
// themes.scss
:root {
	--background-color-light: #ffffff;
	--text-color-light: #000000;

	--background-color-dark: #282c34;
	--text-color-dark: #0af29f;

	--background-color: var(--background-color-dark);
	--text-color: var(--text-color-dark);
}

// Header.module.scss
.header {
	background-color: var(--background-color); // Uses the theme variable
	color: var(--text-color);
}

// Button.module.scss
.button {
	background-color: var(--background-color);
	color: var(--text-color);
}
```

This way, each component is responsible for its own styles but leverages globally defined CSS variables to maintain consistent theming. This approach balances the need for modular, reusable components with the power of global theming via CSS variables.
