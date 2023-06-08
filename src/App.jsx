import { Routes, Route, Navigate } from 'react-router-dom';
import {lazy, Suspense} from 'react';

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Createpost } from './pages/Createpost';
import { Editpost } from './pages/Editpost';
import { Singlepage } from './pages/Singlepage';
import { Notfoundpage } from './pages/Notfoundpage';

import { Layout } from './components/Layout'

import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'


// const Blogpage = lazy(() => import('./pages/Blogpage'));
// const About = lazy(() => import('./pages/Aboutpage'));

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />}>
            <Route path="contacts" element={<p>Our contact</p>} />
            <Route path="team" element={<p>Our team</p>} />
          </Route>
          {/* <Route path="about" element={ <Suspense fallback={<p>Loading</p>}><About /></Suspense>}>
            <Route path="contacts" element={<p>Our contact</p>} />
            <Route path="team" element={<p>Our team</p>} />
          </Route> */}
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" 
            element={<Blogpage />}
          />
          {/* <Route path="posts" 
            element={
            <Suspense fallback={<p>Loading</p>}>
              <Blogpage />
            </Suspense>} /> */}
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route path="posts/new" element={
            <RequireAuth>
              <Createpost />
            </RequireAuth>
          } />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
