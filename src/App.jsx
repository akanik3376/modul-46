
// import './App.css'
// import CustomHookForm from './Components/CustomHookForm/CustomHookForm'
// import StateForm2 from './Components/StateForm/StateForm2'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateForm from './Components/StateForm/StateForm'

import ReuseForm from "./Components/ReuseForm/ReuseForm"

// import CustomHook from "./Components/CustomHookForm/CustomHook"

// import RefFoem2 from "./Components/RefForm/RefFoem2"

// import SimpleForm2 from "./Components/SimpleForm/SimpleForm2"

function App() {

  const HandelLogin = data => {
    console.log('Login data', data)

  }
  const HandelUpdate = data => {

    console.log('Update Profile data', data)


  }

  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}

      {/* practis */}
      {/* <SimpleForm2></SimpleForm2> */}
      {/* <StateForm2></StateForm2> */}
      {/* <RefFoem2></RefFoem2>s */}
      {/* <CustomHook></CustomHook> */}

      <ReuseForm titel={'Login'} btn={'Login'} HandelSubmit={HandelLogin}>
        <div>
          <h3>Login</h3>
          <p>Please login for visiting our website</p>
        </div>
      </ReuseForm>
      <ReuseForm titel={'UpdateProfile'} btn={'Update'} HandelSubmit={HandelUpdate}>
        <div>
          <h3>Update Profile</h3>
          <p>Please update your profile</p>
        </div>
      </ReuseForm>

    </>
  )
}

export default App
