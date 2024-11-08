import classNames from 'classnames';
import { NavLink, To, useMatch } from 'react-router-dom';

export function Header() {
    return (
        <header className="bg-bryce-black/50 text-white py-4 fixed top-0 right-0 left-0 z-20">
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold">
                    Bryce Lewis
                </a>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <HeaderNavigationLink to="/" label={'About'} />
                    <HeaderNavigationLink to="/projects" label={'Projects'} />
                    <HeaderNavigationLink to="/photography" label={'Photography'} />
                    <HeaderNavigationLink to="/contact" label={'Contact'} />
                </nav>

                {/* Call to Action Button */}

                {/* Mobile Menu Icon */}
                <button className="md:hidden p-2 focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}

function HeaderNavigationLink({ to, label }: { to: To; label: string }) {
    const match = useMatch(`${typeof to === 'string' ? to : to.pathname || ''}/*`);

    console.log(match);

    return (
        <NavLink
            to={to}
            className={classNames('hover:text-gray-400', !!match && 'text-bryce-blue font-bold')}
            end={true}
        >
            {label}
        </NavLink>
    );
}
