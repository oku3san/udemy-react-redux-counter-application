import React from 'react';

function App() {
  const profiles = [
    { id: 1, name: 'Taro', age: 10 },
    { id: 2, name: 'Taka', age: 31 },
  ];

  return (
    <div>
      {profiles.map((profile) => {
        return <User name={profile.name} age={profile.age} key={profile.id} />;
      })}
    </div>
  );
}

type Props = {
  name: string;
  age: number;
};

const User: React.FC<Props> = (props) => {
  const { name, age } = props;

  return (
    <>
      <p>
        Hi, I am {name}! and {age} years old.
      </p>
    </>
  );
};

export default App;
