import {Suspense} from 'react'
import { Layout } from './Component/Layout/Layout'
import { Route, Routes } from "react-router-dom";
import {AppPhoneBook} from './Pages/Phomebook/AppPhoneBook'
import { HomePage } from './Pages/HomePage/HomePage'
import  Movies  from './Pages/Movie/vievs/Movies'
import MovieDetail  from './Pages/Movie/vievs/MovieDetail'
import  Cast  from './Pages/Movie/vievs/Cast'
import Revievs from './Pages/Movie/vievs/Revievs'
export function App() {
  return (
    <>
<Suspense fallback={<div>Loading</div>}>
    <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
        <Route path="phonebook" element={<AppPhoneBook />} />
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:moviesId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="revievs" element={<Revievs />}/>
        </Route>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Route>
      </Routes>
      </Suspense>
    </>
  );
}


