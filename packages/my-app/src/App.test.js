import { MyComponent } from 'plants-react-library';
import { render } from '@testing-library/react';
// import { Card } from '../Card';

describe.only('test', () => {
  const ExampleComponent = () => (
    <div>
      <MyComponent>alp</MyComponent>
      <MyComponent>alp</MyComponent>
      <MyComponent>alp</MyComponent>
      <MyComponent>alp</MyComponent>
      <MyComponent>alp</MyComponent>
      <MyComponent>alp</MyComponent>
      <MyComponent>alp</MyComponent>
      <MyComponent>alp</MyComponent>
    </div>
  );
  it('test1', () => {
    const { debug} = render(<ExampleComponent></ExampleComponent>);
    debug();
  });
});
