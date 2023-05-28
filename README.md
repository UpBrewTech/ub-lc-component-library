# Setup

### install dependencies

```
npm install
```

# Development

### Running storybook

```
npm run storybook
```

### Creating a new component

All new components should have their own component folder inside `src/components`
Each component folder should have the following:

1. `index.ts` - just exports everything from the actual component
2. `[ComponentName].tsx` - actual component
3. `[ComponentName.stories].tsx` - should include all the stories for this component

# Publishing a new version

Here are the proper steps to publish a new version:

1. Create a new branch from latest main
2. Update `package.json` by incrementing the `version` value (example, from 1.1.0 to 1.1.1)
3. Commit, push and create a pull request for your changes
4. Go to [actions](https://github.com/UpBrewTech/ub-lc-component-library/actions) and manually trigger `Publish Library` by selecting the latest revision for the main branch
