import Reactotron, { openInEditor } from 'reactotron-react-js';

Reactotron.configure()
  .use(openInEditor())
  .connect();
