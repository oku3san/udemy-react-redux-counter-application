import React, { Component } from 'react';

// function App() {
//   const profiles = [
//     { id: 1, name: 'Taro', age: 10 },
//     { id: 2, name: 'Taka', age: 31 },
//   ];
//
//   return (
//     <div>
//       {profiles.map((profile) => {
//         return <User name={profile.name} age={profile.age} key={profile.id} />;
//       })}
//     </div>
//   );
// }
//
// type Props = {
//   name: string;
//   age: number;
// };
//
// const User: React.FC<Props> = (props) => {
//   const { name, age } = props;
//
//   return (
//     <>
//       <p>
//         Hi, I am {name}! and {age} years old.
//       </p>
//     </>
//   );
// };

const App = () => {
  return <Counter />;
};

type State = {
  count: number;
};

class Counter extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = { count: 0 };
  }

  handlePlusButton = (): void => {
    // this.setState((state) => ({ count: state.count + 1 }));
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleMinusButton = (): void => {
    // this.setState((state) => ({ count: state.count - 1 }));
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  resetButton = (): void => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div>count: {count}</div>
        <button type="button" onClick={this.handlePlusButton}>
          +1
        </button>
        <button type="button" onClick={this.handleMinusButton}>
          -1
        </button>
        <button type="button" onClick={this.resetButton}>
          reset
        </button>
      </>
    );
  }
}

export default App;
