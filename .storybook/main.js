/** @type {import("@storybook/react/types").StorybookConfig} */
module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: true,
                backgrounds: true,
                controls: false,
                docs: false,
                viewport: true,
                toolbars: true,
            },
        },
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
        "@storybook/addon-a11y",
    ],
    features: {
        interactionsDebugger: true,
    },
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
};
