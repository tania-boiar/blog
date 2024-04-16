// import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageNotFound } from './pages/PageNotFound';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { TermsPage } from './pages/TermsPage';
import { EditProfilePage } from './pages/EditProfilePage';
import { ArticlesDashboardPage } from './pages/ArticlesDashboardPage';
import { CreateArticlePage } from './pages/CreateArticlePage';
import { AuthorizedCustomerLayout } from './components/AuthorizedCustomerLayout';

export const App: React.FC = () => {
  return (
    <div className="flex-wrapper">
      <main className="page-bg">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/" element={<Navigate to="/sign-in" replace />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="/" element={<AuthorizedCustomerLayout />}>
            <Route path="edit-profile" element={<EditProfilePage />} />
            <Route path="/articles" element={<ArticlesDashboardPage />} />
            <Route path="add-article" element={<CreateArticlePage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};
