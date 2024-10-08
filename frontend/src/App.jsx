import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// Pages
import AddBlog from './blog/auth/AddBlog';
import Home from "./Home/Home";
import HomeBlog from "./blog/Home/HomeBlog";
import NotFound from "./Error/NotFound";
import SearchBlogCategory from "./blog/components/SearchBlogCategory";
import FarmingTips from "./blog/pages/FarmingTips";
import MarketTrends from "./blog/pages/MarketTrends";
import SuccessStories from "./blog/pages/SuccessStories";
import Sustainability from "./blog/pages/Sustainability";
import MarketInfo from "./pages/market/MarketInfo";
import Weather from "./pages/weather/Weather";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Announcement from "./pages/announcement/Announcement";
import BlogPost from "./blog/pages/BlogPost";
import AddExpertAdvice from "./pages/expert_advice/AddExpertAdvice";
import UserProfile from "./pages/user_profile/UserProfile";
import ExpertAdvice from "./pages/expert_advice/ExpertAdvice";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/terms/Privacy";
import BlogAuthor, { authorsLoader } from "./blog/pages/BlogAuthor";
import Help from "./pages/help/help"
import Guide from "./pages/help/guide"

// Layouts
import RootLayout from "./layouts/RootLayout";
import ExpertAdviceLayout from "./layouts/ExpertAdviceLayout";
import WeatherLayout from "./layouts/WeatherLayout";
import UserProfileLayout from "./layouts/UserProfileLayout";
import AnnouncementLayout from "./layouts/AnnouncementLayout";
import BlogAuthorLayout from "./blog/Layouts/BlogAuthorLayout";
import CategoryLayout from "./blog/Layouts/CategoryLayout";

// Hooks
import ExpertAdviceDetails from "./pages/expert_advice/ExpertAdviceDetails";
import ForgotPassword from "./auth/ForgotPassword";
import UserProfileDetails from "./pages/user_profile/UserProfileDetails";
import WeatherDetails from "./pages/weather/WeatherDetails";
import BlogAuthorDetails, { authorDetailsLoader } from "./blog/pages/BlogAuthorDetails";
import AnnouncementDetails from "./pages/announcement/AnnouncementDetails";

// Error Components
import ExpertAdviceError from "./Error/ExpertAdviceError";
import WeatherError from "./Error/WeatherError";
import UserError from "./Error/UserError";
import AnnouncementError from "./Error/AnnouncementError";
import AuthorError from "./blog/error/BlogAuthorError"
import AnnouncementForm from "./auth/AnnouncementForm";

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path={"market-info"} element={<MarketInfo />} />

      <Route path={"announcement"} element={<AnnouncementLayout />}>
        <Route index element={<Announcement />} />
        <Route path={":announceId"} element={<AnnouncementDetails />} errorElement={<AnnouncementError />} />
        <Route path="new" element={<AnnouncementForm />} />
      </Route>

      <Route path={"weather-data"} element={<WeatherLayout />}>
        <Route index element={<Weather />} />
        <Route path={":location"} element={<WeatherDetails />} errorElement={<WeatherError />} />
      </Route>

      <Route path={"about"} element={<About />} />
      <Route path={"contact"} element={<Contact />} />
      <Route path={"terms"} element={<Terms />} />
      <Route path={"privacy"} element={<Privacy />} />
      <Route path={"auth/login"} element={<Login />} />
      <Route path={"auth/register"} element={<Register />} />
      <Route path={"auth/new-password"} element={<ForgotPassword />} />

      <Route path={"user"} element={<UserProfileLayout />}>
        <Route index element={<UserProfile />} />
        <Route path={":username"} element={<UserProfileDetails />} errorElement={<UserError />} />
      </Route>

      <Route path="expert-advice" element={<ExpertAdviceLayout />}>
        <Route index element={<ExpertAdvice />} />
        <Route path=":title" element={<ExpertAdviceDetails />} errorElement={<ExpertAdviceError />} />
        <Route path="new" element={<AddExpertAdvice />} />
      </Route>

      <Route path={"help"} element={<Help />}/>
      <Route path={"guide"} element={<Guide />}/>

      <Route path="blog" element={<CategoryLayout />} >
        <Route index element={<HomeBlog />} />
        <Route path="new" element={<AddBlog />} />
        <Route path="search" element={<SearchBlogCategory />} />
        <Route path="farming-tips" element={<FarmingTips />} />
        <Route path="market-trends" element={<MarketTrends />} />
        <Route path="success-stories" element={<SuccessStories />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path=":title" element={<BlogPost />} />
        <Route path="authors" element={<BlogAuthorLayout />}>
          <Route index element={<BlogAuthor />} loader={authorsLoader} />
          <Route path=":id" element={<BlogAuthorDetails />} loader={authorDetailsLoader} errorElement={<AuthorError />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
