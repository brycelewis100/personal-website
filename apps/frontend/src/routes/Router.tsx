import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { MenuWrapper } from '../components/layout/MenuWrapper';
import React from 'react';

const About = React.lazy(() => import('./about/route'));
const Projects = React.lazy(() => import('./projects/route'));

const Contact = React.lazy(() => import('./contact/route'));
const Photography = React.lazy(() => import('./photography/route'));

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path=""
                element={
                    <React.Suspense fallback={''}>
                        <MenuWrapper />
                    </React.Suspense>
                }
            >
                <Route
                    path=""
                    element={
                        <React.Suspense fallback={''}>
                            <About />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <React.Suspense fallback={''}>
                            <Projects />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/photography"
                    element={
                        <React.Suspense fallback={''}>
                            <Photography />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <React.Suspense fallback={''}>
                            <Contact />
                        </React.Suspense>
                    }
                />
            </Route>
        </>,
    ),
);
