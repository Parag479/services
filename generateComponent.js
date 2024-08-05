// generateComponent.js
const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
if (!componentName) {
    console.error('Please provide a component name.');
    process.exit(1);
}

const componentTemplate = (name) => `
import React from 'react';
import './${name}.css';

const ${name} = () => {
    return (
        <div className="${name}">
            <h1>${name}</h1>
            <p>This is the ${name} component.</p>
        </div>
    );
};

export default ${name};
`;

const cssTemplate = (name) => `
.${name} {
    /* Add your styles here */
}
`;

const testTemplate = (name) => `
import React from 'react';
import { render } from '@testing-library/react';
import ${name} from './${name}';

test('renders ${name} component', () => {
    const { getByText } = render(<${name} />);
    const linkElement = getByText(/This is the ${name} component/i);
    expect(linkElement).toBeInTheDocument();
});
`;

const componentDir = path.join(__dirname, 'src', 'components', componentName);

if (!fs.existsSync(componentDir)){
    fs.mkdirSync(componentDir, { recursive: true });
}

const componentFile = path.join(componentDir, `${componentName}.js`);
const cssFile = path.join(componentDir, `${componentName}.css`);
const testFile = path.join(componentDir, `${componentName}.test.js`);

fs.writeFileSync(componentFile, componentTemplate(componentName));
fs.writeFileSync(cssFile, cssTemplate(componentName));
fs.writeFileSync(testFile, testTemplate(componentName));

console.log(`Component ${componentName} created successfully at ${componentDir}`);
