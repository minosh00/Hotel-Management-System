import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonComponent from "./Screens/Components/ButtonComponent";
import Home from "./Screens/Home";
import HotelCardComponent from "./Screens/Components/HotelCardComponent";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import SampleCRUD from "./Screens/SampleCRUD";
import TextFieldComponent from "./Screens/Components/TextFieldComponent";
import Welcome from "./Screens/Welcome";
import Dashboard from "./Screens/Admin/Dashboard";
import AddHotel from "./Screens/Admin/AddHotel";
import AlertPopComponent from "./Screens/Components/AlertPopComponent";
import ManageHotels from "./Screens/Admin/ManageHotels";
import EditHotel from "./Screens/Admin/EditHotel";
import ViewHotels from "./Screens/Client/ViewHotels";
import BookHotel from "./Screens/Client/BookHotel";
import ManageBookings from "./Screens/Client/ManageBookings";
import FoodSplashScreen from './Screens/Admin/FoodSplashScreen';
import ManageAllFoodsMenu from './Screens/Admin/ManageAllFoodsMenu';
import AddNewFood from './Screens/Admin/AddNewFood';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Welcome' component={Welcome} />
        <Stack.Screen
          name="ViewHotels"
          options={{ title: "Hotels" }}
          component={ViewHotels}
        />
        <Stack.Screen
          name="BookHotel"
          options={{ title: "Book Hotel" }}
          component={BookHotel}
        />
        <Stack.Screen
          name="ManageBookings"
          options={{ title: "Manage Bookings" }}
          component={ManageBookings}
        />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='AdminDB' options={{title: 'Admin Dashboard'}} component={Dashboard} />
        <Stack.Screen name='AddHotel' options={{title: 'Add New Hotel'}} component={AddHotel} />
        <Stack.Screen name='ManageHotels' options={{title: 'Manage Hotels'}} component={ManageHotels} />
        <Stack.Screen name='EditHotel' options={{title: 'Edit Hotel'}} component={EditHotel} />
        <Stack.Screen name='AddNewFood' options={{title: 'Add New Food Menu'}} component={AddNewFood} />
        <Stack.Screen name='FoodSplashScreen' options={{title: 'Food Splash Screen'}} component={FoodSplashScreen} />
        <Stack.Screen name='ManageAllFoodsMenu' options={{title: 'All Food Menu'}} component={ManageAllFoodsMenu} />

        {/* Components */}
        <Stack.Screen name="Button" component={ButtonComponent} />
        <Stack.Screen name="TextField" component={TextFieldComponent} />
        <Stack.Screen name="HotelCard" component={HotelCardComponent} />
        <Stack.Screen name="AlertPop" component={AlertPopComponent} />
        {/* remove this when project has done */}
        <Stack.Screen name="CRUD" component={SampleCRUD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
