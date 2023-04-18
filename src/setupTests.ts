// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/dom';
import {setGlobalConfig} from '@storybook/testing-react';
import * as globalStorybookConfig from '../.storybook/preview';

// Replace with setProjectAnnotations if you are using the new pre-release version the addon
setGlobalConfig(globalStorybookConfig);
