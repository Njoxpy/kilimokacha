import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";


// pages
import AddBlog from './blog/auth/AddBlog';
import Fetch from './hooks/Fetch';
import Home from "./Home/Home";
import HomeBlog from "./blog/Home/HomeBlog";
import NotFound from "./pages/NotFound"
import SearchBlogCategory from "./blog/components/SearchBlogCategory";
import FarmingTips from "./blog/pages/FarmingTips"
import MarketTrends from "./blog/pages/MarketTrends"
import SuccessStories from "./blog/pages/SuccessStories"
import Sustainability from "./blog/pages/Sustainability"
import MarketInfo from "./pages/MarketInfo"
import Weather from "./pages/Weather"
import Login from "./auth/Login"
import Register from "./auth/Register"
import ForgotPassword from "./auth/ForgotPasswd"
import UserProfileDetails from "./pages/UserProfileDetails"
import Announcement from "./pages/Announcement"
import BlogPost from "./blog/pages/BlogPost"

// layouts: root
import RootLayout from "./layouts/RootLayout";
import ExpertAdviceLayout from "./layouts/ExpertAdviceLayout";
import WeatherLayout from "./layouts/WeatherLayout";
import UserProfileLayout from "./layouts/UserProfileLayout";
import AnnouncementLayout from "./layouts/AnnouncementLayouts"
import AddExpertAdvice from "./pages/AddExpertAdvice";
import ExpertAdvice from "./pages/ExpertAdvice"
import ExpertAdviceDetails from "./pages/ExpertAdviceDetails";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import WeatherDetails from "./pages/WeatherDetails";
import BlogAuthor from "./blog/pages/BlogAuthor"

// layouts: blog
import BlogAuthorLayout from "./blog/Layouts/BlogAuthorLayout";
import CategoryLayout from "./blog/Layouts/CategoryLayout";

// hooks

// details
import AnnouncementDetails from "./pages/AnnouncementDetails"

// loader
import { blogsLoader } from "./blog/pages/Blog";

// error
import ExpertAdviceError from "./Error/ExpertAdviceError";
import WeatherError from "./Error/WeatherError"
import UserProfile from "./pages/UserProfile";
import UserError from "./Error/UserError";
import BlogAuthorDetails from "./blog/pages/BlogAuthorDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="*" element={<NotFound />} />
      <Route path="market-info" element={<MarketInfo />} />
      <Route path="announcement" element={<AnnouncementLayout />}>
        <Route index element={<Announcement />} />
        <Route path=":id" element={<AnnouncementDetails />} />
      </Route>
      <Route path="weather-data" element={<WeatherLayout />} >
        <Route index element={<Weather />} />
        <Route path=":location" element={<WeatherDetails />} errorElement={<WeatherError />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="terms" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="user" element={<UserProfileLayout />}>
        <Route path="user" element={<UserProfile />} />
        <Route path=":username" element={<UserProfileDetails />} errorElement={<UserError />} />
      </Route>
      <Route path="reset-password" element={<ForgotPassword />} />
      <Route path="expert-advice" element={<ExpertAdviceLayout />} >
        <Route index element={<ExpertAdvice />} />
        <Route path=":id" element={<ExpertAdviceDetails />} errorElement={<ExpertAdviceError />} />
      </Route>
      <Route path="add-expert-advice" element={<AddExpertAdvice />} />
      <Route path="/blog" element={<CategoryLayout />}>
        <Route index element={<HomeBlog />} />
        <Route path="blog/:id" element={<BlogPost />} />
        <Route path="author" element={<BlogAuthorLayout />}>
          <Route index element={<BlogAuthor />}/>
          <Route path=":name" element={<BlogAuthorDetails />}/>
        </Route>
        <Route path="add" element={<AddBlog />} />
        <Route path="search" element={<SearchBlogCategory />} />
        <Route path="farming-tips" element={<FarmingTips />} />
        <Route path="market-trends" element={<MarketTrends />} />
        <Route path="success-stories" element={<SuccessStories />} />
        <Route path="sustainability" element={<Sustainability />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
