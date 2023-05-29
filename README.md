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

## shared components

All new components should be inside `src/components`

## page sections should be

All new section components should have their own component folder inside `src/features`
Each component folder should have the following:

1. `index.ts` - just exports everything from the actual component
2. `[ComponentName].tsx` - actual component

### Creating a new story

All stories should be under `src/stories` and named as `[ComponentName.stories].tsx`

# Publishing a new version

Here are the proper steps to publish a new version:

1. Make sure you have the most updated version of main
2. Update `package.json` by incrementing the `version` value (example, from 1.1.0 to 1.1.1)
3. Commit with just the message "publish"
4. Create a pull request and once merged, it will trigger a github action to create a new version
