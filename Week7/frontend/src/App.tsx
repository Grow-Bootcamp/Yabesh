import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ModalDemo from './pages/ModalDemo';
import NotFound from "./pages/NotFound";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import Unauthorized from "./pages/Unauthorized";
import Cart from "./pages/Cart";
import Todos from "./pages/Todos";
import CustomHookPractice from "./pages/CustomHookPractice";
import LocalStoragePractice from "./pages/LocalStoragePractice";
import FetchPractice from "./pages/FetchPractice";
import Analytics from "./pages/Analytics";
import Signup from "./pages/Signup";
import ContactForm from "./pages/ContactForm";
import RegisterWizard from "./pages/RegisterWizard";
import MemoPractice from "./pages/MemoPractice";
import UseMemoPractice from "./pages/UseMemoPractice";
import UseCallbackPractice from "./pages/UseCallbackPractice";

import { lazy, Suspense } from "react";

const LazyPage = lazy(() => import('./pages/LazyPage'));



function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/modal-demo" element={<ModalDemo />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/todos" element={<Todos />} />

        <Route path="/custom-hooks" element={<CustomHookPractice />} />
        <Route path="/local-storage" element={<LocalStoragePractice />} />
        <Route path="/fetch" element={<FetchPractice />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>

        <Route path="/contact" element={<ContactForm />} />
        <Route path="/register-wizard" element={<RegisterWizard />} />
        <Route path="/memo-practice" element={<MemoPractice />} />
        <Route path="/usememo-practice" element={<UseMemoPractice />} />
        <Route path="/usecallback-practice" element={<UseCallbackPractice />} />

        <Route 
          path="/lazy" 
          element={
            <Suspense fallback={<h2>Loading page...</h2>}>
              <LazyPage />
            </Suspense>
          } 
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;