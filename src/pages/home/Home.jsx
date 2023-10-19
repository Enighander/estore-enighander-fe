import React from 'react';
import Navbar from '../../components/navbar/navbar.jsx';
import CarouselComponent from '../../components/carousel/carousel.jsx';
import CategoryComponent from '../../components/category/category.jsx';
import CardComponent from '../../components/card/card.jsx';
import DiscountCard from '../../components/discountCard/popularCard.jsx';
// import NavbarLogin from '../../components/navbarLogin/index.jsx';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: 100 }}>
      <CarouselComponent />
      <CategoryComponent />
      <CardComponent />
      <DiscountCard />
      </div>
    </div>
  )
}



export default Home






// import React, {useEffect} from 'react';
// import Navbar from '../../components/navbar';
// import NavbarLogin from '../../components/navbarLogin';

// function Home () {
//     const [showNavbarLogin, setShowNavbarLogin] = React.useState(false); 

// useEffect(() => {
//     const userToken = localStorage.getItem("token");
//     if (userToken) {
//         setShowNavbarLogin(true);
//     } else {
//         setShowNavbarLogin(false);
//     }
// }, []);



//   return (
//     <div>
//        {showNavbarLogin ? <NavbarLogin/> : <Navbar />}
//     </div>
//   );
// }

// export default Home

