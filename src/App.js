import React from 'react';
import Footer from './components/Footer';
import FormContainer from './components/FormContainer';
import HomeScreens from './screens/HomeScreens';


function App() {
  return (
    <FormContainer>
      <HomeScreens/>
      <Footer/>
    </FormContainer>
  );
}

export default App;
