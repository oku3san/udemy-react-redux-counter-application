import React from 'react';

function App() {
  return (
    <div>
      <User name="Taro" />
    </div>
  );
}

type Props = {
  name: string;
};

const User: React.FC<Props> = (props) => {
  const { name } = props;

  return (
    <>
      <p>{name}!</p>
    </>
  );
};

export default App;
