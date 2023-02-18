import React from "react";

// export const Course = () => {
//   return <div>Course</div>;
// };

// rafc yazınca üstteki arrow function oluşuyor.
// App.js içindeki divlerin içine <Course/> yazarak otomatik import ettim.

function Course({ image, title, description }) {
  // bu şekilde kullanım da mümkündür. aşağıdaki yöntemleri kullanmak istiyorsam Course(props) yazmam gerekir.
  //   console.log(props);
  //   const title = props.title;
  //   const description = props.description; // bu şekilde kullanım da mümkündür.
  //   const { title, description } = props; // bu şekilde kullanım daha profesyoneldir.
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Kurslarım" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media"></div>
        <div className="media-content">
          <p className="title is-4">{title}</p>
        </div>
        <div>
          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
}
export default Course;

// ffc yazarak üstteki fonksiyonu elde ettim.
