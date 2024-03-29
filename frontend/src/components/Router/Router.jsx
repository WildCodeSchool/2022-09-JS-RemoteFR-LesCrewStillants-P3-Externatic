import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@components/Header/Header";

import Home from "@pages/Home";

import Register from "@pages/Auth/Register";
import Login from "@pages/Auth/Login";

import Profile from "@pages/Users/Profile";
import ProfileCandidat from "@pages/Users/ProfileCandidat";
import FavoriteOffers from "@pages/Users/FavoriteOffers";
import Candidatures from "@pages/Users/Candidatures";

import OfferList from "@pages/Offers/OfferList";
import Offer from "@pages/Offers/Offer";
import OfferRegister from "@pages/Offers/OfferRegister";

import Company from "@pages/Companies/Company";
import CompanyManagement from "@pages/Companies/CompanyManagement";

import Error from "@pages/Error/Error";

import UsersManagement from "@pages/Admin/UsersManagement";
import CompanyValidation from "@pages/Admin/CompanyValidation";
import CanditateManagement from "@pages/Companies/CandidateManagement";
import Footer from "@components/Footer/Footer";

import LoggedUsersLayout from "@components/Layouts/LoggedUsersLayout";
import SpecialUsersLayout from "@components/Layouts/SpecialUsersLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<LoggedUsersLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorite-offers" element={<FavoriteOffers />} />
          <Route path="/candidatures" element={<Candidatures />} />
        </Route>

        <Route path="/profile/:id" element={<ProfileCandidat />} />

        <Route path="/offers" element={<OfferList />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/offerRegister/:id" element={<OfferRegister />} />
        <Route path="/companies/:id" element={<Company />} />

        <Route path="*" element={<Error />} />

        <Route element={<SpecialUsersLayout />}>
          <Route path="/users-management" element={<UsersManagement />} />
          <Route path="/companies-validation" element={<CompanyValidation />} />
          <Route
            path="/candidate-management"
            element={<CanditateManagement />}
          />
          <Route path="/company-management" element={<CompanyManagement />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
