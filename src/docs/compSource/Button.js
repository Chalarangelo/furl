export default `import { Button } from furl-components;

ReactDOM.render(<div>
  <Button color="plain">Default</Button>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="success">Success</Button>
  <Button color="warning">Warning</Button>
  <Button color="danger">Danger</Button>

  <Button fill="flat">Default</Button>
  <Button fill="solid">Solid</Button>
  <Button fill="light">Light</Button>
  <Button fill="gradient">Gradient</Button>
  <Button fill="outline">Outline</Button>
  <Button fill="ghost">Ghost</Button>
  <Button disabled>Disabled</Button>

  <Button size="small">Small</Button>
  <Button size="normal">Medium</Button>
  <Button size="large">Large</Button>

  <Button shape="normal">Normal</Button>
  <Button shape="rounded">Rounded</Button>
  <Button shape="circle">Circle</Button>
  <Button text="uppercase">Upper</Button>

  <Button type="link" href="https://google.com" openIn="external">Link</Button>

  <Button onClick={(e) => {console.log(e)}}>Event handling</Button>
</div>);
`;