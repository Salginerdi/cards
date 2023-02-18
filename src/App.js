import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course"; // Course.js içinde arrow function değil de function component kullandığımızda { Course } yerine Course olarak import etmemiz gerekiyor.
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import CompleteWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur voluptates odio explicabo corporis ex voluptatem reiciendis aliquid atque nihil minus vitae, qui quae possimus quisquam asperiores nisi optio dolores!"
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap} // yukarıda tanımlanmamış bir değişken vermek istediğimde string olarak. Yukarıda import edilmiş bir tanımlamayı eklemek için {} kullanırız.
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur voluptates odio explicabo corporis ex voluptatem reiciendis aliquid atque nihil minus vitae, qui quae possimus quisquam asperiores nisi optio dolores!"
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Complete Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur voluptates odio explicabo corporis ex voluptatem reiciendis aliquid atque nihil minus vitae, qui quae possimus quisquam asperiores nisi optio dolores!"
              />
            </div>
            <div className="column">
              <Course
                image={CompleteWeb}
                title="Front-End"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur voluptates odio explicabo corporis ex voluptatem reiciendis aliquid atque nihil minus vitae, qui quae possimus quisquam asperiores nisi optio dolores!"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
