/**
 * functional componentts
 */

import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import { Component } from "react";

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Monster Page</h1>
      {/* <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monstor"
        className="search"
      />
      <CardList monsters={filterMonsters} /> */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             // console.log("done");
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="title">Monster Page</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monstor"
//           className="search"
//         />
//         <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

 

export default App;
